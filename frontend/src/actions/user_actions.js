import { fetchUser } from '../util/user_api_util';

export const RECEIVE_NEW_USER = "RECEIVE_NEW_USER";

export const receiveNewUser = user => ({
  type: RECEIVE_NEW_USER,
  user
})

export const requestUser = userId => dispatch => (
  fetchUser(userId)
  .then(user => dispatch(receiveNewUser(user)))
  .catch(err => console.log(err))
)