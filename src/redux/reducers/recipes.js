//Redux Recipe Reducers
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const AuthAccept = createReducer(false,{
	[types.SET_ACCEPTED](state, action){
		return action.value;
	},
})

export const AuthCheck = createReducer(false,{
	[types.SET_FAIL](state, action){
		return action.value;
	},
})

export const Token = createReducer("", {
	[types.SET_TOKEN](state , action){
		return action.token; 
	},
})

export const SelectedCompany = createReducer({}, {
	[types.SET_SELECTED_COMPANY](state , action){
		return action.selectedCompany; 
	}
})

export const CompanyList = createReducer({}, {
	[types.SET_COMPANY_LIST](state , action){
		return action.companyList; 
	}
})

export const ReadPurchaseOrderList = createReducer({}, {
	[types.SET_READ_PURCHASE_ORDER_LIST](state , action){
		return action.readPurchaseOrderList; 
	}
})

export const ReadReceiveInventoryList = createReducer({}, {
	[types.SET_READ_RECEIVE_INVENTORY_LIST](state , action){
		return action.readReceiveInventoryList; 
	}
})

export const ReadPayBillsList = createReducer({}, {
	[types.SET_READ_PAY_BILLS_LIST](state , action){
		return action.readPayBillsList; 
	}
})

export const User = createReducer({},{
	[types.SET_USER](state, action){
		return action.user;
	},
	[types.RESET_USER](state, action){
		return {};
	}
})

export const ResetState = createReducer("", {
	[types.RESET_STATE](state , action){
		return ''; 
	}
})

/*
export const setOrders = createReducer({}, {
	[types.SET_ORDERS](state, action) {
		var results = Object.keys(action.orders).map(key => {
			return {
				name : key,
				value : action.orders[key],
			}
		})
		return results;
	}
})

export const setEmployeeCarts = createReducer({}, {
	[types.SET_EMPLOYEE_CARTS](state, action) {
		var results = Object.keys(action.carts).map(function(key){
			return {
				title: key,
				data: action.carts[key]
			}
		})
		return results;
	}
})

export const CreateCart = createReducer(true,{
	[types.SET_CREATE_CART](state, action){
		return action.create;
	},
})

export const CartID = createReducer("",{
	[types.SET_CART_ID](state, action){
		return action.id;
	},
})

export const CartCounter = createReducer(0,{
	[types.SET_CART_COUNTER](state, action){
		return action.quantity;
	},
}) */