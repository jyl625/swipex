import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUser } from '../../actions/user_actions'


const mSTP = (state, ownProps) => ({
  user: state.users.all[ownProps.match.params.userId],
  userId: ownProps.match.params.userId,
  type: 'other'
})
  

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId))
})

export default connect(mSTP, mDTP)(UserShow);

