import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import { purple } from '../utils/colors';

const Navigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // header: null,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(Navigation);
