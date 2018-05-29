import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SalesOrder from '../components/SalesOrder/SalesOrder'



const SalesOrderStack = createStackNavigator(
	{
        SalesOrder: SalesOrder,
	},{
		initialRouteName : 'SalesOrder',
		headerMode : 'none',
});

export default SalesOrderStack