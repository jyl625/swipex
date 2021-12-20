import {connect} from "react-redux";
import ThreadSellInput from "./thread_sell_input";
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({

})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(ThreadSellInput);