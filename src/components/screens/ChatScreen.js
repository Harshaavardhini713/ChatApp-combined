import React from 'react'
import { View, Text, Header , Image, Dimensions } from 'react-native'
import { Appbar, Menu, Divider, Provider  } from 'react-native-paper';

const ChatScreen = () => {

    const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
   <>
    <Provider>
    <Appbar.Header dark={true} style={{backgroundColor:"black"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content
                title={
                   <Image 
                        // source={require('../../assets/demo.png')}
                        source={{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} 
                        style={{
                            width: 50,
                            height:40,
                            // borderRadius:30,
                            borderWidth:2,
                            borderColor:"white",
                            // justifyContent:"flex-start",
                            
                        }}
                    />}
                // titleStyle={{backgroundColor: "red",}}
                style={{width:10,backgroundColor:"red", borderRadius:20,alignSelf:'center'}}
            />
            <Text style={{color:"white",fontSize:20}}> User.name</Text> 
      <Appbar.Action icon="phone" onPress={_handleSearch} />
      <Appbar.Action icon="video" onPress={_handleSearch} />
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="dots-vertical" color="white" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="View Starred Messages" />
          <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Delete Conversation" />
        </Menu>
    </Appbar.Header>
   <View style={{flex:1}}>
        <View style={{flex:0.8}}>
            <Text>ChatScreen</Text>
        </View>
        <View style ={{flex:0.2}}>
            
        </View>     
   </View>
   
   </Provider>
   </>
  )
}

export default ChatScreen