import { connect } from 'react-redux';
// import { createSwipes } from '../../actions/swipe_actions';
import SwipesForm from './swipes_form';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    // newSwipes: state.swipes.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createSwipes: data => dispatch(createSwipes(data))
    createSwipes: data => console.log(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwipesForm);