import { StyleSheet } from 'react-native';
import { purple, gray } from './colors';

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  h3: {
    fontSize: 20,
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
  screenContainer: {
    flex: 1,
  },
  blockTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20,
  },
  blockBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
});

export default styles;
