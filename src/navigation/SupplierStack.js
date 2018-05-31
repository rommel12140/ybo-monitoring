import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SupplierScreen from '../components/Supplier/SupplierScreen'
import PurchaseOrder from '../components/Supplier/PurchaseOrder'
import PurchaseOrderDetails from '../components/Supplier/PurchaseOrderDetails'
import ReceiveInventory from '../components/Supplier/ReceiveInventory'
import ReceiveInventoryDetails from '../components/Supplier/ReceiveInventoryDetails'
import Payments from '../components/Supplier/Payments'
import PaymentsDetails from '../components/Supplier/PaymentsDetails'



const SupplierStack = createStackNavigator(
	{
	SupplierScreen: SupplierScreen,
	PurchaseOrder: PurchaseOrder,
	PurchaseOrderDetails: PurchaseOrderDetails,
	ReceiveInventory: ReceiveInventory,
	ReceiveInventoryDetails: ReceiveInventoryDetails,
	Payments: Payments,
	PaymentsDetails: PaymentsDetails,
	},{
		initialRouteName : 'SupplierScreen',
		headerMode : 'none',
});

export default SupplierStack
