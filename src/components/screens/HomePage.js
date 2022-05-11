import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Appbar, Menu, Provider} from 'react-native-paper';
// import {Appbar, Menu, Divider, Provider, Searchbar} from 'react-native-paper';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewMessageButton from '../FloatingButton';
import UpperMenu from '../HomeUpper';

export default function HomePage(props) {
  const {navigation} = props;

  // const _goBack = () => console.log('Went back');

  const _handleSearch = () => {
    navigation.navigate('Search');
  };

  const _handleMore = () => console.log('Shown more');
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [searchQuery, setSearchQuery] = useState('');
  //    const _showSearchBar =() => {
  //     React.setState({searchBarExist: true});
  //     SearchBar.show();
  //   }

  //  const _hideSearchBar= () => {
  //     setState({searchBarExist: false});
  //     SearchBar.hide();
  //   }
  const onChangeSearch = query => setSearchQuery(query);

  // const MyComponent = () => {
  //   <Searchbar
  //     placeholder="Search"
  //     onChangeText={onChangeSearch}
  //     value={searchQuery}
  //   />;
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        <Appbar.Header dark={true} style={{backgroundColor: '#B983FF'}}>
          <Appbar.Content title={<Text style={styles.text}>ChatterBox</Text>} />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                color="white"
                onPress={openMenu}
              />
            }>
            <Menu.Item
              onPress={() => {
                console.log('New groups');
              }}
              title="New Group"
            />
            <Menu.Item
              onPress={() => {
                console.log('Starred Messages');
              }}
              title="Starred Messages"
            />
            <Menu.Item
              onPress={() => {
                console.log('Profile Option');
                navigation.navigate('Profile');
              }}
              title="Profile"
            />
          </Menu>
        </Appbar.Header>
        <UpperMenu />
      </Provider>
      <NewMessageButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // body: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: '#000000',
  // },
  container: {
    flex: 1,
    color: '#00ffff',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
});
