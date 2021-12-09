import React from 'react';
import SwipeIndexContainer from '../swipes/swipe_index_container';

import '../stylings/reset.css'
import '../stylings/swipe_index.css'
// import signup_form from '../session/signup_form';

class CafeteriaShow extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = ({
  //     swipesLoaded: false
  //   })
  // }

  // componentDidMount() {
  //   if (!this.state.swipesLoaded) {
  //     this.props.requestSwipes().then(() => {
  //       this.setState({
  //         swipesLoaded: true
  //       })
  //     })
  //   }
  //   // need to request user
  // }


  listCafeteriaSwipes() {
    if (this.props.cafeterias.length > 0) {
    // if (this.props.cafeterias !== []) {
      let cafeterias = []
      if (this.props.match.params.cafeteriaName === "all") {
        cafeterias = [...this.props.cafeterias]
      } else {
        const selectedCafeteria = this.props.cafeterias.filter(cafeteria => {
          return cafeteria.name.replace(/\s/g, "").toLowerCase() === this.props.match.params.cafeteriaName
        })
        cafeterias = selectedCafeteria;
      }
      return cafeterias.map((cafeteria, idx) => {
        return (
          // <div className="panel-container">
          //   <div className="left-pannel">
          //     <div className="cafeteria-container" key={idx}>
          //       <div className="cafeteria-name-container">
          //         <div className="cafeteria-name-wrapper">{cafeteria.name.toUpperCase()}</div>
          //       </div>
                <SwipeIndexContainer cafeteria={cafeteria} key={idx}/>
              /* </div>
            </div>
            <div className="right-panel">
              <div className="map-container"></div>
              <div className="menu-container">
                <ul>Breakfast
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
                </ul>
              </div>
            </div>
          </div> */
        )
      })
    } else {
      return <div>Building cafeterias...</div>
    }
  }

  render() {
    if (this.props.cafeterias.length > 0) {
      return (
        <div className="cafeteria-show-page">
          <div className="cafeteria-banner">
            <img src="https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/UCLA-dining_0.jpg?itok=vkDGYyJj" alt="cafeteria banner" />
          </div>
          {this.listCafeteriaSwipes()}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default CafeteriaShow;