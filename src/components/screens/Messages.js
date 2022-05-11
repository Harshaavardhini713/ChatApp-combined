import React from 'react'
import { StyleSheet, View } from 'react-native';
import  SingleMessageComponet  from '../SingleMessageComponet'


const Messages = (props) => {
    
    const messages = props.messages ?? [];
    const newList = messages.length > 0 ? messages[0]["messages"]: [];
    console.log("newList", messages);

   return newList.map((message, index) => {
       return (
        <>
            {message.type === "sender"
                ? <View  key= {index} style = {[styles.sender, styles.cardView]}>
                        <SingleMessageComponet ele={message} />
                </View>
                : <View  key={index} style = {styles.cardView}>
                        <SingleMessageComponet ele={message} />
                </View>}
            </>
            )
        })
}



export default Messages


const styles = StyleSheet.create({
    card: {
        margin: 5,
        flexWrap: 'wrap',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },
    txt: {
        
    },
    sender : {
        alignSelf:"flex-end",
        borderRadius:10,
    },
    cardView : {
        flexWrap: 'wrap',
        
    }
});