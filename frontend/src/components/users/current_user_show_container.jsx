import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
  user: state.users.all[state.session.user.id],
  userId: state.session.user.id,
  type: 'current'
})

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId))
})

export default connect(mSTP, mDTP)(UserShow);