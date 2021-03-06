import React from 'react'
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { requestUserDealThreads } from '../../actions/thread_actions';
import { requestUserExchanges } from '../../actions/exchange_actions';
import { Link } from 'react-router-dom';

class ExchangeIndexItem extends React.Component {


  componentDidMount() {
    // this.props.requestUserExchanges(this.props.user.id)
    // this.props.requestUser(this.props.exchange.buyer)
    // this.props.requestUser(this.props.exchange.seller)
    // this.props.requestUserDealThreads(this.props.user.id);
  }

  parseTimeStringShort = (timeStr) => {
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


  render() {
    // const buyer = this.props.allUser.filter(user => user.id === this.props.exchange.buyer)[0];
    // const seller = this.props.allUser.filter(user => user.id === this.props.exchange.seller)[0];
    // const thread = this.props.threads.filter(thread => thread.sellPost === this.props.exchange.sellPost)[0];
    // if (!buyer || !seller || !thread)
    //   return "";
    let username;
    let message;

    if (this.props.exchange.buyer._id !== this.props.user.id) {
      username = (<div><span className="usershow-index-item-grey">Buyer:</span> {this.props.exchange.buyer.username}</div>)
    }
    else {
      username = (<div><span className="usershow-index-item-grey">Seller:</span> {this.props.exchange.seller.username}</div>)
    }
    if (this.props.user.id === this.props.currentUser.id) {
      message = (
        <Link to={`/threads/${this.props.exchange.conversationId}`}>
        <div className="messages">
          {username}
          <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(this.props.exchange.closePrice).toFixed(2)}</div>
          <div><span className="usershow-index-item-grey">Last updated at:</span> {this.parseTimeStringShort(this.props.exchange.updatedAt)}</div>
        </div>
      </Link>
      )
    }
    else {
      message = (
        <div className="messages">
          {username}
          <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(this.props.exchange.closePrice).toFixed(2)}</div>
          <div><span className="usershow-index-item-grey">Last updated at:</span> {this.parseTimeStringShort(this.props.exchange.updatedAt)}</div>
        </div>
      )
    }
    return (
      <>
        {message}
      </>
    )
  }
}

const mSTP = (state, ownProps) => ({
  allUser: Object.values(state.users.all),
  threads: Object.values(state.threads.userDeal),
  currentUser: state.session.user
})

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  requestUserDealThreads: userId => dispatch(requestUserDealThreads(userId)),
  requestUserExchanges: userId => dispatch(requestUserExchanges(userId)),
})

 export default connect(mSTP, mDTP)(ExchangeIndexItem);


