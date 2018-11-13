import { StackNavigator, TabNavigator } from 'react-navigation';
import  HomeScreen  from './app/HomeScreen';
import  DetailsScreen  from './app/DetailsScreen';
import  Login  from './app/Login';
import  Dashboard  from './app/Dashboard';
import  ProjectsList  from './app/ProjectsList';

import  ModalScreen  from './app/modal/ModalScreen';

const MainStack =  StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Dashboard : {
      screen : Dashboard
    },
    Auth: {
      screen: Login,
    },
    ProjectsList : {
      screen : ProjectsList
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
