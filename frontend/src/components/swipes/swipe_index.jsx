import React from 'react';
import SwipeIndexItem from './swipe_index_item';
// import Keys from '../../../../config/keys'

import '../stylings/reset.css'
import '../stylings/swipe_index.css'
// import signup_form from '../session/signup_form';

class SwipeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      swipesLoaded: false,
      sort: "new", //"new", "priceAsc", "priceDec", "exp"
      breakfast: true,
      lunch: true,
      dinner: true,
      googleAPIKey: null
    })
  }

  componentDidMount() {
    if (!this.state.googleAPIKey) {
      this.setState({
        googleAPIKey: process.env.GOOGLE_API_KEY
      })
    }
    if (!this.state.swipesLoaded) {
      this.props.requestSwipes().then(() => {
        this.setState({
          swipesLoaded: true
        })
      })
    }
    // need to request user
  }

  listIndexItemsByCafeterias(cafeteriaId) {
    const swipes = this.props.swipes;
    const swipeShow = this.props.swipeShow;
    const requestSwipe = this.props.requestSwipe.bind(this);

    if (swipes.length !== 0) {
      let filteredSwipes = this.selectSwipesByCafeterias(swipes, cafeteriaId);
      filteredSwipes = (this.filterSwipes(filteredSwipes));
      // console.log(this.state.sort)
      filteredSwipes = this.sortSwipes(filteredSwipes)
      // console.log("sorted", filteredSwipes)
      return filteredSwipes.map ((swipe, idx) => {
        return <SwipeIndexItem key={idx} swipe={swipe} swipeShow={swipeShow} requestSwipe={requestSwipe}/>
      })
    } else {
      <div>No swipes to show here...</div>
    }
  }

  filterSwipes(swipes) {
    return swipes.filter(swipe => {
      return this.state[swipe.mealType]
    })
  }
  sortSwipes(swipes) {
    return swipes.sort(this.sortMethod())
  }

  sortMethod() {
    //"new", "priceAsc", "priceDec", "exp"
    switch (this.state.sort) {
      case "new":
        return (a,b) => a.timeCreated > b.timeCreated;
      case "priceAsc":
        return (a,b) => a.askPrice - b.askPrice;
      case "priceDec":
        return (a,b) => b.askPrice - a.askPrice;
      case "exp":
        return (a,b) => new Date(a.expiration) - new Date(b.expiration);
      default:
        break;
    }
  }

  selectSwipesByCafeterias(swipes, cafeteriaId) {
    // console.log("swipes", this.props.swipes)
    // console.log("cafeId", cafeteriaId)
    // if (swipes.length !== 0) {
      return swipes.filter(swipe => {
        return swipe.cafeId === cafeteriaId && swipe.open === true
      })
    // } else {
    //   return []
    // }
  }

  // this.state = ({
  //   swipesLoaded: false,
  //   sort: "new", //"new", "priceAsc", "priceDec", "exp"
  //   breakfast: true,
  //   lunch: true,
  //   dinner: true
  // })

  renderFilterSort() {
    return (
      <div className="sort-filter-container">
        <div className="sort-container">
          <div className={`sort ${this.sortSelected("new")}`} 
                onClick={this.selectSort("new")}>New</div>
          <div className={`sort ${this.sortSelected("exp")}`} 
                onClick={this.selectSort("exp")}>Expiring Soon</div>
          <div className={`sort ${this.sortSelected("priceAsc")}`} 
                onClick={this.selectSort("priceAsc")}>Price (asc)</div>
          <div className={`sort ${this.sortSelected("priceDec")}`} 
                onClick={this.selectSort("priceDec")}>Price (dec)</div>
 
        </div>
        <div className="filter-container">
          <div className={`filter ${this.filterSelected("breakfast")}`} 
                onClick={this.toggleFilter("breakfast")}>Breakfast</div>
          <div className={`filter ${this.filterSelected("lunch")}`} 
                onClick={this.toggleFilter("lunch")}>Lunch</div>
          <div className={`filter ${this.filterSelected("dinner")}`} 
                onClick={this.toggleFilter("dinner")}>Dinner</div>
        </div>
      </div>
    )
  }

  sortSelected(sortType) {
    if (this.state.sort === sortType) {
      return "selected"
    }
  }

  selectSort(sortType) {
    return () => this.setState({
      sort: sortType
    })
  }

  filterSelected(filterType) {
    if (this.state[filterType]) {
      return "selected"
    }
  }

  toggleFilter(filterType) {
    switch (filterType) {
      case "breakfast":
        return () => this.setState({breakfast: !this.state.breakfast})
      case "lunch":
        return () => this.setState({lunch: !this.state.lunch})
      case "dinner":
        return () => this.setState({dinner: !this.state.dinner})
      default:
        break;
    }
  }

  renderMap() {
    const lat = this.props.cafeteria.lat
    const lng = this.props.cafeteria.lng
    // const googleAPIKey = require('../../config/keys').googleAPIKey
    // const googleAPIKey = process.env.GOOGLE_API_KEY
    if (!this.state.googleAPIKey)
      return null;
    console.log(this.state.googleAPIKey)
    return (
      <a href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`} target="_blank">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=17&size=400x400&maptype=roadmap&markers=size:large%7Ccolor:blue%7C${lat},${lng}&key=${this.state.googleAPIKey}`} alt="map" />
      </a>
    )
  }

  render() {
    // return <div>{this.props.cafeteria.name}</div>
    // console.log(this.state)
    if (this.state.swipesLoaded) {
      return (
                  <div className="cafeteria-show-page">
            <div className="cafeteria-banner">
              <img className={`${this.props.cafeteria.name.replace(/\s/g, "")}`} src={this.props.cafeteria.photoUrls[0]} alt="cafeteria banner" />
            </div>
        <div className="panel-container">
          <div className="left-pannel">
            <div className="cafeteria-container">
              <div className="cafeteria-name-container">
                <div className="cafeteria-name-wrapper">{this.props.cafeteria.name.toUpperCase()}</div>
              </div>
              {this.renderFilterSort()}
              <div className="swipe-index-items-container">
                {this.listIndexItemsByCafeterias(this.props.cafeteria._id)}
              </div>
            </div>
            </div>
            <div className="right-panel">
              <div className="map-container">
                {this.renderMap()}
              </div>
              <div className="menu-container">
                {/* <ul>Breakfast
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                </ul>
                <ul>Lunch
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                </ul>
                <ul>Dinner
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                </ul> */}
              </div>
            </div>
          </div>
                   </div>
      )
    } else {
      return <div>Gathering swipes...</div>
    }
  }
}

export default SwipeIndex;