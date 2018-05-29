import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, 
		 TabNavigator, 
	     TabBarBottom, 
		 addNavigationHelpers 
} from 'react-navigation';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import DrawerStack from '../navigation/DrawerStack';
import CompanyList from '../components/CompanyList/CompanyList'

//Stack Navigate company list and drawer stack
//to navigate to company list then drawer stack 
//after log -in
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
			//call const AppMainStack
			<AppMainStack screenProps={propsScreen} navigation={this.props.navigation}/>
		)
	}
}

//use redux to pass props
//redux
function mapStateToProps(state) {
	return {
		selectedCompany: state.SelectedCompany,
		user: state.User
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStack);
//redux