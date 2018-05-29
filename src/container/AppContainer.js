import { createSwitchNavigator, DrawerNavigator } from 'react-navigation';
import Login from '../components/Login/Login'
import CompanyList from '../components/CompanyList/CompanyList'
import AppStack from '../navigation/AppStack'

//Switch Navigate as container for the application
const StackNavigate = createSwitchNavigator({
    Login: Login,
    //AdminMain : MainApp,
    Company_List: CompanyList,
    User : AppStack,
  },{
    initialRouteName : 'Login',
    headerMode : 'screen',
  });

export default StackNavigate;