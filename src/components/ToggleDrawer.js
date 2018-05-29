import React from 'react';
import { Icon } from 'react-native-elements';
import { withNavigation, NavigationActions } from 'react-navigation';

class Drawer extends React.Component {
  render() {
    return (<Icon 
                name='bars'
                raised
                color= 'black' 
                type='font-awesome' 
                title="Drawer" 
                onPress={() => { this.props.navigation.toggleDrawer() }} 
                />
    )
  }
}

export default withNavigation(Drawer);
