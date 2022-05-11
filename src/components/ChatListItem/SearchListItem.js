import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SearchListItem = props => {
  const {chatRoom} = props;
  const navigation = useNavigation();
  // console.log('in search');
  // console.log(chatRoom);
  const id = useSelector(state => state.chatuser.id);

  // const {navigation} = props;

  const nav = () => {
    navigation.navigate('ChatRoomScreen', {chatid: chatRoom._id, userid: 0});
  };

  return (
    <TouchableWithoutFeedback onPress={nav}>
      <View style={styles.container}>
        {chatRoom.conType === 'group' ? (
          <View style={styles.leftContainer}>
            <Image source={{uri: chatRoom.avatar}} style={styles.avatar} />
            <View style={styles.midContainer}>
              <Text style={styles.username}>{chatRoom.title}</Text>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.leftContainer}>
              {id === chatRoom.users[0]._id ? (
                <>
                  <Image
                    source={{uri: chatRoom.users[1].avatar}}
                    style={styles.avatar}
                  />
                  <View style={styles.midContainer}>
                    <Text style={styles.username}>
                      {chatRoom.users[1].name}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <Image
                    source={{uri: chatRoom.users[0].avatar}}
                    style={styles.avatar}
                  />
                  <View style={styles.midContainer}>
                    <Text style={styles.username}>
                      {chatRoom.users[0].name}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchListItem;
