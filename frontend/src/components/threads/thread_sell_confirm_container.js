import {connect} from "react-redux";
import ThreadSellConfirm from "./thread_buy_confirm";
import { closeModal } from '../../actions/modal_actions';
import { requestThread, updateThread } from "../../actions/thread_actions";
import { createNewExchange } from "../../actions/exchange_actions";


const mSTP = state => ({
  thread: state.threads.new
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  requestThread: (threadId) => dispatch(requestThread(threadId)),
  updateThread: (thread) => dispatch(updateThread(thread)),
  createNewExchange: (exchange) => dispatch(createNewExchange(exchange))
})

export default connect(mSTP, mDTP)(ThreadSellConfirm);