import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, 
		 TabNavigator, 
	     TabBarBottom, 
		 addNavigationHelpers 
} from 'react-navigation';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import DrawerStack from '../navigation/DrawerStack';
import CompanyList from '../components/CompanyList/CompanyList'
import Logout from '../components/Logout/Logout'

const AppMainStack = createStackNavigator(
	{
		Company_List: CompanyList,
		DrawerStack: DrawerStack,
	},{
		initialRouteName : 'DrawerStack',
		headerMode : 'none',
});

class AppStack extends Component {
	static router = AppMainStack.router;

	constructor(props){
		super(props);
	}
	render() {
		const propsScreen = {...this.props}
		return (
			<AppMainStack screenProps={propsScreen} navigation={this.props.navigation}/>
		)
	}
}
function mapStateToProps(state) {
	return {
		selectedCompany: state.SelectedCompany
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStack);