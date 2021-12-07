import { connect } from 'react-redux';
import ThreadIndex from './thread_index';

const mSTP = (state, ownProps) => ({
  thread: state
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ThreadIndex);