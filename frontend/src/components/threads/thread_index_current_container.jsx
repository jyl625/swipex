import { connect } from 'react-redux';
import { requestUserThreads } from '../../actions/thread_actions';
import ThreadIndex from './thread_index';


const mSTP = state => {
  return {
  threads: Object.values(state.threads),
  type: "Current"
}};

const mDTP = dispatch => ({
  requestUserThreads: userId => dispatch(requestUserThreads(userId)) 
});

export default connect(mSTP, mDTP)(ThreadIndex);