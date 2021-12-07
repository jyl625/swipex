import { fetchSwipes, fetchSwipe, createSwipe } from "../util/swipe_api_util";

export const RECEIVE_SWIPES = "RECEIVE_SWIPES";
export const RECEIVE_SWIPE = "RECEIVE_SWIPE";

export const receiveSwipes = swipes => ({
  type: RECEIVE_SWIPES,
  swipes
})

export const receiveSwipe = swipe => ({
  type: RECEIVE_SWIPE,
  swipe
}) 


export const requestSwipes = () => dispatch => (
  fetchSwipes()
    .then(swipes => dispatch(receiveSwipes(swipes)))
    .fail(err => console.log(err))
)

export const requestSwipe = swipeId => dispatch => (
  fetchSwipe(swipeId)
    .then(swipe => dispatch(receiveSwipe(swipe)))
    .fail(err => console.log(err))
)

export const createSwipe = swipeData => dispatch => (
  createSwipe(swipeData)
    .then(swipe => dispatch(receiveSwipe(swipe)))
    .fail(err => console.log(err))
)