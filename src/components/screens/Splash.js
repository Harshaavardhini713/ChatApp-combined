import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import GlobalStyle from '../../Utils/GlobalStyle';

export default function Splash(props) {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        // source={require('../../assets/checklist.png')}
      />
      <Text style={[GlobalStyle.CustomFontBig, styles.text]}>ChatterBox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 125,
    height: 125,
    margin: 20,
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    margin: 20,
    color: '#ffffff',
  },
});
