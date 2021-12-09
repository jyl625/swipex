import React from 'react';
import SwipeIndexItem from './swipe_index_item';

import '../stylings/reset.css'
import '../stylings/swipe_index.css'
// import signup_form from '../session/signup_form';

class SwipeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      swipesLoaded: false
    })
  }

  componentDidMount() {
    if (!this.state.swipesLoaded) {
      this.props.requestSwipes().then(() => {
        this.setState({
          swipesLoaded: true
        })
      })
    }
    // need to request user
  }

  listIndexItems() {
    <div>TESTING</div>
    // console.log(this.props.swipes)
    // this.props.swipes.map((swipe, idx) => {
    //         return <li key={idx}>
    //           <SwipeIndexItem swipe={swipe}/>
    //         </li>
    //       })
  }

  // listByCafeterias() {

  //     let cafeterias = []
  //     console.log(this.props.match.params.cafeteriaName)
  //     if (this.props.match.params.cafeteriaName === undefined) {
  //       cafeterias = [...this.props.cafeterias]
  //     } else {
  //       const selectedCafeteria = this.props.cafeterias.filter(cafeteria => {
  //         return cafeteria.name.replace(/\s/g, "").toLowerCase() === this.props.match.params.cafeteriaName
  //       })
  //       cafeterias = selectedCafeteria;
  //     }
  //     return cafeterias.map((cafeteria, idx) => {
  //       return (
  //         <div className="cafeteria-container" key={idx}>
  //           <div>
  //             {cafeteria.location} - {cafeteria.name.toUpperCase()}
  //           </div>
  //           <div className="swipe-index-items-container">
  //             {this.listIndexItemsByCafeterias(cafeteria._id)}
  //           </div>

  //         </div>
  //       )
  //     })
  //   } else {
  //     return <div>Loading cafeterias</div>
  //   }
  // }

  listIndexItemsByCafeterias(cafeteriaId) {
    const swipes = this.props.swipes
    if (swipes.length !== 0) {
      const filteredSwipes = this.selectSwipesByCafeterias(swipes, cafeteriaId);
      // console.log("filtered",filteredSwipes)
      return filteredSwipes.map ((swipe, idx) => {
        return <SwipeIndexItem key={idx}swipe={swipe}/>
      })
    } else {
      <div>No swipes to show here...</div>
    }
  }

  selectSwipesByCafeterias(swipes, cafeteriaId) {
    // console.log("swipes", this.props.swipes)
    // console.log("cafeId", cafeteriaId)
    // if (swipes.length !== 0) {
      console.log("swipes",swipes)
      return swipes.filter(swipe => {
        return swipe.cafeId === cafeteriaId && swipe.open === true
      })
    // } else {
    //   return []
    // }
  }

  render() {
    // return <div>{this.props.cafeteria.name}</div>
    console.log("state", this.props)
    if (this.state.swipesLoaded) {
      return (
        // <div className="swipe-index">
          <div className="swipe-index-items-container">
            {this.listIndexItemsByCafeterias(this.props.cafeteria._id)}
          </div>
        // </div>
      )
    } else {
      return <div>Gathering swipes...</div>
    }
  }
}

export default SwipeIndex;