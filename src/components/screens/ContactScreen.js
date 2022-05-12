import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
//import Contacts from 'react-native-contacts';
import ContactListItem from '../ChatListItem/ContactListItem';
import {getContact} from '../apis';
//import ContactHeader from '../components/ContactHeader';

const ContactScreen = props => {
  const {navigation} = props;

  const nav = () => {
    navigation.navigate('HomePage');
  };
  const [contacts, setContacts] = useState(null);
  const fetchData = () => {
    getContact()
      .then(response => setContacts(response))
      .catch(err => console.log('A -', err));
  };

  useEffect(() => {
    fetchData();
  }, [contacts]);
  // useEffect(() => {
  //   Contacts.getAll()
  //     .then(contacts => {
  //       contacts.sort(
  //         (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
  //       );
  //       setContacts(contacts);
  //     })
  //     .catch(e => {
  //       alert('Permission to access contacts was denied');
  //       console.warn('Permission to access contacts was denied');
  //     });
  // }, []);

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <ContactListItem contact={item} />;
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight style={styles.back}>
          <Text style={styles.text} onPress={nav}>
            ◄{'                      '}Select Contact
          </Text>
        </TouchableHighlight>
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  back: {
    backgroundColor: '#B983FF',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ContactScreen;
