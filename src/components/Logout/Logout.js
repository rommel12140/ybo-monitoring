import React from 'react';
import { Icon } from 'react-native-elements';
import { withNavigation, NavigationActions } from 'react-navigation';

//TO BE DELETED
//NOT USED
class Logout extends React.Component {
  
  render() {
    return (setTimeout(()=> {
      alert('You are logged out')
      this.props.navigation.navigate('Login')}), 3000)
  }
}

export default withNavigation(Logout);
