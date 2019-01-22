import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DeckView from '../containers/DeckView';
import { purple, white, palePurple } from '../utils/colors';

const Navigation = createStackNavigator({
  HomeScreen,
  DeckView,
},
{
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  cardStyle: {
    backgroundColor: palePurple,
  },
});

export default createAppContainer(Navigation);
