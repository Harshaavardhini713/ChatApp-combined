import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import ChatListItemGroup from '../ChatListItem/ChatListItemGroup';

// import chatRooms from '../../data/chatRoom';
import {getUserGroupChat} from '../apis';

const ChatScreenGroup = () => {
  const id = useSelector(state => state.chatuser.id);
  const [chats, setChats] = useState(null);
  const fetchData = () => {
    if (chats === null) {
      getUserGroupChat(id)
        .then(response => setChats(response))
        .catch(err => console.log('A -', err));
    }
  };

  useEffect(() => {
    fetchData();
  });
  // const getChats = async () => {
  //   console.log('in getchats');
  //   try {
  //     const params = JSON.stringify({
  //       id: '62749fbebc271b934153e3d6',
  //     });
  //     const response = await instance.post('api/v1/chat/getUserChat', params);
  //     if (response.status === 201 || response.status === 200) {
  //       console.log('response:');
  //       console.log(response.data);
  //       return res => response.data;
  //     } else {
  //       console.log(
  //         `Couldn't find any chats: ${JSON.stringify(response.data)}`,
  //       );
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('error.response.data');
  //       console.log(error.response.data);
  //     } else if (error.request) {
  //       console.log('error.request');
  //       console.log(error.request);
  //     } else {
  //       console.log('Error:', error.message);
  //     }
  //   }
  // };
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  return (
    <View style={styles.container}>
      {chats === null ? (
        <ActivityIndicator size="large" color="#B983FF" />
      ) : (
        <FlatList
          style={{width: '100%'}}
          data={chats}
          renderItem={({item}) => <ChatListItemGroup chat={item} />}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={3}
        />
      )}
    </View>
  );
};

export default ChatScreenGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
