import React, {useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import SearchListItem from '../ChatListItem/SearchListItem';
// import chatRoom from '../data/chatRoom';
import {searchChat} from '../apis';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Search = props => {
  const id = useSelector(state => state.chatuser.id);
  const {navigation} = props;
  const nav = () => {
    navigation.navigate('HomePage');
  };

  const [chats, setChats] = useState(null);
  const fetchData = () => {
    if (chats === null) {
      searchChat(id)
        .then(response => setChats(response))
        .catch(err => console.log('A -', err));
    }
  };

  useEffect(() => {
    fetchData();
  });

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const onChangeSearch = query => setSearch(query);

  useEffect(() => {
    setFilteredDataSource(chats);
    setMasterDataSource(chats);
  }, [chats]);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.users[1].name.toString()
          ? item.users[1].name.toString().toUpperCase()
          : ''.toUpperCase();
        const textData = text.toString().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TouchableHighlight style={styles.back}>
          <Text style={styles.text1} onPress={nav}>
            {'  '}◄{'               '} Search Conversations
          </Text>
        </TouchableHighlight>
        <TextInput
          style={[styles.text, styles.textbox]}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          placeholderTextColor="white"
        />
      </View>
      <View>
        <FlatList
          style={{width: '100%'}}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({item}) => <SearchListItem chatRoom={item} />}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchBar: {
    flexDirection: 'column',
  },
  back: {
    backgroundColor: '#B983FF',
    height: 50,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    margin: 10,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: 'black',
    color: 'white',
  },
});
