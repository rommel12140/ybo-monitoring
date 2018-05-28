import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import PurchaseOrderScreen from '../components/PurchaseOrder/PurchaseOrderScreen'
import ReadPurchaseOrder from '../components/PurchaseOrder/ReadPurchaseOrder'
import ReadPurchaseOrderDataView from '../components/PurchaseOrder/ReadPurchaseOrderDataView'
import ReadReceiveInventory from '../components/PurchaseOrder/ReadReceiveInventory'
import ReadReceiveInventoryDataView from '../components/PurchaseOrder/ReadReceiveInventoryDataView'
import ReadPayBills from '../components/PurchaseOrder/ReadPayBills'
import ReadPayBillsDataView from '../components/PurchaseOrder/ReadPayBillsDataView'



const PurchaseOrderStack = createStackNavigator(
	{
	PurchaseOrderScreen: PurchaseOrderScreen,
	ReadPurchaseOrder: ReadPurchaseOrder,
	ReadPurchaseOrderDataView: ReadPurchaseOrderDataView,
	ReadReceiveInventory: ReadReceiveInventory,
	ReadReceiveInventoryDataView: ReadReceiveInventoryDataView,
	ReadPayBills: ReadPayBills,
	ReadPayBillsDataView: ReadPayBillsDataView,
	},{
		initialRouteName : 'PurchaseOrderScreen',
		headerMode : 'none',
});

export default PurchaseOrderStack
