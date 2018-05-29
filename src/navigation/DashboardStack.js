import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Dashboard from '../components/Dashboard/Dashboard'
import DashboardDataView from '../components/Dashboard/DashboardDataView'



const DashboardStack = createStackNavigator(
	{
	Dashboard: Dashboard,
	DashboardDataView: DashboardDataView
	},{
		initialRouteName : 'Dashboard',
		headerMode : 'none',
});

export default DashboardStack
