import { connect } from "react-redux";
import { requestThread, requestUserThread } from "../../actions/thread_actions";
import ThreadShow from "./thread_show";


const mSTP = (state, ownProps) => ({
  thread: state.threads[ownProps.match.params.threadId],
  currentUser: state.session.user,
})

const mDTP = (dispatch) => ({
  requestThread: (threadId) => dispatch(requestThread(threadId)),
})

export default connect(mSTP, mDTP)(ThreadShow);