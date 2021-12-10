import { connect } from "react-redux";
import SwipeShow from './swipe_show';

import {requestSwipe} from '../../actions/swipe_actions';
import {createThread, requestSellPostBuyerSellerThreads} from '../../actions/thread_actions';
import {closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  swipe: state.swipes.single,
  cafeterias: state.cafeterias.all,
  currentUser: state.session.user,
  threads: state.threads
});

const mDTP = (dispatch) => ({
  requestSwipe: (swipeId) => dispatch(requestSwipe(swipeId)),
  createThread: (thread) => dispatch(createThread(thread)),
  requestSellPostBuyerSellerThreads: (sellPostId, buyerId, sellerId) => 
    dispatch(requestSellPostBuyerSellerThreads(sellPostId, buyerId, sellerId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SwipeShow);

