import { connect } from 'react-redux';
import { requestUserThreads } from '../../actions/thread_actions';
import { requestUserSwipes } from '../../actions/swipe_actions';
import ThreadIndex from './thread_index';

const mSTP = state => ({
  threads: Object.values(state.threads.user),
  swipes: state.swipes.user,
  threadType: "Past",
  currentUser: state.session.user
})

const mDTP = dispatch => ({
  requestUserThreads: userId => dispatch(requestUserThreads(userId)),
  requestUserSwipes: userId => dispatch(requestUserSwipes(userId))
})

export default connect(mSTP, mDTP)(ThreadIndex);