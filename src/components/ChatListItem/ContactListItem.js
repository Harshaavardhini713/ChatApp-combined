import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
//import {ChatRoom} from '../../../Types';
// import styles from './style';
//import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {incremented} from '../../redux/reducer/counterReducer';

const ContactListItem = props => {
  const chatRoom = props;
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  // const user = chatRoom.contact;
  console.log(chatRoom);

  // const {navigation} = props;

  const nav = () => {
    navigation.navigate('Chats', {
      chatid: 0,
      userid: chatRoom.contact._id,
    });
  };

  // const styles = StyleSheet.create({
  //   avatar: {
  //     width: 50,
  //     height: 50,
  //     borderRadius: 50,
  //     marginRight: 15,
  //   },

  //   container: {
  //     flexDirection: 'row',
  //     width: '100%',
  //     justifyContent: 'space-between',
  //     padding: 10,
  //   },
  //   midContainer: {
  //     justifyContent: 'space-around',
  //   },
  //   leftContainer: {
  //     flexDirection: 'row',
  //   },
  //   username: {
  //     fontWeight: 'bold',
  //     fontSize: 16,
  //     color: 'white',
  //   },
  //   lastMessage: {
  //     fontSize: 15,
  //     color: 'grey',
  //   },
  //   time: {
  //     fontSize: 13,
  //     color: 'grey',
  //   },
  // });

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

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// const Contact = ({contact}) => {
//   return (
//     <View style={styles.contactCon}>
//       <View style={styles.imgCon}>
//         <View style={styles.placeholder}>
//           <Text style={styles.txt}>{contact?.givenName[0]}</Text>
//         </View>
//       </View>
//       <View style={styles.contactDat}>
//         <Text style={styles.name}>
//           {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
//           {contact?.familyName}
//         </Text>
//         <Text style={styles.phoneNumber}>
//           {contact?.phoneNumbers[0]?.number}
//         </Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   contactCon: {
//     flex: 1,
//     flexDirection: 'row',
//     padding: 5,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#d9d9d9',
//   },
//   imgCon: {},
//   placeholder: {
//     width: 55,
//     height: 55,
//     borderRadius: 30,
//     overflow: 'hidden',
//     backgroundColor: '#d9d9d9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   contactDat: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingLeft: 5,
//   },
//   txt: {
//     fontSize: 18,
//   },
//   name: {
//     fontSize: 16,
//   },
//   phoneNumber: {
//     color: '#888',
//   },
// });
// export default Contact;
