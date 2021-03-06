import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SwipeShowContainer from '../swipes/swipe_show_container';
import ThreadSellInputContainer from "../threads/thread_sell_input_container";
import ThreadBuyInputContainer from '../threads/thread_buy_input_container';
import ThreadBuyConfirmContainer from '../threads/thread_buy_confirm_container';
import ThreadSellConfirmContainer from '../threads/thread_sell_confirm_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'swipeshow':
      component = <SwipeShowContainer />;
      break;
    case 'sellOfferInput':
      component = <ThreadSellInputContainer/>;
      break;
    case 'buyOfferInput':
      component = <ThreadBuyInputContainer/>;
      break;
    case 'buyOfferConfirm':
      component = <ThreadBuyConfirmContainer/>;
      break;
    case 'sellOfferConfirm':
      component = <ThreadSellConfirmContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);