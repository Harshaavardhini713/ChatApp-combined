import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },

  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  lastMessage: {
    fontSize: 15,
    color: 'grey',
  },
  time: {
    fontSize: 13,
    color: 'grey',
  },
});

export default styles;
