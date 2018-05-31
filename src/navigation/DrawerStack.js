import React, { Component } from 'react';
import { Text, View, Button, SafeAreaView, List } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Divider } from 'react-native-elements';
import styles from '../Themes/Styles'
//Navigation Stacks
import CompanyList from '../components/CompanyList/CompanyList'
import DashboardStack from '../navigation/DashboardStack';
import SupplierStack from '../navigation/SupplierStack';
import CustomerStack from '../navigation/CustomerStack';
import FundReplenishmentStack from '../navigation/FundReplenishmentStack';


//contentComponent to style the drawer however you want
const navigatorConfig = {
	contentComponent:(props) => (
        <View style={styles.drawerContainer}>
            <SafeAreaView  style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
				<View>
					<Text style={styles.drawerTitle}> {props.screenProps.selectedCompany.name} </Text>
					<Divider />
					<DrawerItems {...props} />
				</View>
				<Divider />
            </SafeAreaView>
			<View style={{marginBottom: 40}}>
				<Divider />
				<Button title="Switch Company" 
						color= 'black'
						onPress={() => {
							props.navigation.navigate('Company_List')
						}}/>
				<Button title="Logout" 
						color= 'black'
						onPress={() => props.navigation.navigate('Login')
						}/>
			</View>
        </View>
	)
};
  
//Drawer screens that navigate to other stack navigation
const DrawerStack = createDrawerNavigator(
	{	
		Dashboard: {screen: DashboardStack, 
					navigationOptions: {
						title: 'Dashboard',
						drawerLabel: 'Home',
						drawerIcon: (<Icon name="home" type='font-awesome' size={24} />),
		  			}},
		Supplier: {screen: SupplierStack, 
					navigationOptions: {
						title: 'Supplier',
						drawerIcon: (<Icon name="shopping-cart" type='font-awesome' size={24} />),
					}},
		Customer: {screen: CustomerStack, 
					navigationOptions: {
						title: 'Customer',
						drawerIcon: (<Icon name="dollar" type='font-awesome' size={24} />),
					}},
		FundReplenishment: {screen: FundReplenishmentStack, 
					navigationOptions: {
						title: 'Fund Replenishment',
						drawerIcon: (<Icon name="money" type='font-awesome' size={24} />),
					}},
	}, navigatorConfig
);

export default DrawerStack