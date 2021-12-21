import React from "react";
import { withRouter } from "react-router";
import Modal from "../modal/modal";


import ThreadCommentListItem from "./thread_comment_list_item";

import '../stylings/reset.css'
import '../stylings/thread.css'

class ThreadShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      // closePrice: null,
      buyerOffer: null,
      sellerOffer: null,
      updated: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackProfile = this.handleBackProfile.bind(this);
    this.handleBackCafe = this.handleBackCafe.bind(this);
    this.handleBuyerOffer = this.handleBuyerOffer.bind(this);
    this.handleSellerOffer = this.handleSellerOffer.bind(this);
    this.handleBuyConfirm = this.handleBuyConfirm.bind(this);
    this.handleSellConfirm = this.handleSellConfirm.bind(this);
  }

  componentDidMount(){
    this.props.requestThread(this.props.match.params.threadId)
      .then((res) => this.setState({sellerOffer: res.thread.data.sellPost.askPrice}))
  }

  componentDidUpdate(prevProps, prevState){
    // debugger
    if (this.state.updated !== prevState.updated) {
      this.props.requestThread(this.props.match.params.threadId);
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const newComment = {
      commentor: this.props.currentUser._id,
      conversation: this.props.thread._id,
      content: this.state.comment
    }
    // this.setState({ updated: !this.state.updated })
    this.props.createComment(newComment)
      .then(res => {
        this.setState({
          comment: "",
          updated: this.state.updated + 1
        })
      })
  }

  handleBuyConfirm(e){
    e.preventDefault();
    const closePrice = (this.props.thread.sellerOffer) ? this.props.thread.sellerOffer : this.state.sellerOffer;
    const newExchange = {
      closePrice: closePrice,
      sellPost: this.props.thread.sellPost._id,
      seller: this.props.thread.buyer._id,
      buyer: this.props.thread.seller._id
    }
    this.props.createNewExchange(newExchange)
      .then(res => {
        const conversation = Object.assign({}, this.props.thread)
        conversation["deal"] = closePrice;
        this.props.updateThread(conversation)
      }).then(res => {
        this.setState({
          updated: this.state.updated + 1
        })
      })
  }

  handleSellConfirm(e) {
    e.preventDefault();
    // debugger
    const newExchange = {
      closePrice: this.props.thread.buyerOffer,
      sellPost: this.props.thread.sellPost._id,
      seller: this.props.thread.buyer._id,
      buyer: this.props.thread.seller._id
    }
    this.props.createNewExchange(newExchange)
      .then(res => {
        const conversation = Object.assign({}, this.props.thread)
        conversation["deal"] = this.props.thread.buyerOffer;
        this.props.updateThread(conversation)
        // debugger
      }).then(res => {
        this.setState({
          updated: this.state.updated + 1
        })
      })
  }

  handleBuyerOffer(e){
    e.preventDefault();
    const conversation = Object.assign({}, this.props.thread)
    conversation["buyerOffer"] = this.state.buyerOffer;
    this.props.updateThread(conversation)
      .then((res)=>{
        this.setState({ updated: this.state.updated + 1})
        // debugger
      })
  }

  handleSellerOffer(e) {
    e.preventDefault();
    const conversation = Object.assign({}, this.props.thread)
    conversation["sellerOffer"] = this.state.sellerOffer;
    this.props.updateThread(conversation)
      .then((res) => {
        this.setState({ updated: this.state.updated + 1 })
      })
  }

  handleBackProfile(e){
    e.preventDefault();
    this.props.history.push("/profile")
  }

  handleBackCafe(e) {
    e.preventDefault();
    this.props.history.push(`/cafeteria/${this.props.thread.sellPost.cafeId.name}`)
  }

  renderMap() {
    const lat = this.props.thread.sellPost.cafeId.lat
    const lng = this.props.thread.sellPost.cafeId.lng
    const googleAPIKey = require('../../config/keys').googleAPIKey
    return (
      <a href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`} target="_blank">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=17&size=300x300&maptype=roadmap&markers=size:large%7Ccolor:blue%7C${lat},${lng}&key=${googleAPIKey}`} alt="map" />
      </a>
    )
  }

  render(){

    if (!this.props.thread || !this.props.thread.sellPost.cafeId) return null;

    const {thread, currentUser, } = this.props

    if (thread.buyer.username !== currentUser.username && thread.seller.username !== currentUser.username){
      this.props.history.push("/profile")
    }

    const otherUser = (thread.buyer.username === currentUser.username) ?  thread.seller : thread.buyer

    const sellerName = (thread.seller.username === currentUser.username) ? "Your" : `${thread.seller.username}'s`

    const buyerName = (thread.buyer.username === currentUser.username) ? "Your" : `${thread.buyer.username}'s`

    const commentList = thread.comments.map((comment,i)=>{
      // debugger
      return (
        <ThreadCommentListItem
          key={i}
          comment={comment}
          className={(comment.commentor === currentUser.id) ? "currentUser-comment" : "otherUser-comment"}
        />
    )})

    const currentSellerOffer = (!thread.sellerOffer) ? 
      thread.sellPost.askPrice : thread.sellerOffer;

    const currentBuyerOffer = (!thread.buyerOffer) ?
      0 : thread.buyerOffer;


    const confirmBuyBtn = (thread.buyer.username === currentUser.username && !thread.deal) ?
      (<button onClick={()=>this.props.buyConfirmShow()}>Confirm Purchase</button>) : null

    const confirmSellBtn = (thread.seller.username === currentUser.username && !thread.deal && thread.buyerOffer) ?
      (<button onClick={()=>this.props.sellConfirmShow()}>Confirm Sell</button>) : null


    // const buyOfferPrice = (thread.buyerOffer) ? 
    //   thread.buyerOffer : thread.sellPost.askPrice

    // const sellOfferPrice = (thread.sellerOffer) ?
    //   thread.sellerOffer : thread.sellPost.askPrice

    // debugger

    const buyOfferInput = (thread.buyer.username === currentUser.username && !thread.deal && thread.sellPost.open) ?
      // open sell offer input modal on click 
      (<div className="input-show-btn">
        <button onClick={() => this.props.buyInputShow()}>
          Make a new offer
        </button>
      </div>) : null

    const sellOfferInput = (thread.seller.username === currentUser.username && !thread.deal && thread.sellPost.open) ?
      // open sell offer input modal on click 
      (<div className="input-show-btn">
        <button onClick={() => this.props.sellInputShow()}>
          Make a new offer
        </button>
      </div>) : null
            
    const noLongerAvail = (!thread.sellPost.open && !thread.deal) ? 
      (<div className="no-longer-avail-promtp">This swipe is no longer available</div>) : null
    
    let dealSuccessMessage;

    let dealSuccessMap = (thread.deal) ? (<div className="thread-map-container">{this.renderMap()}</div>) : null;

    if (thread.deal && thread.buyer.username === currentUser.username) {
      dealSuccessMessage = (<div className="deal-success-prompt">
        <div>
          <p>Congrats!</p>
          <p>You purchased the swipe at ${Number(thread.deal).toFixed(2)} from {thread.seller.username}!</p>    
        </div>
      </div> )
    } else if (thread.deal && thread.seller.username === currentUser.username){
      dealSuccessMessage = (<div className="deal-success-prompt">
        <div>
          <p>Congrats!</p>
          <p>You sold the swipe at ${Number(thread.deal).toFixed(2)} to {thread.buyer.username}!</p>
          </div>
      </div>)
    } else {
      dealSuccessMessage = null
    }

    const capitalize = (string) => {
      return string[0].toUpperCase() + string.slice(1)
    }

    const parseTimeString = (timeStr) => {
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

    const parseTimeStringShort = (timeStr) => {
      const dateObj = new Date(timeStr)
      const dateString = dateObj.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
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

    // debugger

    return(
      
      
      <div className="thread-page-wrapper">
        
        <Modal/>

        <div className="thread-page-main">
          <div className="thread-page-swipe-details">
            <div className="thread-page-swipe-details-top">
              <h1>
                $ {Number(thread.sellPost.askPrice).toFixed(2)}
              </h1>
              <h2>
                {capitalize(thread.sellPost.mealType)}
              </h2>
              <h2>
                {(thread.sellPost.cafeId.name).toUpperCase()} @ {thread.sellPost.cafeId.location}
              </h2>
              <h2>
                Meet @ {parseTimeString(thread.sellPost.meetingTime)}
              </h2>
            </div>
            <h3>
              Post expires:  {thread.sellPost.expiration}
            </h3>
            <h3>
              Post created: {parseTimeStringShort(thread.sellPost.timeCreated)}
            </h3>
          </div>

          <div className="thread-page-avail-prompt">
            {noLongerAvail}
            {dealSuccessMessage}
          </div>

          {/* <div id="scroll-container">
            <div id="scroll-text">Click "Let's Go!" to confirm an exchange. Or put in a new offer.</div>
          </div> */}

          <div className="thread-page-current-seller-offer">
            <div className="seller-offer-wrapper">
              <div className="current-offer-title">
                <h1>
                  {sellerName} offer to sell this swipe
                </h1>
              </div>
              <div className="current-offer-details">
                <div className="current-offer-price">
                  $ {Number(currentSellerOffer).toFixed(2)}
                </div>
                <div className="deal-confirm-btn">
                  {confirmBuyBtn}
                </div>
                {/* open sell offer input modal on click*/}
                {sellOfferInput}
              </div>

            </div>
          </div>

          <div className="thread-page-current-buyer-offer">
            <div className="buyer-offer-wrapper">
              <div className="current-offer-title">
                <h1>
                  {buyerName} offer to buy this swipe
                </h1>
              </div>
              <div className="current-offer-details">
                <div className="current-offer-price">
                  $ {Number(currentBuyerOffer).toFixed(2)}
                </div>
                <div className="deal-confirm-btn">
                  {confirmSellBtn}
                </div>
                {buyOfferInput}
              </div>
            </div>
          </div>
        </div>


        <div className="thread-page-right">
          {dealSuccessMap}
          <div className="thread-page-comment-wrapper">
            <div className="other-user-name">
              <h1>
                Leave a message for <span>{otherUser.username}</span>
              </h1>
            </div>

            <div className="comment-box">
              {commentList}
            </div>

            <div className="comment-input-box">
              <form onSubmit={this.handleSubmit} className="comment-input-form">
                <input
                  type="text"
                  value={this.state.comment}
                  onChange={this.handleInput("comment")}
                  className="comment-text-input" />

                <input
                  type="submit"
                  value="Send"
                  className="comment-text-send"
                />
              </form>
            </div>
          </div>
          <div className="thread-page-nav">
            <button onClick={this.handleBackCafe}>
              <p>Back to</p>
              {(thread.sellPost.cafeId.name).toUpperCase()}
            </button>
            <button onClick={this.handleBackProfile}>
              <p>Back to</p>
              <p>Profile</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ThreadShow);




{/* <div className="thread-page-confirm-exchange">
  <div className="close-price-input-box">
    <form onSubmit={this.handleSubmitPrice}>
      <label>Close Price
        <input
          type="text"
          value={this.state.price}
          onChange={this.handleInput("price")} />
      </label>

      <input type="submit" value="Confirm" />
    </form>
  </div>
</div> */}