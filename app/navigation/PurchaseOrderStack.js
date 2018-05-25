import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import PurchaseOrder from '../components/PurchaseOrder/PurchaseOrder'



const PurchaseOrderStack = createStackNavigator(
	{
        PurchaseOrder: PurchaseOrder,
	},{
		initialRouteName : 'PurchaseOrder',
		headerMode : 'none',
});

export default PurchaseOrderStack
