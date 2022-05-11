import React, { useState, useEffect, useRef,useCallback } from 'react'

import { ScrollView,View, ActivityIndicator  } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import { Layout, Input, Text, Button } from '@ui-kitten/components';
import Message from './Messages'
import { SmileIcon , AttachmentIcon, SendIcon } from '../Icons' 
import { styles } from '../../assets/styles';
import LoadingComponent from '../LoadingComponent';

import HeaderComponent from '../HeaderComponent';

import {collection, addDoc,orderBy, query, onSnapshot  } from 'firebase/firestore';
import { auth, database } from '../../config/firebaseConfig';
// import { GiftedChat } from 'react-native-gifted-chat';

import { io } from 'socket.io-client';

import { addMessage,getChatById,getChatByChatID } from '../apis'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {deleteReplyMessages} from '../../redux/actions/replyMessage';

import DocumentPicker, { DirectoryPickerResponse, DocumentPickerResponse, isInProgress, types, } from 'react-native-document-picker';

const Chats = (props) => {

    const { navigation,  } = props;
    // const socket = useRef(io('ws://localhost:8900/'))
    // const socket = useRef();
    const [value, setValue] = React.useState('');
    const [messages, setMessages] = useState(null);
    const {chatid, userid} = props.route.params;

    useEffect(()=> {
        const timer = setTimeout(() => {
            fetchData();
          }, 2000);
      
          return () => clearTimeout(timer);
        // timer for 1 mins 
    });
    const dispatch = useDispatch();
    const chats = useSelector(state => state.replyReducer.replyMessage);
    
    const newData = chats;
    
    const fetchData =  () => {
       // getChatById("627540a38872862d941962a3","62761eb5116252d1ed69208a")
       //6277997845d7ac98875ea319 , 627732ad8e2613c246d88a92
        getChatByChatID(chatid)
        .then(response => setMessages(response))
       .catch(err => console.log("A -", err));
      
    }

  const [multipleFile, setMultipleFile] = useState([]);


  const selectMultipleFile = async () => {
    //Opening Document Picker for selection of multiple file
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well find above
      });
      for (const res of results) {
        //Printing the log realted to the file
        // console.log('res : ' + JSON.stringify(res));
        // console.log('URI : ' + res.uri);
        // console.log('Type : ' + res.type);
        // console.log('File Name : ' + res.name);
        // console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
      setMultipleFile(results);
      if(results && results[0].type === 'image/jpeg'){
        addMessage(messages,results[0].uri,msgType="image");  
      }
      else if(results && results[0].type === 'doc'){
        addMessage(messages,results[0].name,msgType="doc");
      }
      else if(results && results[0].type === 'application/pdf'){
        addMessage(messages,results[0].name,msgType="pdf");
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const sendMessage = (value) => {
    addMessage(messages,value,msgType="text",parent=chats._id),
     setValue('');
     dispatch(deleteReplyMessages());
  }
  

    return (
        <>
        {messages ? 
        <Layout style={styles.mainContainer}>
           {messages ?  <HeaderComponent headerInfo={messages} navigation={props.navigation}/> : null}
        
        
            <Layout style={styles.cardContainer} level='4'>
                <ScrollView >
                    {messages? <Message messages={messages} />: <></>}
                </ScrollView> 
            </Layout>

            <Layout style={[ styles.messageContainer,]}>
                <Layout style={styles.layout} level='2'>
                  {chats.length !== 0 ?
                      <View style={styles.replyMessage}>
                        <Text><MaterialIcons name='reply' size={20} ></MaterialIcons> {chats.userName }:{chats.message} </Text>   
                    </View>
                  : null}
                   <Input
                        //  <Icon  name={eye-off' : 'eye'}/>
                        placeholder='Messsage'
                        // icon='search-outline'
                        value={value}
                        accessoryLeft={SmileIcon}
                        // accessoryRight= {AttachmentIcon}
                        style={styles.input}
                        // autoFocus={true}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                   
                    
                </Layout>
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryLeft={AttachmentIcon}
                    onPress={() => {selectMultipleFile()}}
                />
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryLeft={SendIcon}
                    onPress={() => {sendMessage(value)}}
                />
            </Layout>
        </Layout>
       : <LoadingComponent/>}
        </>
    )
}

export default Chats;
