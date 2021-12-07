import { fetchSwipes, fetchSwipe, createNewSwipe } from "../util/swipe_api_util";

export const RECEIVE_SWIPES = "RECEIVE_SWIPES";
export const RECEIVE_NEW_SWIPE = "RECEIVE_NEW_SWIPE";
export const RECEIVE_USER_SWIPES = "RECEIVE_USER_SWIPES"



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


export const requestSwipes = () => dispatch => (
  fetchSwipes()
  .then(swipes => dispatch(receiveSwipes(swipes)))
  .fail(err => console.log(err))
)

export const requestSwipe = swipeId => dispatch => (
  fetchSwipe(swipeId)
  .then(swipe => dispatch(receiveNewSwipe(swipe)))
  .fail(err => console.log(err))
)

export const createSwipe = swipeData => dispatch => (
  createNewSwipe(swipeData)
  .then(swipe => dispatch(receiveNewSwipe(swipe)))
  .fail(err => console.log(err))
)