import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import PurchaseOrder from '../components/PurchaseOrder/PurchaseOrder'
import PurchaseOrderDataView from '../components/PurchaseOrder/PurchaseOrderDataView'



const PurchaseOrderStack = createStackNavigator(
	{
	PurchaseOrder: PurchaseOrder,
	PurchaseOrderDataView: PurchaseOrderDataView,
	},{
		initialRouteName : 'PurchaseOrder',
		headerMode : 'none',
});

export default PurchaseOrderStack
