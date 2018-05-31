import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import FundReplenishment from '../components/FundReplenishment/FundReplenishment'
import Open from '../components/FundReplenishment/Open'
import OpenDetails from '../components/FundReplenishment/OpenDetails'



const FundReplenishmentStack = createStackNavigator(
	{
	FundReplenishment: FundReplenishment,
	Open: Open,
	OpenDetails: OpenDetails,
	},{
		initialRouteName : 'FundReplenishment',
		headerMode : 'none',
});

export default FundReplenishmentStack