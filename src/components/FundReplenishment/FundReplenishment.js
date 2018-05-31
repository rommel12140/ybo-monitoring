import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    View, 
    TextInput,
    StyleSheet,
    AppRegistry,
    SafeAreaView,
    ListView,
    TouchableHighlight,
    FlatList,
  } from 'react-native'
import { Icon, List, ListItem, Button, Divider } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/actions';
import { connect } from 'react-redux';
//import header function to be used
import { header } from '../Header'
import styles from '../../Themes/Styles'

const pending = {accepted:false,paid:false}
const acceptedUnpaid = {accepted:true,paid:false}
const acceptedPaid = {accepted:true,paid:true}

class FundReplenishment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listInput: [],
            data: [],
            isPending: false,
        }
    }    

    componentDidMount(){
        this.props.screenProps.getReadFunds(this.props.token,pending)
        .then(() => 
        this.setState({listInput: this.props.funds})
        )
    }

    _initializeDropdown(value){
        switch(value){
            case 'Pending': this.props.screenProps.getReadFunds(this.props.token,pending)
                            .then(() => 
                            this.setState({
                                listInput: this.props.funds,
                                isPending: false,
                            }))
                            break; 

            case 'Accepted (Unpaid)': this.props.screenProps.getReadFunds(this.props.token,acceptedUnpaid)
                                    .then(() => 
                                    this.setState({
                                        listInput: this.props.funds,
                                        isPending: true,
                                    }))
                            break;
            case 'Accepted (Paid)': this.props.screenProps.getReadFunds(this.props.token,acceptedPaid)
                                    .then(() => 
                                    this.setState({
                                        listInput: this.props.funds,
                                        isPending: true,
                                    }))
                            break;
        }
    }

    renderItem = (lists) => {
        let list = lists.item
        console.log(list)
        return(
            <TouchableHighlight onPress={() => {this.onPress(list)}} >
                <ListItem
                    key={list.id} 
                    title={<Text style={styles.titleCart}>
                                {list.payee_account}
                            </Text>}
                    hideChevron={true}
                    subtitle={
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text>Amount: </Text>
                            </View>
                            <View style={{paddingHorizontal: 10}}>
                                <Text>{list.amount} </Text>
                            </View>
                        </View>
                    }
                />
            </TouchableHighlight>
        )
    }

    onPress(list){
        this.props.navigation.navigate('OpenDetails', { data: list, pending: this.state.isPending })
    }

    //render navigation of screens from stack
    render(){
        const fundRepChoice = [
        {value: 'Pending',}
        ,{value: 'Accepted (Unpaid)',}
        ,{value: 'Accepted (Paid)',}
        ]
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header('Fund Replenishment')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                    <View style={styles.dataSquare}>
                        <Dropdown
                                    label="Select"
                                    data={fundRepChoice}
                                    value='Pending'
                                    onChangeText={(value,index) => {
                                            this._initializeDropdown(value)
                                        }
                                    }
                        />
                        <List>
                            <FlatList data={this.state.listInput} 
                                    renderItem={this.renderItem}
                                    keyExtractor={(item)=>item.id}
                            />
                        </List>
                    </View>
                        
                    </ScrollView>
            </SafeAreaView>
        )
    }
}

//redux
function mapStateToProps(state) {
	return {
        user: state.User,
        funds: state.Funds,
        token: state.Token,
        selectedCompany: state.SelectedCompany,
        readPayBillsList: state.ReadPayBillsList,
        purchaseOrderList: state.ReadPurchaseOrderList,
        receiveInventoryList: state.ReadReceiveInventoryList,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FundReplenishment);
//redux