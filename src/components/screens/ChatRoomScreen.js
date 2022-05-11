import React from 'react';
import {Text} from 'react-native';

const ChatRoomScreen = props => {
  const {route, navigation} = props;
  const {chatid, userid} = route.params;
  return (
    <>
      <Text>chatRoomScreen: {chatid}</Text>
      <Text>userid: {userid}</Text>
    </>
  );
};

export default ChatRoomScreen;
