import { connect } from "react-redux";
import SwipeIndex from './swipe_index';
import { requestSwipes } from "../../actions/swipe_actions";

const mSTP = state => ({
  // cafeterias: state.cafeterias.all,
  swipes: state.swipes.all
})

const mDTP = dispatch => ({
  requestSwipes: () => dispatch(requestSwipes())
  // requestSwipes: () => console.log("fetching swipes")
})

export default connect(mSTP, mDTP)(SwipeIndex);