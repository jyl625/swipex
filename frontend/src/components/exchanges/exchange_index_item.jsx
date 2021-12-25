import React from 'react'
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';

class ExchangeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.exchange.buyer);
  }


  render() {
    const singleUser = this.props.user.filter(user => user.id === this.props.exchange.buyer);
    if (!singleUser || singleUser.length === 0)
      return "loading";
    return (
      <Link to={`/user/${singleUser[0].id}`}>
        <div className="messages">
          {/* <div><span className="usershow-index-item-grey">SellPost:</span> {exchange.sellPost}</div> */}
          <div><span className="usershow-index-item-grey">Buyer:</span> {singleUser[0].username}</div>
          <div><span className="usershow-index-item-grey">Closed at:</span> ${Number(this.props.exchange.closePrice).toFixed(2)}</div>
          <div><span className="usershow-index-item-grey">Last updated at:</span> {this.props.exchange.updatedAt}</div>
        </div>
      </Link>
    )
  }
}

const mSTP = state => ({
  user: Object.values(state.users.all)
})

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId))
})

 export default connect(mSTP, mDTP)(ExchangeIndexItem);


