import axios from 'axios';

export const fetchUserThreads = userId => (
  axios.get(`api/conversations/user/${userId}`)
)

export const createNewThread = threadData => (
  axios.post('api/conversations', threadData)
)