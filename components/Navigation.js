import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

const MainNav = createStackNavigator({
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(MainNav);
