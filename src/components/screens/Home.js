import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import CustomButton from '../../Utils/CustomButton';
import GlobalStyle from '../../Utils/GlobalStyle';

export default function Splash(props) {
  const {navigation} = props;

  const nav = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        // source={require('../../assets/checklist.png')}
      />
      <Text
        style={[
          // GlobalStyle.CustomFontBig,
          styles.text,
        ]}>
        Welcome To ChatterBox
      </Text>

      <Text style={styles.term}>
        Read our privacy Policy. Tap "Agree and Continue" to accept the term and
        condition
      </Text>
      <CustomButton
        title="Agree and Continue"
        color="#aaafff"
        style={{width: '80%', margin: 20}}
        onPressFunction={nav}
      />
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
  term: {
    fontSize: 15,
    textAlign: 'center',
    margin: 50,
    color: '#aaafff',
  },
});
