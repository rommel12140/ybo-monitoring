import * as types from './types';
import Api from '../lib/api';


//const baseUrl = 'https://www.yahshuabooksonline.com/api/';
const baseUrl = 'http://192.168.2.109/api/'

export function resetAuthToken() {
	return (dispatch, getState) => {
		return dispatch(resetState());
	}
}

export function getAuthToken(data) {
	console.log("======================================================================");
	console.log("========================LOGIN WAS PRESSED=============================");
	console.log("======================================================================");
	return (dispatch, getState) => {
		dispatch(setFail({value : false}));
		return Api.post('api-auth/', data)
		.then((response) => {
			console.log('==========================================='+JSON.stringify(response));
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

export function getPurchaseOrder(token,company){
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
			dispatch(setPurchaseOrderList({ purchaseOrderList: response }));
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

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

export function setPurchaseOrderList( { purchaseOrderList } ) {
	return {
		type: types.SET_PURCHASE_ORDER_LIST,
		purchaseOrderList
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

/*
export function getCartID(token,user){
	return (dispatch,getState) => {
		return fetch(baseUrl+'create-cart-api/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
			body: JSON.stringify({
				userDetails: user
			})
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response.data);
			dispatch(setCartID({ id: response.data }))
			dispatch(setCreateCart( { create: false } ))
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function getNewCartID(token,user){
	return (dispatch,getState) => {
		return fetch(baseUrl+'create-cart-api/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
			body: JSON.stringify({
				userDetails: user
			})
		})
		.then((response) => response.json())
		.then((response) => {
			console.log(response.data);
			dispatch(setCartCounter( { quantity: 0 } ))
			dispatch(setCartID( { id: response.data } ))
			dispatch(setCreateCart( { create: false } ))
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function fetchMenuSchedules(token){
	return (dispatch,getState) => {
		return fetch(baseUrl+'client-menu-schedules-api/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
		})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error)
		})
	}
}

export function fetchMenuScheduleDetails(token,menuID){
	return (dispatch,getState) => {
		console.log(menuID);
		// `${baseUrl}menu-schedule-details-api/${menuID}/`

		console.log(baseUrl+'menu-schedule-details-api/'+menuID);
		return fetch(baseUrl+'menu-schedule-details-api/'+menuID+"/", {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
		})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error)
		})
	}
}
export function fetchCartDetails(token,order) {
	return (dispatch,getState) => {
		return fetch(baseUrl+'cart-detail-api/'+order+'/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			}
		})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error)
		})
	}
}

export function addMenuItem(token,cart,quantity){
	console.log(JSON.stringify(cart))
	return (dispatch,getState) => {
		return fetch(baseUrl+'add-menu-to-cart-api/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
			body: JSON.stringify(cart)
		})
		.then((response) => {
			dispatch(setCartCounter({quantity: quantity}))
			console.log(response)
		})
		.catch((error) => {
			alert(error)
			console.log(error)
		})
	}
}

export function fetchEmployeeCarts(token,carts) {
	return (dispatch, getState) => {
		return Api.post('order-carts-api/', {token:token}, JSON.stringify({carts: carts}))
		.then((response) => {
			dispatch(setEmployeeCarts({ carts: response }))
		})
		.catch((ex) => {
			console.log(ex);
		})
	}
}

export function fetchOrders(token, user) { 
	return (dispatch, getState) => {
		console.log("FETCH ORDERS");
		obj = {
			token : token,
			user : user,
		}
		return Api.post('order-api/', obj)
		.then((response) => {
			dispatch(setOrders({ orders: response }))
		})
		.catch((ex) => {
			console.log(ex);
		})
	}
}

export function makeOrder(token,cart){
	console.log(JSON.stringify(cart))
	return (dispatch,getState) => {
		return fetch(baseUrl+'make-order-api/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'authorization' : 'JWT ' + token,
			},
			body: JSON.stringify(cart)
		})
		.then((response) => {
			dispatch(setCreateCart({create: true}))
			dispatch(setCartCounter( {quantity: 0} ))
			console.log(response)})
		.catch((error) => {
			alert('No connection\nNot submitted, please try again')
			console.log(error)
		})
	}
}

export function setCreateCart( { create } ) {
	return {
		type: types.SET_CREATE_CART,
		create
	}
}

export function resetUser() {
	return {
		type: types.RESET_USER
	}
}

export function setCartID( { id } ){
	return{
		type: types.SET_CART_ID,
		id
	}
}

export function setCartCounter( {quantity} ){
	return{
		type: types.SET_CART_COUNTER,
		quantity
	}
}

export function setOrders( { orders } ) {
	return {
		type: types.SET_ORDERS,
		orders
	}
}

export function setEmployeeCarts( { carts } ) {
	return {
		type: types.SET_EMPLOYEE_CARTS,
		carts
	}
} */