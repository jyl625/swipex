import { connect } from "react-redux";
import { requestThread, updateThread } from "../../actions/thread_actions";
import ThreadShow from "./thread_show";
import { createComment } from "../../actions/comment_actions";
import { createNewExchange } from "../../actions/exchange_actions";
import { openModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => ({
  thread: state.threads[ownProps.match.params.threadId],
  currentUser: state.session.user,
})

const mDTP = (dispatch) => ({
  requestThread: (threadId) => dispatch(requestThread(threadId)),
  updateThread: (thread) => dispatch(updateThread(thread)),
  createComment: (comment) => dispatch(createComment(comment)),
  createNewExchange: (exchange) => dispatch(createNewExchange(exchange)),
  sellInputShow: () => dispatch(openModal("sellOfferInput"))
})

export default connect(mSTP, mDTP)(ThreadShow);