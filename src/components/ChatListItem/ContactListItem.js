import React,{useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { chatCreate } from '../apis';

import { useSelector,useDispatch } from 'react-redux';

const ContactListItem = props => {
  const chatRoom = props;
  const navigation = useNavigation();

  const id = useSelector(state => state.chatuser.id);
  const currentId = useSelector(state => state.chatuser.id);
  const userid = chatRoom.contact._id

  const chat ={
    message: null,
    users: `${userid},${currentId}`,
    type:"sender",
    conType: "individual",
    title: chatRoom.contact.name,
    avatar: chatRoom.contact.avatar
  }
 


  const fetchData = async() => {
    chatCreate(chat)
    .then(response=>navigation.navigate('Chats', {chatid: response._id}))
    .catch(err=>console.log("ABc - ", err))
  };


  const nav = () => {
      console.log('in nav');
      fetchData();
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'black',
      }}>
      <TouchableWithoutFeedback onPress={nav}>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: chatRoom.contact.avatar}}
              resizeMode={'contain'}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 15,
              }}
            />
            <View
              style={{
                justifyContent: 'space-around',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                {chatRoom.contact.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ContactListItem;
