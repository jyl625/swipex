import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {requestCafeterias} from '../../actions/cafetera_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  allCafeterias: state.cafeterias.all,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestCafeterias: () => dispatch(requestCafeterias())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);