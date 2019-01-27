import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DeckView from '../containers/DeckView';
import AddCard from '../containers/AddCard';
import Quiz from '../containers/Quiz';
import { purple, white, palePurple } from '../utils/colors';

const Navigation = createStackNavigator({
  HomeScreen,
  DeckView,
  AddCard,
  Quiz,
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
