import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar,Button, Divider, Icon, List, ListItem, TopNavigation, TopNavigationAction, OverflowMenu, MenuItem } from '@ui-kitten/components';
import { SearchIcon, BackIcon, SettingsIcon, MenuIcon } from './Icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeStarredMessages } from '../Redux/actions/starredMessagesActions';
import Snackbar from 'react-native-snackbar';


const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const StarredMessages = (props) => {

  const starredMessages = useSelector(state => state.starredMessageReducer.starredMessages);

  const data2 = starredMessages.map((ele, index) => {
    return {
      title: ele.name,
      description: ele.message,
      profile: ele.profile,
      _id : ele.id,
    }
  })


  const dispatch = useDispatch();

  const removeData = (ele) => {
    dispatch(removeStarredMessages(ele));
    // setVisible(false);
    Snackbar.show({
      text: 'Removed to Starred Messages',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'Okay',
        textColor: 'green',
        onPress: () => { Snackbar.dismiss() },
      },
    });
    }
  

    const { navigation  } = props;
    
    const navigateBack = () => {
        navigation.goBack();
    };
    
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
      );

      const renderRightActions = () => (
        <React.Fragment>
          <TopNavigationAction icon={SearchIcon}/>
          <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}>
            <MenuItem  title='Unstar All'/>
          </OverflowMenu>
        </React.Fragment>
      );
    
      const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );
    
      const renderItemAccessory = (item) => (
        <Button size='small' onPress={() => {removeData(item)}}> Remove Message</Button>
      );
    
      const renderItemIcon = (props) => (
        <Avatar style={styles.avatar} size='medium' source={require('../assests/demo.png')}/>
      );
    
      const renderItem = ({ item, index }) => (
       
        <ListItem
          key={index}
          title={`${item.title} `}
          description={`${item.description}`}
          accessoryLeft={
            renderItemIcon
          // <Avatar style={styles.avatar} size='large' source={item.profile}/>
        }
          accessoryRight={renderItemAccessory(item)}
        />
       
      );
    
      return (
        <React.Fragment>
          <TopNavigation
            // alignment='center'
            title='Starred Messages'
            accessoryLeft={renderBackAction}
            accessoryRight={renderRightActions}
            style={styles.topNavigation}
          />
          <Divider/>
          <List
            style={styles.container}
            data={data2}
            renderItem={renderItem}
          />
        </React.Fragment>
    );
};
    

export default StarredMessages;


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
    },
    avatar: {
        margin: 8,
      },
      topNavigation: {  
        // height:50,
      },
});