import React, { Component } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import DashboardStack from '../navigation/DashboardStack';
import PurchaseOrderStack from '../navigation/PurchaseOrderStack';
import SalesOrderStack from '../navigation/SalesOrderStack';
import FundReplenishmentStack from '../navigation/FundReplenishmentStack';
import Logout from '../components/Logout/Logout'

const DrawerStack = createDrawerNavigator(
	{	
		Dashboard: {screen: DashboardStack, 
					navigationOptions: {
						title: 'Dashboard',
						drawerLabel: 'Home',
						drawerIcon: (<Icon name="home" type='font-awesome' size={24} />),
		  			}},
		PurchaseOrder: {screen: PurchaseOrderStack, 
					navigationOptions: {
						title: 'Purchase Order',
						drawerIcon: (<Icon name="shopping-cart" type='font-awesome' size={24} />),
					}},
		SalesOrder: {screen: SalesOrderStack, 
					navigationOptions: {
						title: 'Sales Order',
						drawerIcon: (<Icon name="dollar" type='font-awesome' size={24} />),
					}},
		FundReplenishment: {screen: FundReplenishmentStack, 
					navigationOptions: {
						title: 'Fund Replenishment',
						drawerIcon: (<Icon name="money" type='font-awesome' size={24} />),
					}},
		Logout: {screen: Logout,
					navigationOptions: {
						drawerIcon: (<Icon name="sign-out" type='font-awesome' size={24} />),
					}},
	},
);

export default DrawerStack