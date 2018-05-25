import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import FundReplenishment from '../components/FundReplenishment/FundReplenishment'



const FundReplenishmentStack = createStackNavigator(
	{
        FundReplenishment: FundReplenishment,
	},{
		initialRouteName : 'FundReplenishment',
		headerMode : 'none',
});

export default FundReplenishmentStack