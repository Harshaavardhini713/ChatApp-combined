import instance from '../config/axiosConfig';
//import {useSelector} from 'react-redux';

const getChats = () => {
  return instance
    .get('/api/v1/chat/getAllChats')
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

// const getChatById = (id, id2) => {
//     const data = { id, id2 }
//     return instance.get("/api/v1/chat/getChatById", JSON.stringify(data))
//         .then(response => response.data)
//         .catch(err => console.log("Errors -", err));
// }

const deleteChat = id => {
  return instance
    .delete(`/api/v1/chat/deleteChat/${id}`)
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

const deleteMessage = id => {
  return instance
    .delete(`/api/v1/chat/deleteMessage/${id}`)
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

const addMessage = (message, value, msgType, parent) => {
  const data = {
    ...message,
    value,
    msgType,
    parent,
  };
  return fetch('http://10.0.2.2:12345/api/v1/chat/addMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(err => console.log('Errors -', err));
};

const getChatById = (id, id2) => {
  const data = {id, id2};
  return fetch('http://10.0.2.2:12345/api/v1/chat/getChatById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(err => console.log('Errors -', err));
};

const getChatByChatID = id => {
  return fetch(`http://10.0.2.2:12345/api/v1/chat/getChatByChatID/${id}`)
    .then(response => response.json())
    .catch(err => console.log('Errors -', err));
};

const getContact = () => {
  return instance
    .get('/contactPage')
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

const getUserPersonalChat = id => {
  //const id = useSelector(state => state.chatuser.id);
  //const id = '62749fbebc271b934153e3d6';
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  return instance
    .post(`/api/v1/chat/getUserPersonalChat/${id}`)
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

const getUserGroupChat = id => {
  //const id = useSelector(state => state.chatuser.id);
  // const id = '62749fbebc271b934153e3d6';
  return instance
    .post(`/api/v1/chat/getUserGroupChat/${id}`)
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

const searchChat = id => {
  //const id = useSelector(state => state.chatuser.id);
  // const id = '62749fbebc271b934153e3d6';
  return instance
    .post(`/api/v1/chat/searchChat/${id}`)
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

export {
  getChats,
  deleteChat,
  deleteMessage,
  addMessage,
  getChatById,
  getChatByChatID,
  getContact,
  getUserPersonalChat,
  getUserGroupChat,
  searchChat,
};
