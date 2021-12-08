import { connect } from "react-redux";
import MainPage from './main_page';
import {requestCafeterias} from '../../actions/cafetera_actions'

const mSTP = state => ({
  cafeterias: state.cafeterias.all,
})

const mDTP = dispatch => ({
  requestCafeterias: () => dispatch(requestCafeterias())
})

export default connect(mSTP, mDTP)(MainPage);