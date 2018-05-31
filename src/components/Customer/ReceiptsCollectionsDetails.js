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
import { headerWithBack } from '../Header'
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';

export default class ReceiptsCollectionsDetails extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataInput: {},
            listInput: ds,
        }
    }    

    componentDidMount(){
        const {params} = this.props.navigation.state;
        const data = params ? params.data : null;
        console.log(data)
        this.setState({
            dataInput: data,
            //listInput: data.purchase_order_details,
            listInput: this.state.listInput.cloneWithRows(data.receive_inventory_details)
        })
    }

    itemDetails(data){
        return(
            <View>
                <Text style={styles.titleCart}>{data.receive_no}</Text>
                <Text>Date: {data.date} </Text>
                <Text>Reference No.: {data.reference_no} </Text>
                <List>
                    <ListView  dataSource={this.state.listInput}
                                renderRow={this.renderRow.bind(this)}
                    />
                </List>
            </View>
        )
    }
    
    renderRow(list, sectionId, rowId, hightlightRow){
        console.log(list)
        return(
            <ListItem
                key={list.id} 
                hideChevron={true}
                subtitle={
                    <View>
                        <Text> Item: {list.description} </Text>
                        <Text> Quantity: {list.quantity} </Text>
                        <Text> Price: {list.price} </Text>
                        <Text> Amount: {list.amount} </Text>
                    </View>
                }
            />
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                {headerWithBack('Customer','Receipts / Collections' )}
                <View style={styles.dataSquare}>
                    {this.itemDetails(this.state.dataInput)}
                </View>
            </SafeAreaView>
        )
    }
}