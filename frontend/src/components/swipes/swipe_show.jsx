import React from 'react';
import '../stylings/swipe_show.css';
import { withRouter } from "react-router";

class SwipeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swipeLoaded: true,
      error: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.redirectToNewThread = this.redirectToNewThread.bind(this)
  }

  componentDidMount() {
    // this.props.requestSwipe(this.props.match.params.swipeId).then(() => {
    //   this.setState({swipeLoaded: true})
    // })
  }

  handleClick() {
    return () => {
      console.log(this.props.currentUser)
      if (!this.props.session.isAuthenticated) {
        console.log("here")
        this.setState( {
          error: true
        })
      } else {
        this.props.requestSellPostBuyerSellerThreads(
          this.props.swipe._id,
          this.props.currentUser.id,
          this.props.swipe.seller
        ).then((res) => {


        if (res.thread.data) {
          this.props.closeModal();
          console.log("modal close")
          return this.redirectToNewThread(res.thread.data._id)
        } else {
          this.props.createThread({
            sellPost: this.props.swipe._id,
            seller: this.props.swipe.seller,
            buyer: this.props.currentUser.id
          }).then((res) => {
            this.props.closeModal();
            console.log("modal close")
            this.redirectToNewThread(res.thread.data._id)
          })
        }

        })
      }
      
    }
  }

  redirectToNewThread(newThreadId) {
    // console.log(this.props.threads)
    // let newThread
    // Object.keys(this.props.threads).forEach(threadId => {
    //   const thread = this.props.threads[threadId]
    //   if (thread.sellPost === this.props.match.params.swipeId) {
    //     newThread = thread
    //   }
    // })
    // console.log("just need to push)")
    // console.log(newThread)
    this.props.history.push(`/threads/${newThreadId}`)
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
      return <input class="your-own" type="button" value="Contact Seller"/>
    } else {
      return <input type="button" value="Contact Seller" onClick={this.handleClick()}/>
    }
  }

  parseTimeString = (timeStr) => {
    const dateObj = new Date(timeStr)
    const dateString = dateObj.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
    const timeString = dateObj.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: '2-digit',
      minute: '2-digit'
    })
    return `${dateString} at ${timeString}`
  }

  displayErrors() {
    if (this.state.error) 
      return <div className="swipe-show-error">Must log in first!</div>
  }

  render() {
    if (this.state.swipeLoaded) {
      return (
        <div className="swipe-show-page">
          <div className="swipe-info-container">
            <span onClick={this.props.closeModal} className="close-x">X</span>
            <div className="swipe-info-header"><strong>{this.findCafeteria(this.props.swipe.cafeId).name.toUpperCase()}</strong> Meal Swipe</div>
            <div>{this.props.swipe.mealType.toUpperCase()}</div>
            <div className="post-at">posted at: {this.props.swipe.timeCreated.slice(0,10)}</div>
            <div><strong>$ {this.props.swipe.askPrice}</strong></div>
            <div>Details:</div>
            <div><strong>Expiration Date:</strong> {this.props.swipe.expiration}</div>
            <div><strong>Let's meet at:</strong> {this.parseTimeString(this.props.swipe.meetingTime)}</div>
            <div className="seller-id">Seller ID: {this.props.swipe.seller}</div>
          </div>
          {this.renderContactSellerButton()}
          {this.displayErrors()}
        </div>
      )
    } else {
      return <div>Searching for the swipe...</div>
    }
  }
}

export default withRouter(SwipeShow);