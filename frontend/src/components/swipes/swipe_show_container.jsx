import { connect } from "react-redux";
import SwipeShow from './swipe_show';

const mSTP = (state, ownProps) => ({
  swipe: state.all[ownProps.match.params.swipeId]
});

export default connect(mSTP, null)(SwipeShow);

