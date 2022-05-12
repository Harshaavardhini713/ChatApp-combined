import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import  SingleMessageComponet  from '../SingleMessageComponet'


const Messages = (props) => {
    
    const messages = props.messages ?? [];
    const newList = messages.length > 0 ? messages[0]["messages"]: [];
    
    if(newList) {
        return newList.map((message, index) => {
            return (
                <>  
                    {message.type === "sender"
                        ? 
                        <View  key= {index} style = {[styles.sender, styles.cardView]}>
                                <SingleMessageComponet ele={message} />
                        </View>
                        : <View  key={index} style = {styles.cardView}>
                                <SingleMessageComponet ele={message} />
                        </View>}
                    </>
                    )
                })
    } else {
        return (
        <View style = {styles.cardView}>   
        </View>
    )}
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