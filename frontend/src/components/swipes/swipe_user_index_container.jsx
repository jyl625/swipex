import { connect } from 'react-redux';
import { requestUserSwipes } from '../../actions/swipe_actions';
import SwipeUserIndex from './swipe_user_index'

const mSTP = state => ({
  swipes: state.swipes.user
})

const mDTP = dispatch => ({
  requestUserSwipes: userId => dispatch(requestUserSwipes(userId))
})

export default connect(mSTP, mDTP)(SwipeUserIndex)