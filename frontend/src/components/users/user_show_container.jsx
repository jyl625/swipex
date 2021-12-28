import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUser } from '../../actions/user_actions';
import { requestUserThreads } from '../../actions/thread_actions';
import { requestUserSwipes } from '../../actions/swipe_actions';
import { requestUserExchanges } from '../../actions/exchange_actions'


const mSTP = (state, ownProps) => ({
  user: state.users.all[ownProps.match.params.userId],
  userId: ownProps.match.params.userId,
  type: 'other'
})
  

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  requestUserThreads: userId => dispatch(requestUserThreads(userId)),
  requestUserSwipes: userId => dispatch(requestUserSwipes(userId)),
  requestUserExchanges: userId => dispatch(requestUserExchanges(userId))
})

export default connect(mSTP, mDTP)(UserShow);

