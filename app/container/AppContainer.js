import { createSwitchNavigator, DrawerNavigator } from 'react-navigation';
import Login from '../components/Login/Login'
import AppStack from '../navigation/AppStack'

const StackNavigate = createSwitchNavigator({
    Login: Login,
    //AdminMain : MainApp,
    User : AppStack,
  },{
    initialRouteName : 'Login',
    headerMode : 'screen',
  });

export default StackNavigate;