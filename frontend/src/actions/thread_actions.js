import * as ThreadAPIUtil from "../util/thread_api_util";

export const RECEIVE_THREADS = "RECEIVE_THREADS";
export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_USER_THREADS = "RECEIVE_USER_THREADS";
export const REMOVE_THREAD = "REMOVE_THREAD";

export const receiveThreads = (threads) => ({
  type: RECEIVE_THREADS,
  threads
})

export const receiveThread = (thread) => ({
  type: RECEIVE_THREAD,
  thread
})

export const receiveUserThreads = (userThreads) => ({
  type: RECEIVE_USER_THREADS,
  userThreads
})

export const removeThread = (threadId) => ({
  type: REMOVE_THREAD,
  threadId
})


export const requestThreads = () => dispatch => (
  ThreadAPIUtil.fetchThreads()
    .then(threads => dispatch(receiveThreads(threads)))
)

export const requestThread = (threadId) => dispatch => (
  ThreadAPIUtil.fetchThread(threadId)
    .then(thread => dispatch(receiveThread(thread)))
)

export const requestUserThread = (userId) => dispatch => (
  ThreadAPIUtil.fetchUserThreads(userId)
    .then(threads => dispatch(receiveThreads(threads)))
)

export const createThread = (thread) => dispatch => (
  ThreadAPIUtil.createThread(thread)
    .then(thread => dispatch(receiveThread(thread)))
)

export const deleteThread = (threadId) => dispatch => (
  ThreadAPIUtil.deleteThread(threadId)
    .then(() => dispatch(removeThread(threadId)))
)


