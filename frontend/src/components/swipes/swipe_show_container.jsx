import { connect } from "react-redux";
import SwipeShow from './swipe_show';

import {requestSwipe} from '../../actions/swipe_actions'

const mSTP = (state, ownProps) => ({
  swipe: state.swipes.single,
  cafeterias: state.cafeterias.all,
  currentUser: state.session.user
});

const mDTP = (dispatch) => ({
  requestSwipe: (swipeId) => dispatch(requestSwipe(swipeId))
})

export default connect(mSTP, mDTP)(SwipeShow);

