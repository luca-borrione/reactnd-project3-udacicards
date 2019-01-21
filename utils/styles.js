import { StyleSheet } from 'react-native';
import { purple, gray } from './colors';

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  h3: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  primaryText: {
    color: purple,
  },
  secondaryText: {
    color: gray,
  },
  inputText: {
    // width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: purple,
    fontSize: 22,
    // margin: 20,
  },
});

export default styles;
