import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/FloatingStyle';
import {useNavigation} from '@react-navigation/native';
// import updateProfi from '../api/axios';

const NewMessageButton = () => {
  //   axios.post('/api/messages',{
  //    whatever you want to post in json
  // }).then.....

  //  const contactPage = async () => {
  //     console.log("in signin")
  //     try{

  //           const response = await instance.get('/contactPage');
  //           console.log("sdasf")
  //           if(response.status === 201 || response.status === 200)
  //           {
  //             console.log(`User Signed In: ${JSON.stringify(response.data)}`);
  //           }
  //           else
  //           {
  //             console.log(`User couldn't be signed in: ${JSON.stringify(response.data)}`);

  //           }
  //     }
  //     catch(error){
  //         console.error(error.response.data.message)

  //     }
  //   }

  const navigation = useNavigation();

  const nav = () => {
    navigation.navigate('ContactScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={nav}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;

// const NewMessageButton = () => {
//   const navigation = useNavigation();

//   const nav = () => {
//     navigation.navigate('ContactScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={nav}>
//         <MaterialCommunityIcons
//           name="message-reply-text"
//           size={28}
//           color="white"
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default NewMessageButton;
