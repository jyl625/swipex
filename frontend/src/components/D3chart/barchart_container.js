import { connect } from 'react-redux';
import { requestExchanges} from '../../actions/exchange_actions';
import BarchartData from './barchart_data'

const mapStateToProps = (state, ownProps) => ({
  exchanges: Object.values(state.exchanges.all),
  cafeSwipes: ownProps.cafeSwipes
  // cafeExchanges: (() => {
  //   const cafeSwipes = Object.values(ownProps.cafeSwipes);
  //   const cafeSwipesPostId = [];
  //   cafeSwipes.map(swipe => {
  //     cafeSwipesPostId.push(swipe.postId)
  //   })
  //   return Object.values(state.exchanges.all).filter(exchange => cafeSwipesPostId.includes(exchange.postId));
  // })()
});

const mapDispatchToProps = dispatch => ({
  requestExchanges: () => dispatch(requestExchanges())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarchartData);