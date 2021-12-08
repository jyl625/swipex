import axios from 'axios';

export const fetchUserThreads = userId => (
  axios.get(`api/conversation/user/${userId}`)
)

export const createNewThread = threadData => (
  axios.post('api/conversation', threadData)
)