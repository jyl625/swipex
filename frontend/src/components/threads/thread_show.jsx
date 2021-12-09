import React from "react";

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
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleBuyerOffer = this.handleBuyerOffer.bind(this);
    this.handleSellerOffer = this.handleSellerOffer.bind(this);
    this.handleBuyConfirm = this.handleBuyConfirm.bind(this);
    this.handleSellConfirm = this.handleSellConfirm.bind(this);
  }

  componentDidMount(){
    // setInterval(
    // ()=>this.props.requestThread(this.props.match.params.threadId), 1000) 
    this.props.requestThread(this.props.match.params.threadId)
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
    const newExchange = {
      closePrice: this.props.thread.sellerOffer,
      sellPost: this.props.thread.sellpost._id,
      seller: this.props.thread.buyer._id,
      buyer: this.props.thread.seller._id
    }
    this.props.createNewExchange(newExchange)
      .then(res => {
        const conversation = Object.assign({}, this.props.thread)
        conversation["deal"] = this.props.thread.sellerOffer;
        this.props.updateThread(conversation)
      }).then(res => {
        this.setState({
          updated: this.state.updated + 1
        })
      })
  }

  handleSellConfirm(e) {
    e.preventDefault();
    const newExchange = {
      closePrice: this.props.thread.buyerOffer,
      sellPost: this.props.thread.sellpost._id,
      seller: this.props.thread.buyer._id,
      buyer: this.props.thread.seller._id
    }
    this.props.createNewExchange(newExchange)
      .then(res => {
        const conversation = Object.assign({}, this.props.thread)
        conversation["deal"] = this.props.thread.buyerOffer;
        this.props.updateThread(conversation)
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

  handleGoBack(e){
    e.preventDefault();
    this.props.history.push("/")
  }



  render(){
    if (!this.props.thread) return null;

    const {thread, currentUser} = this.props

    if (thread.buyer.username !== currentUser.username && thread.seller.username !== currentUser.username){
      this.props.history.push("/")
    }

    const otherUser = (thread.buyer.username === currentUser.username) ? thread.seller : thread.buyer

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
      thread.sellpost.askPrice : thread.sellerOffer;

    const currentBuyerOffer = (!thread.buyerOffer) ?
      0 : thread.buyerOffer;

    const confirmBuyBtn = (thread.buyer.username === currentUser.username && !thread.deal && thread.sellerOffer) ?
      (<button onClick={this.handleBuyConfirm}>Confirm Buy</button>) : null

    const confirmSellBtn = (thread.seller.username === currentUser.username && !thread.deal && thread.buyerOffer) ?
      (<button onClick={this.handleSellConfirm}>Confirm Sell</button>) : null


    const buyOfferPrice = (thread.buyerOffer) ? 
      thread.buyerOffer : thread.sellpost.askPrice

    const sellOfferPrice = (thread.sellerOffer) ?
      thread.sellerOffer : thread.sellpost.askPrice

    const buyOfferInput = (thread.buyer.username === currentUser.username && !thread.deal) ?
      (<div className="buyer-offer-input">
        <input
          type="number"
          defaultValue={parseFloat(buyOfferPrice)}
          step="0.01"
          onChange={this.handleInput("buyerOffer")}
        />
        <button onClick={this.handleBuyerOffer}>
          Make an offer
        </button>
      </div>) : null

    const sellOfferInput = (thread.seller.username === currentUser.username && !thread.deal) ?
      (<div className="seller-offer-input">
        <input
          type="number"
          defaultValue={parseFloat(sellOfferPrice)}
          step="0.01"
          onChange={this.handleInput("sellerOffer")}
        />
        <button onClick={this.handleSellerOffer}>
          Make an offer
        </button>
      </div>) : null

      
    const noLongerAvail = (!thread.sellpost.open && !thread.deal) ? 
      (<div>This swipe is no longer available</div>) : null
    
    const dealSuccessMessage = (thread.deal) ?
      (<div>Congrates, sold at $ {thread.deal}</div>) : null


    return(
      
      <div className="thread-page-wrapper">
        
        <div className="thread-page-left">
          <div className="thread-offer-input">
            {sellOfferInput}
          </div>
        </div>

        <div className="thread-page-main">
          <div className="thread-page-swipe-details">
            <div>
              Asking Price: {thread.sellpost.askPrice}
            </div>
            <div>
              Expiration: {thread.sellpost.expiration}
            </div>
            <div>
              Cafeteria: {thread.sellpost.mealType}
            </div>
            <div>
              {thread.sellpost.cafeId.name}
            </div>
            <div>
              {thread.sellpost.cafeId.location}
            </div>
          </div>

          <div className="thread-page-avail-prompt">
            {noLongerAvail}
            {dealSuccessMessage}
          </div>

          <div className="thread-page-current-offers">
            <div className="seller-offer-details">
              <div>
                Seller's Offer
              </div>
              <div className="current-offer-price">
                {currentSellerOffer}
              </div>
              <div className="deal-confirm-btn">
                {confirmBuyBtn}
              </div>
            </div>

            <div className="buyer-offer-details">
              <div>
                Buyer's Offer
              </div>
              <div className="current-offer-price">
                {currentBuyerOffer}
              </div>
              <div className="deal-confirm-btn">
                {confirmSellBtn}
              </div>

            </div>
          </div>

          

          <div className="thread-page-comment-wrapper">
            <div className="other-user-name">
              <h1>
                Chatting with {otherUser.username}
              </h1>
            </div>

            <div className="comment-box">
              {commentList}
            </div>

            <div className="comment-input-box">
              <form onSubmit={this.handleSubmit}>
                <label>Comment
                  <input type="text" value={this.state.comment} onChange={this.handleInput("comment")} />
                </label>

                <input type="submit" value="Send" />
              </form>
            </div>
          </div>

          <div className="thread-page-nav">
            <button onClick={this.handleGoBack}>
              Go back
            </button>
          </div>

        </div>


        <div className="thread-page-right">
          <div className="thread-offer-input">
            {buyOfferInput}
          </div>
        </div>

      </div>
    )
  }
}

export default ThreadShow;




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