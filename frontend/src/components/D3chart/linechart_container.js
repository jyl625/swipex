import { connect } from 'react-redux';
import { requestExchanges } from '../../actions/exchange_actions';
import LinechartData from './linechart_data';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  exchanges: Object.values(state.exchanges.all),
  cafeSwipes: ownProps.cafeSwipes,
  cafeName: ownProps.match.params.cafeteriaName
});

const mapDispatchToProps = dispatch => ({
  requestExchanges: () => dispatch(requestExchanges())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LinechartData));