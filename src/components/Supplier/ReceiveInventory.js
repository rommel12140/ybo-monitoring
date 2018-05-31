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
import { Icon, List, ListItem } from 'react-native-elements'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/actions';
import { connect } from 'react-redux';
import { headerWithBack } from '../Header'
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';


class ReadReceiveInventory extends Component {
    constructor(props) {
        super(props);
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: [],
            data: []
        }
    }    

    componentWillMount(){
        this.makeRemoteRequest()
    }

    makeRemoteRequest = () => {
        this.props.screenProps.getReadReceiveInventory(this.props.token,this.props.selectedCompany)
        .then(() => {
            this.setState({
            listInput: this.props.receiveInventoryList
            })
            console.log(this.state.listInput)
        })
    }


    onPress(data){
        this.props.navigation.navigate('ReceiveInventoryDetails', {data: data})
    }

    renderItem = (lists) => {
        let list = lists.item
        console.log(list)
        return(
            <TouchableHighlight onPress={() => {this.onPress(list)}} >
                <ListItem
                    key={list.id} 
                    title={<Text style={styles.titleCart}>{list.receive_no}</Text>}
                    hideChevron={true}
                    subtitle={
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text>Date:</Text>
                                <Text>Reference No.:</Text>
                                <Text>Total:</Text>
                            </View>
                            <View style={{paddingHorizontal: 10}}>
                                <Text>{list.date} </Text>
                                <Text>{list.refno} </Text>
                                <Text>{list.total} </Text>
                            </View>
                        </View>
                    }
                />
            </TouchableHighlight>
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {headerWithBack('Supplier', 'Receive Inventory')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                            <View style={styles.dataSquare}>
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

function mapStateToProps(state) {
	return {
        user: state.User,
        token: state.Token,
        selectedCompany: state.SelectedCompany,
        receiveInventoryList: state.ReadReceiveInventoryList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadReceiveInventory);