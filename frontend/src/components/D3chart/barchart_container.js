import { connect } from 'react-redux';
// import { requestCafeterias } from '../../actions/cafetera_actions';
import BarChart from './barchart';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
  requestCafeterias: () => dispatch(requestCafeterias())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChart);