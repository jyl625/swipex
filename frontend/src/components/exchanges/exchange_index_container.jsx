import { connect } from 'react-redux';
import ExchangeIndex from './exchange_index';
import { requestUserExchanges } from '../../actions/exchange_actions';

const mSTP = (state, ownProps) => ({
  exchanges: Object.values(state.exchanges.user)
});

const mDTP = dispatch => ({
  requestUserExchanges: userId => dispatch(requestUserExchanges(userId))
})

export default connect(mSTP, mDTP)(ExchangeIndex);