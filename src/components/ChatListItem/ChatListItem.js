import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { chatCreate } from '../apis';

const ChatListItem = props => {
  const chatRoom = props;
  const navigation = useNavigation();
  const id = useSelector(state => state.chatuser.id);
  const currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var today = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000,
  );
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  const nav = () => {
    navigation.navigate('Chats', {chatid: chatRoom.chat._id})
  };

  return (
    <TouchableWithoutFeedback onPress={nav}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {id === chatRoom.chat.users[0]._id ? (
            <>
              <Image
                source={{uri: chatRoom.chat.users[1].avatar}}
                style={styles.avatar}
              />
              {chatRoom.chat.noOfUnread > 0 ? (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    padding: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 22,
                    left: 360,
                    size: 2,
                    backgroundColor: '#B983FF',
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {chatRoom.chat.noOfUnread}
                  </Text>
                </View>
              ) : null}
              <View style={styles.midContainer}>
                <Text style={styles.username}>
                  {chatRoom.chat.users[1].name}
                </Text>
              </View>
            </>
          ) : (
            <>
              <Image
                source={{uri: chatRoom.chat.users[0].avatar}}
                style={styles.avatar}
              />
              {chatRoom.chat.noOfUnread > 0 ? (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    padding: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 22,
                    left: 360,
                    size: 2,
                    backgroundColor: '#B983FF',
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      color: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {chatRoom.chat.noOfUnread}
                  </Text>
                </View>
              ) : null}
              <View style={styles.midContainer}>
                <Text style={styles.username}>
                  {chatRoom.chat.users[0].name}
                </Text>
              </View>
            </>
          )}
        </View>
        <Text style={styles.time}>
          {!moment(yesterday).isAfter(moment(chatRoom.chat.updatedAt))
            ? moment(chatRoom.chat.updatedAt).format('hh:mm')
            : moment(chatRoom.chat.updatedAt).format('DD/MM/YYYY')}{' '}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
