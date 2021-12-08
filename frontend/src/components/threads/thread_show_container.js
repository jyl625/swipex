import { connect } from "react-redux";
import { requestThread, requestUserThread } from "../../actions/thread_actions";
import ThreadShow from "./thread_show";
import { createComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
  thread: state.threads[ownProps.match.params.threadId],
  currentUser: state.session.user,
})

const mDTP = (dispatch) => ({
  requestThread: (threadId) => dispatch(requestThread(threadId)),
  createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(ThreadShow);