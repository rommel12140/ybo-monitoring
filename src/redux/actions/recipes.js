//Action Recipes for redux
import * as types from './types';
import Api from '../lib/api';


const baseUrl = 'https://www.yahshuabooksonline.com/api/';
//const baseUrl = 'http://192.168.2.109/api/'


//api functions to get data and redux functions to dispatch actions
//function to reset state
export function resetAuthToken() {
	return (dispatch, getState) => {
		return dispatch(resetState());
	}
}
//function to get Authentication
export function getAuthToken(data) {
	return (dispatch, getState) => {
		dispatch(setFail({value : false}));
		return Api.post('api-auth/', data)
		.then((response) => {
			dispatch(setToken({ token: response.token}))
			dispatch(setUser({ user: response.user}))
			dispatch(setAccepted({ value : true }));
			dispatch(setFail({ value : false }));
		})
		.catch((ex) => {
			alert(ex);
			dispatch(setAccepted({ value : false }));
			dispatch(setFail({ value : true })); 
			console.log(JSON.stringify(ex));
		})
	}
}
//function to get List of Companies
export function getCompanyList(token,user){
	return (dispatch,getState) => {
		return fetch(baseUrl+'user-company-list/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization' : 'Token ' + token,
			},
			body: JSON.stringify({
				user
			})
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			dispatch(setCompanyList({ companyList: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}
// function to get selected company
export function selectCompany(token,companyID){
	return (dispatch,getState) => {
		return fetch(baseUrl+'select-company/'+companyID+'/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization' : 'Token ' + token,
			},
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			dispatch(setSelectedCompany({ selectedCompany: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

//function to get the list of purchase order
export function getReadPurchaseOrder(token,company){
	return (dispatch,getState) => {
		return fetch(baseUrl+'read_purchase_order/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization' : 'Token ' + token,
			},
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			dispatch(setReadPurchaseOrderList({ readPurchaseOrderList: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

//function to get the receive inventory list
export function getReadReceiveInventory(token,company){
	return (dispatch,getState) => {
		return fetch(baseUrl+'read_receive_inventory/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization' : 'Token ' + token,
			},
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			dispatch(setReadReceiveInventoryList({ readReceiveInventoryList: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

//function to get the pay bills list
export function getReadPayBills(token,company){
	return (dispatch,getState) => {
		return fetch(baseUrl+'read_receive_inventory/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization' : 'Token ' + token,
			},
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			dispatch(setReadPayBillsList({ readPayBillsList: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}
//=======================================================================================
//=======================================================================================
//dispatch actions from functions

export function setAccepted( { value } ) {
	return {
		type: types.SET_ACCEPTED,
		value
	}
}

export function setSelectedCompany( { selectedCompany } ) {
	return {
		type: types.SET_SELECTED_COMPANY,
		selectedCompany
	}
}

export function setCompanyList( { companyList } ) {
	return {
		type: types.SET_COMPANY_LIST,
		companyList
	}
}

export function setReadPurchaseOrderList( { readPurchaseOrderList } ) {
	return {
		type: types.SET_READ_PURCHASE_ORDER_LIST,
		readPurchaseOrderList
	}
}

export function setReadReceiveInventoryList( { readReceiveInventoryList } ) {
	return {
		type: types.SET_READ_RECEIVE_INVENTORY_LIST,
		readReceiveInventoryList
	}
}

export function setReadPayBillsList( { readPayBillsList } ) {
	return {
		type: types.SET_READ_PAY_BILLS_LIST,
		readPayBillsList
	}
}

export function setFail({value}) {
	return {
		type: types.SET_FAIL,
		value
	}
}

export function resetState() {
	return {
		type: types.RESET_STATE
	}
}

export function setToken( { token } ) {
	return {
		type: types.SET_TOKEN,
		token
	}
}

export function setUser( { user } ) {
	return {
		type: types.SET_USER,
		user
	}
}