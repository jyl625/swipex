import React from 'react';

import '../stylings/swipe_show.css'

class SwipeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swipeLoaded: false
    }
  }

  componentDidMount() {
    this.props.requestSwipe(this.props.match.params.swipeId).then(() => {
      this.setState({swipeLoaded: true})
    })
  }

  handleClick() {
    return () => {
      return console.log("clicked!")
    }
  }

  findCafeteria(cafeId) {
    for (let i = 0; i < this.props.cafeterias.length; i++) {
      if (this.props.cafeterias[i]._id === cafeId) {
        return this.props.cafeterias[i]
      }
    }
  }

  renderContactSellerButton() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.swipe.seller) {
      return <div>YOU CAN'T BUY YOUR OWN SWIPES</div>
    } else {
      return <input type="button" value="Contact Seller" onClick={this.handleClick()}/>
    }
  }

  render() {
    if (this.state.swipeLoaded) {
      return (
        <div className="swipe-show-page">
          <div className="swipe-info-container">
            <div>$ {this.props.swipe.askPrice}</div>
            <div>{this.findCafeteria(this.props.swipe.cafeId).name.toUpperCase()}</div>
            <div>{this.props.swipe.mealType}</div>
            <div>{this.props.swipe.expiration}</div>
            <div>{this.props.swipe.seller}</div>
            <div>{this.props.swipe.timeCreated}</div>
          </div>
          {this.renderContactSellerButton()}
        </div>
      )
    } else {
      return <div>Searching for the swipe...</div>
    }
  }
}

export default SwipeShow;