import { connect } from "react-redux";
import swipeIndex from './swipe_index';
import { requestSwipes } from "../../actions/swipe_actions";

const mSTP = state => ({
  swipes: Object.values(state.swipes.all)
})

const mDTP = dispatch => ({
  requestSwipes: () => dispatch(requestSwipes())
})

export default connect(mSTP, mDTP)(swipeIndex);