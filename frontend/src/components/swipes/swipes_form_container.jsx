import { connect } from 'react-redux';
import { createSwipe } from '../../actions/swipe_actions';
import SwipesForm from './swipes_form';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    allCafeterias: state.cafeterias.all,
    // newSwipes: state.swipes.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSwipe: data => dispatch(createSwipe(data)),
    // createSwipe: data => console.log(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwipesForm);