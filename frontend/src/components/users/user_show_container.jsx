import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUser } from "../../actions/user_actions";
import { requestUserThreads } from "../../actions/thread_actions";

const mSTP = (state, ownProps) => {
  console.log(state.users.all[ownProps.match.params.userId]);
  return {
  user: state.users.all[ownProps.match.params.userId]
}}

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  // requestUserThreads: userId => dispatch(requestUserThreads(userId))
})

export default connect(mSTP, mDTP)(UserShow);

