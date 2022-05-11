import React, { useEffect,useCallback  } from 'react';
import { View, TouchableOpacity ,Image } from 'react-native'
import { Text, OverflowMenu, MenuItem, Button,Card,  } from '@ui-kitten/components';
import { styles } from '../assests/styles';
import { useSelector,useDispatch } from 'react-redux';
import { setStarredMessages, removeStarredMessages } from '../Redux/actions/starredMessagesActions';
import Snackbar from 'react-native-snackbar';
import { format,render } from 'timeago.js';
import { deleteMessage } from './apis';
import { DocIcon } from './Icons'
import Icon from 'react-native-vector-icons/Ionicons';
import { addReplyMessages } from '../Redux/actions/replyMessage';


const SingleMessageComponet = (props) => {

    const [visible, setVisible] = React.useState(false);
    const { ele } = props
    const dispatch = useDispatch();
    const starredMessages = useSelector(state => state.starredMessageReducer.starredMessages);

    const setData = (ele) => {
      if(visible){
      dispatch(setStarredMessages({id:ele._id,name: ele.userName,profile: require('../assests/demo.png'), message: ele.message}));
      // setVisible(false);
      Snackbar.show({
        text: 'Added to Starred Messages',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'Okay',
          textColor: 'green',
          onPress: () => { setVisible(false) },
        },
      });
      }
    }
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


    const deleteMsg =  (id) => {
      console.log("id", id);
      deleteMessage(id)
      .catch(err => console.log("A -", err));
    }
    const reply = (ele) => {
      dispatch(addReplyMessages(ele));
    }

    
  
    return (
    <>
    <View style={styles.name}>
      
      {ele.type === 'receiver'  && ele.conType === "group"? <Text style={styles.text} status='primary'>{ele.userName}</Text>: null}
    </View>
       <Card style={styles.card}>
          {ele.parent?
                <Card style={styles.innerCard} status="primary">
                    <Text style={styles.text} status='primary'>{ele.parent.userName}</Text>
                    <Text style={styles.text}>{ele.parent.message}</Text>
                </Card>
            :null}
            <OverflowMenu
            anchor={() => (
            <TouchableOpacity onLongPress={() => setVisible(true)}>
              {ele.msgType === 'text' ? <Text style={styles.text} on>{ele.message}</Text> : <></>}
              {ele.msgType === 'image' ? <Image style={styles.image} source={{uri: ele.message}} /> : <></>}
              {ele.msgType === 'doc' ? 
                <View style={styles.text} >
                  <View>
                    <DocIcon ></DocIcon>
                  </View>
                  <View >
                <Text style={styles.text}>{ele.message}</Text>
                  </View>
                </View>: <></>}
              {ele.msgType === 'pdf' ? <View style={styles.doc} > 
                <Icon name = 'document' size={30} color='black'></Icon>
                  <Text style={styles.text} >{ ele.message}</Text>
                </View> : <></>}              
            </TouchableOpacity>)}
            visible={visible}
            onBackdropPress={() => setVisible(false)}>
                <MenuItem title='Reply' onPress={() =>{reply(ele)}}/>
                {starredMessages.find(data => data.id === ele._id) 
                ? <MenuItem title='Remove from Starred Messages' onPress={()=>{removeData(ele)}}/>
                :  <MenuItem title='Add to Starred Messages' onPress={() => {setData(ele)}} />} 
                <MenuItem title='Delete' onPress={() => {deleteMsg(ele._id)}}/>
                {/* <MenuItem title='Details'/> */}
            </OverflowMenu>
            
            <Text style={styles.time}>{format((new Date(ele.createdAt)).toUTCString())}</Text>
        </Card>
      </>
    )

}

export default SingleMessageComponet