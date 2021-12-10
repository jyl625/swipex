import { connect } from "react-redux";
import SwipeIndex from './swipe_index';
import { requestSwipes, requestSwipe } from "../../actions/swipe_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({
  // cafeterias: state.cafeterias.all,
  swipes: state.swipes.all
})

const mDTP = dispatch => ({
  requestSwipes: () => dispatch(requestSwipes()),
  swipeShow: () => dispatch(openModal('swipeshow')),
  requestSwipe: (swipeId) => dispatch(requestSwipe(swipeId))
  
  // requestSwipes: () => console.log("fetching swipes")
})

export default connect(mSTP, mDTP)(SwipeIndex);