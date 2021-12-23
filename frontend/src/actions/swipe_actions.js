import { fetchSwipes, fetchSwipe, fetchUserSwipes, createNewSwipe } from "../util/swipe_api_util";

export const RECEIVE_SWIPES = "RECEIVE_SWIPES";
export const RECEIVE_NEW_SWIPE = "RECEIVE_NEW_SWIPE";
export const RECEIVE_USER_SWIPES = "RECEIVE_USER_SWIPES"
export const RECEIVE_SWIPE = "RECEIVE_SWIPE";



export const receiveSwipes = swipes => ({
  type: RECEIVE_SWIPES,
  swipes
})

export const receiveNewSwipe = swipe => ({
  type: RECEIVE_NEW_SWIPE,
  swipe
}) 

export const receiveUserSwipes = swipes => ({
  type: RECEIVE_USER_SWIPES,
  swipes
})

export const receiveSwipe = swipe => ({
  type: RECEIVE_SWIPE,
  swipe
})

export const requestUserSwipes = userId => dispatch => (
  fetchUserSwipes(userId)
  .then(swipes => {
    dispatch(receiveUserSwipes(swipes))
  })
  .catch(err => console.log(err))
)

export const requestSwipes = () => dispatch => (
  fetchSwipes()
  .then(swipes => dispatch(receiveSwipes(swipes)))
  .catch(err => console.log(err))
)

export const requestSwipe = swipeId => dispatch => {
  return(
  fetchSwipe(swipeId)
  .then(swipe => dispatch(receiveSwipe(swipe)))
  .catch(err => console.log(err)))
}

export const createSwipe = swipeData => dispatch => (
  createNewSwipe(swipeData)
  .then(swipe => dispatch(receiveNewSwipe(swipe)))
  .catch(err => console.log(err))
)