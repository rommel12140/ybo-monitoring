import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import FundReplenishment from '../components/FundReplenishment/FundReplenishment'
import ReadPurchaseOrder from '../components/FundReplenishment/ReadPurchaseOrder'
import ReadPurchaseOrderDataView from '../components/FundReplenishment/ReadPurchaseOrderDataView'
import ReadReceiveInventory from '../components/FundReplenishment/ReadReceiveInventory'
import ReadReceiveInventoryDataView from '../components/FundReplenishment/ReadReceiveInventoryDataView'
import ReadPayBills from '../components/FundReplenishment/ReadPayBills'
import ReadPayBillsDataView from '../components/FundReplenishment/ReadPayBillsDataView'



const FundReplenishmentStack = createStackNavigator(
	{
	FundReplenishment: FundReplenishment,
	ReadPurchaseOrder: ReadPurchaseOrder,
	ReadPurchaseOrderDataView: ReadPurchaseOrderDataView,
	ReadReceiveInventory: ReadReceiveInventory,
	ReadReceiveInventoryDataView: ReadReceiveInventoryDataView,
	ReadPayBills: ReadPayBills,
	ReadPayBillsDataView: ReadPayBillsDataView,
	},{
		initialRouteName : 'FundReplenishment',
		headerMode : 'none',
});

export default FundReplenishmentStack