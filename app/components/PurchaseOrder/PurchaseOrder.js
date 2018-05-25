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
  } from 'react-native'
import { Icon, List, ListItem } from 'react-native-elements'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { header } from '../Header'
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';


class PurchaseOrder extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: ds,
        }
    }    

    componentWillMount(){
        this.props.screenProps.getPurchaseOrder(this.props.token,this.props.selectedCompany)
        .then(() => this.setState({
            listInput: this.state.listInput.cloneWithRows(this.props.purchaseOrderList)
        }))

    }

    onPress(list){
        this.props.navigation.navigate('PurchaseOrderDataView', {list: list.purchase_order_details})
    }

    renderRow(list, sectionId, rowId, hightlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(list)}} >
                <ListItem
                    key={list.id} 
                    title={<Text style={styles.titleCart}>{list.date}</Text>}
                    hideChevron={true}
                    subtitle={
                        <View>
                            <Text> {list.purchase_no} </Text>
                        </View>
                    }
                />
            </TouchableHighlight>
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header('Purchase Order')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                            <View style={styles.dataSquare}>
                                <List>
                                    <ListView dataSource={this.state.listInput} 
                                                renderRow={this.renderRow.bind(this)}/>
                                </List>
                            </View>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
	return {
        user: state.User,
        token: state.Token,
        selectedCompany: state.SelectedCompany,
        purchaseOrderList: state.PurchaseOrderList,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);