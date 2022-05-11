import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from './screens/ChatListScreen';
import ChatScreenGroup from './screens/ChatScreenGroup';
import {getUserGroupChat, getUserPersonalChat} from './apis';
import { useSelector } from 'react-redux';
// import {useSelector} from 'react-redux';
// import {counterValue} from '../redux/reducer/counterReducer';

// function ChatScreen1() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>ChatScreen</Text>
//       <ChatScreen/>
//     </View>
//   );
// }

function StatusScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Status!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function UpperMenu() {


  const id = useSelector(state => state.chatuser.id);

  let value1 = 0;
  const [chats, setChats] = useState(null);
  const fetchData = () => {
    if (chats === null) {
      getUserPersonalChat(id)
        .then(response => setChats(response))
        .catch(err => console.log('A -', err));
    }
  };
  let value2 = 0;
  const [gchats, setGchats] = useState(null);
  const fetchData1 = () => {
    if (chats === null) {
      getUserGroupChat(id)
        .then(response => setGchats(response))
        .catch(err => console.log('A -', err));
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  });

  for (const i in chats) {
    if (chats[i].noOfUnread > 0) {
      value1++;
    }
  }

  for (const i in gchats) {
    if (gchats[i].noOfUnread > 0) {
      value2++;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarShowIcon: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: '#B983FF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ChatScreen}
        options={{
          tabBarBadge: () => {
            return (
              <View>
                {value1 > 0 ? (
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      padding: 1,
                      borderWidth: 2,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      top: 16,
                      right: 23,
                      size: 2,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#B983FF',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {value1}
                    </Text>
                  </View>
                ) : null}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Group"
        component={ChatScreenGroup}
        options={{
          title: 'Groups',
          tabBarBadge: () => {
            return (
              <View>
                {value2 > 0 ? (
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      padding: 1,
                      borderWidth: 2,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      top: 16,
                      right: 23,
                      size: 2,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#B983FF',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {value2}
                    </Text>
                  </View>
                ) : null}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
