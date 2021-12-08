import { connect } from 'react-redux';
import ThreadIndex from './thread_index';


const mSTP = (state, ownProps) => ({
  threads: Object.values(state.threads[ownProps.match.params.userId])
});

const mDTP = dispatch => ({
  requestThreads: userId => dispatch(requestThreads(userId)) 
});

export default connect(mSTP, mDTP)(ThreadIndex);