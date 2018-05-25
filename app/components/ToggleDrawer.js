import React from 'react';
import { Icon } from 'react-native-elements';
import { withNavigation, NavigationActions } from 'react-navigation';

class Drawer extends React.Component {
  render() {
    return (<Icon 
                name='menu'
                raised
                color= 'black' 
                type='MaterialCommunityIcons' 
                title="Drawer" 
                onPress={() => { this.props.navigation.toggleDrawer() }} 
                onLongPress={() => { this.props.navigation.goBack() }}
                />
    )
  }
}

export default withNavigation(Drawer);
