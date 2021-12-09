import { fetchUserThreads, createNewThread } from '../util/thread_api_util';

export const RECEIVE_USER_THREADS = "RECEIVE_USER_THREADS";
export const RECEIVE_NEW_THREAD = "RECEIVE_NEW_THREAD";

export const receiveUserThreads = threads => ({
  type: RECEIVE_USER_THREADS,
  threads
})

export const receiveNewThread = thread => ({
  type: RECEIVE_NEW_THREAD,
  thread
})

export const requestUserThreads = userId => dispatch => (
  fetchUserThreads(userId)
  .then(threads => dispatch(receiveUserThreads(threads)))
  .catch(err => console.log(err))
)

export const requestNewThread = threadData => dispatch => (
  createNewThread(threadData)
  .then(thread => dispatch(receiveNewThread(thread)))
  .catch(err => console.log(err))
)