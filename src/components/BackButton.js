import React from 'react';
import { Icon } from 'react-native-elements';
import { withNavigation, NavigationActions } from 'react-navigation';

class Back extends React.Component {
  render() {
    return (<Icon 
                name='arrow-left'
                raised
                color= 'black' 
                type='font-awesome' 
                title="Back" 
                onPress={() => { this.props.navigation.goBack() }} 
                />
    )
  }
}

export default withNavigation(Back);
