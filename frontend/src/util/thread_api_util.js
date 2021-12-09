import axios from "axios";

export const fetchThreads = () => {
  return axios.get('api/conversations');
}

export const fetchThread = threadId => {
  return axios.get(`api/conversations/${threadId}`);
}

export const fetchUserThreads = userId => {
  return axios.get(`api/conversations/users/${userId}`);
}

export const createThread = threadData => {
  return axios.post('api/conversations/', threadData);
}

export const patchThread = threadData => {
  return axios.patch(`api/conversations/${threadData._id}`, threadData)
}

export const deleteThread = threadId => {
  return axios.delete(`api/conversations/${threadId}`);
}


// export const fetchUserThreads = userId => (
//   axios.get(`api/conversations/user/${userId}`)
// )

// export const createNewThread = threadData => (
//   axios.post('api/conversations', threadData)
// )
