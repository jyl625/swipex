import {connect} from "react-redux";
import ThreadSellInput from "./thread_sell_input";
import { closeModal } from '../../actions/modal_actions';
import { requestThread, updateThread } from "../../actions/thread_actions";

const mSTP = state => ({
  thread: state.threads.new
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  requestThread: (threadId) => dispatch(requestThread(threadId)),
  updateThread: (thread) => dispatch(updateThread(thread)),
})

export default connect(mSTP, mDTP)(ThreadSellInput);