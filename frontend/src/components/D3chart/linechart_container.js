import { connect } from 'react-redux';
import { requestExchanges } from '../../actions/exchange_actions';
import LinechartData from './linechart_data';

const mapStateToProps = state => ({
  exchanges: Object.values(state.exchanges.all)
});

const mapDispatchToProps = dispatch => ({
  requestExchanges: () => dispatch(requestExchanges())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinechartData);