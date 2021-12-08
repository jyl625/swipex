import React from 'react';
import SwipeIndexContainerCopy from '../swipes/swipe_index_container_copy';

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
      console.log(this.props.match.params.cafeteriaName)
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
          <div className="cafeteria-container" key={idx}>
            <div className="cafeteria-name">
              {/* {cafeteria.location} - {cafeteria.name.toUpperCase()} */}
              {cafeteria.name.toUpperCase()}
            </div>
            <SwipeIndexContainerCopy cafeteria={cafeteria} key={idx}/>
          </div>
          
        )
      })
    } else {
      return <div>Loading cafeterias</div>
    }
  }

  render() {
    console.log("state", this.props)
    if (this.props.cafeterias.length > 0) {
      return (
        <div className="cafeteria-show-page">
          {
            this.listCafeteriaSwipes()
          }
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default CafeteriaShow;