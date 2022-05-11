import {format} from 'timeago.js';

export const list = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    users: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/ ' + ' ' + '1.jpg',
        phone: '+1 (908) 545-5454',
      },
      {
        id: 2,
        name: 'Jane Doe',
        avatar: 'https://randomuser.me/api/portraits/ ' + ' ' + '2.jpg',
        phone: '+1 (908) 545-5454',
      },
    ],
    chats: [
      {
        id: 11,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ',
        time: format(new Date(), 'en_US'),
        type: 'sender',
        conType: 'individual',
      },
      {
        id: 12,
        message: 'Welcome to the chat',
        time: format(new Date(), 'en_US'),
        type: 'receiver',
        conType: 'individual',
      },
      {
        id: 13,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ',
        time: format(new Date(), 'en_US'),
        type: 'sender',
        conType: 'individual',
      },
      {
        id: 14,
        message: 'Welcome to the chat',
        time: format(new Date(), 'en_US'),
        type: 'receiver',
        conType: 'individual',
      },
    ],
    type: 'individual',
  },
];

export const GroupChatList = [
  {
    msg: 'hi',
    type: 'recevier',
    name: 'Iron Man',
    time: '12:00',
    conType: 'Group',
  },
  {
    msg: 'hi',
    type: 'recevier',
    name: 'Captain America',
    time: '12:01',
    conType: 'Group',
  },
  {
    msg: 'hi',
    type: 'recevier',
    name: 'Hulk',
    time: '12:02',
    conType: 'Group',
  },
  {
    msg: 'hi',
    type: 'sender',
    name: 'You',
    time: '12:02',
    conType: 'Group',
  },
];
