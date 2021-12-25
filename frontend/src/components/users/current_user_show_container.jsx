import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { requestUserThreads } from '../../actions/thread_actions';
import { requestUserSwipes } from '../../actions/swipe_actions';
import { requestUserExchanges } from '../../actions/exchange_actions'

const mSTP = (state, ownProps) => ({
  user: state.users.all[state.session.user.id],
  userId: state.session.user.id,
  threadType: 'current'
})

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  requestUserThreads: userId => dispatch(requestUserThreads(userId)),
  requestUserSwipes: userId => dispatch(requestUserSwipes(userId)),
  requestUserExchanges: userId => dispatch(requestUserExchanges(userId))

})

export default connect(mSTP, mDTP)(UserShow);