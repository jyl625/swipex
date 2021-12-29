import React from 'react'
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { requestUserThreads } from '../../actions/thread_actions';
import { Link } from 'react-router-dom';

class ExchangeIndexItem extends React.Component {


  componentDidMount() {
    this.props.requestUser(this.props.exchange.buyer)
    .then(userId => this.props.requestUserThreads(userId))
    this.props.requestUser(this.props.exchange.seller)
    .then(userId => this.props.requestUserThreads(userId))
  }


  render() {
    const buyer = this.props.allUser.filter(user => user.id === this.props.exchange.buyer)[0];
    const seller = this.props.allUser.filter(user => user.id === this.props.exchange.seller)[0];
    const thread = this.props.threads.filter(thread => thread.sellPost === this.props.exchange.sellPost)[0];
    if (!buyer || !seller || !thread)
      return "";
    let username;
    let message;
    if (this.props.exchange.buyer !== this.props.user.id) {
      username = (<div><span className="usershow-index-item-grey">Buyer:</span> {buyer.username}</div>)
    }
    else {
      username = (<div><span className="usershow-index-item-grey">Seller:</span> {seller.username}</div>)
    }
    if (this.props.user.id === this.props.currentUser.id) {
      message = (
        <Link to={`/threads/${thread._id}`}>
        <div className="messages">
          {username}
          <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(this.props.exchange.closePrice).toFixed(2)}</div>
          <div><span className="usershow-index-item-grey">Last updated at:</span> {this.props.exchange.updatedAt}</div>
        </div>
      </Link>
      )
    }
    else {
      message = (
        <div className="messages">
          {username}
          <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(this.props.exchange.closePrice).toFixed(2)}</div>
          <div><span className="usershow-index-item-grey">Last updated at:</span> {this.props.exchange.updatedAt}</div>
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
  threads: state.threads.user,
  currentUser: state.session.user
})

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  requestUserThreads: userId => dispatch(requestUserThreads(userId))
})

 export default connect(mSTP, mDTP)(ExchangeIndexItem);


