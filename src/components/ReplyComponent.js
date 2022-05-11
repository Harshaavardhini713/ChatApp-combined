import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Text, OverflowMenu, MenuItem, Button,Card,  } from '@ui-kitten/components';
import { styles } from '../assets/styles';

const ReplyComponent = () => {
    const [visible, setVisible] = React.useState(false);
    // const { msg, time, index } = props
    // const {prev, ele } = props
    const ele = {
        "name": "John Doe",
        "msg": "ya",
        "time": "12:00",
        "type": "recevier",
        "conType": "individual"    
    }
    const prev = {
        "name": "Sam Doe",
        "msg": "Are you there?",
        "time": "12:00",
        "type": "sender",
        "conType": "individual"
    }
    

  return (
   
       <Card style={styles.replyCard}>
            <Card style={styles.innerCard} status="primary">
                <Text style={styles.text} status='primary'>{prev.name}</Text>
                <Text style={styles.text}>{prev.msg}</Text>
            </Card>
            {ele.type === 'recevier' && ele.conType === "Group"? <Text style={styles.text} status='primary'>{ele.name}</Text>: null}
            <OverflowMenu
            anchor={() => (<TouchableOpacity onLongPress={() => setVisible(true)}><Text style={styles.text} on>{ele.msg}</Text></TouchableOpacity>)}
            visible={visible}
            onBackdropPress={() => setVisible(false)}>
                <MenuItem title='Reply'/>
                <MenuItem title='Add to Starred Messages'/>
                <MenuItem title='Delete'/>
                {/* <MenuItem title='Details'/> */}
            </OverflowMenu>
            <Text style={styles.time}>{ele.time}</Text>
        </Card>
  )
}

export default ReplyComponent