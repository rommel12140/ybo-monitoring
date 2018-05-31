import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Customer from '../components/Customer/Customer'
import SalesOrder from '../components/Customer/SalesOrder';
import SalesOrderDetails from '../components/Customer/SalesOrderDetails';
import SalesInvoice from '../components/Customer/SalesInvoice';
import SalesInvoiceDetails from '../components/Customer/SalesInvoiceDetails';
import ReceiptsCollections from '../components/Customer/ReceiptsCollections';
import ReceiptsCollectionsDetails from '../components/Customer/ReceiptsCollectionsDetails';



const CustomerStack = createStackNavigator(
	{
	Customer: Customer,
	SalesOrder: SalesOrder,
	SalesOrderDetails: SalesOrderDetails,
	SalesInvoice: SalesInvoice,
	SalesInvoiceDetails: SalesInvoiceDetails,
	ReceiptsCollections: ReceiptsCollections,
	ReceiptsCollectionsDetails: ReceiptsCollectionsDetails,

	},{
		initialRouteName : 'Customer',
		headerMode : 'none',
});

export default CustomerStack