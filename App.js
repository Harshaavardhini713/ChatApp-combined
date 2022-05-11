//     Harshaavardhini App.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {useSelector} from 'react-redux';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {View} from 'react-native';

import SignUp from './src/components/screens/SignUp';
import SignIn from './src/components/screens/SignIn';
import Home from './src/components/screens/Home';
import Splash from './src/components/screens/Splash';
import HomePage from './src/components/screens/HomePage';
import ChatRoomScreen from './src/components/screens/ChatRoomScreen';
import ContactScreen from './src/components/screens/ContactScreen';
import Search from './src/components/screens/Search';
// import Home2 from './src/components/screens/Home2';
import Profile from './src/components/screens/Profile';

import Chats from './src/components/screens/Chats';
import StarredMessages from './src/components/StarredMessages';

// import GroupChat from './src/components/screens/GroupChat';
import About from './src/components/screens/About';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createNativeStackNavigator();
// const MainTab = createMaterialTopTabNavigator();

const StartUpStackNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

// const MainTabNavigator = props => {
//   return (
//     <MainTab.Navigator
//       initialRouteName="Personal Chats"
//       screenOptions={{
//         tabBarActiveTintColor: '#fff',
//         tabBarShowIcon: true,
//         tabBarLabelStyle: {
//           fontWeight: 'bold',
//         },
//         tabBarIndicatorStyle: {
//           backgroundColor: '#fff',
//           height: 4,
//         },
//         tabBarStyle: {
//           backgroundColor: '#B983FF',
//         },
//       }}>
//       <MainTab.Screen name="Personal Chats" component={TabOneNavigator} />
//       <MainTab.Screen name="Group Chats" component={TabTwoNavigator} />
//       {/* <MainTab.Screen name="Profile" component={Profile}/> */}
//     </MainTab.Navigator>
//   );
// };

// const TabOneStack = createNativeStackNavigator();

// function TabOneNavigator() {
//   return (
//     <TabOneStack.Navigator screenOptions={{headerShown: false}}>
//       <TabOneStack.Screen name="TabOneScreen" component={Home} />
//     </TabOneStack.Navigator>
//   );
// }

// const TabTwoStack = createNativeStackNavigator();

// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator screenOptions={{headerShown: false}}>
//       <TabTwoStack.Screen name="TabTwoScreen" component={Home2} />
//     </TabTwoStack.Navigator>
//   );
// }

const ChatStackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#B983FF',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name='Chats' component={Chats}   initialParams={{ ...props }} options={{ headerShown: false }}  />
     <Stack.Screen name='Starred Messages' component={StarredMessages} initialParams={{ ...props }}  options={{ headerShown: false }}  />
     <Stack.Screen name="About" component={About} options={{title: 'Homies',}} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const user = useSelector(state => state.chatuser.isLogin);
  // console.log(user);

  return (
    <NavigationContainer>
      {!user ? <StartUpStackNavigator /> : <ChatStackNavigator />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
       <IconRegistry icons={EvaIconsPack}/>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator/>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// Sammed App.js
//  import React from 'react';
//  import Chats from './src/components/screens/Chats';
//  import StarredMessages from './src/components/StarredMessages';

//  import * as eva from '@eva-design/eva';
//  import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
//  import { EvaIconsPack } from '@ui-kitten/eva-icons';

//  import { Provider } from 'react-redux';
//  import { PersistGate } from 'redux-persist/integration/react'
//  import { persistor, store } from './src/redux/store';

//  //Native Navigation
//  import { NavigationContainer } from '@react-navigation/native';
//  // Stack Navigation
//  import { createNativeStackNavigator } from '@react-navigation/native-stack';
//  import GroupProfile from './src/components/screens/GroupProfile';

//  const Stack = createNativeStackNavigator();

//  const ChatScreens = (props) => (
//    // <SafeAreaView  style={{ flex: 1 }}>
//    <Stack.Navigator initialRouteName='Chats'>
//       <Stack.Screen name='Chats' component={Chats}   initialParams={{ ...props }} options={{ headerShown: false }}  />
//       <Stack.Screen name='Starred Messages' component={StarredMessages} initialParams={{ ...props }}  options={{ headerShown: false }}  />
//       <Stack.Screen name='Group Profile' component={GroupProfile} initialParams={{ ...props }}  options={{ headerShown: false }}  />
//     </Stack.Navigator>
//    // </SafeAreaView>
//  )

//  const AppNavigator = () => (
//    <NavigationContainer>
//      <ChatScreens/>
//    </NavigationContainer>
//  );

//  const App = () =>  {
//   return (
//     <>
//       <IconRegistry icons={EvaIconsPack}/>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <ApplicationProvider {...eva} theme={eva.light}>
//                 <AppNavigator/>
//           </ApplicationProvider>
//         </PersistGate>
//       </Provider>
//     </>
//   );
// };

//  export default App;

//RUTUJA APP.JS
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import GroupChat from './src/components/screens/GroupChat';
// import About from './src/components/screens/About';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: '#8a2be2',
//           marginLeft: 50
//         },
//         headerTintColor: '#ffffff',
//         headerTitleAlign: 'center'
//       }}>
//         <Stack.Screen name="GroupChat" component={GroupChat} options={{
//           title: 'Homies',
//         }} />
//         <Stack.Screen name="About" component={About} options={{
//           title: 'Homies',
//         }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;
//                                                                     //Priyanshu App.js
