import { connect } from 'react-redux';
import { requestSwipe } from '../../actions/swipe_actions';
import SwipesEditFormThread from './swipes_edit_form_thread';


const mapStateToProps = (state) => {
  return {
    // currentUser: state.session.user,
    swipe: state.swipes.single
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSwipe: swipeId => dispatch(requestSwipe(swipeId))
    // createSwipe: data => console.log(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwipesEditFormThread);