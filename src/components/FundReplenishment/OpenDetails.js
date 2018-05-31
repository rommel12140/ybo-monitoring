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
import { Icon, List, ListItem, Button } from 'react-native-elements'
import { headerWithBack } from '../Header'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/actions';
import { connect } from 'react-redux';
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';


class OpenDetails extends Component {
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
        const body = {
            funds_id: data.fund_id,
            replenishment_id: data.id
          }
        this.props.screenProps.getFundsDetail(this.props.token,body)
        .then(() => this.setState({
            listInput: this.state.listInput.cloneWithRows(this.props.fundsDetail)
        }))
    }

    itemDetails(data){
        return(
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text>Date: {data.date} </Text>
                        <Text>Reference No.: {data.refno} </Text>
                    </View>
                    {this.acceptButton()}
                </View>
                <List>
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}> Account </Text>
                        <Text style={{fontWeight:'bold', fontSize:20}}> Amount </Text>
                    </View>
                    <ListView  dataSource={this.state.listInput}
                                renderRow={this.renderRow.bind(this)}
                    />
                </List>
            </View>
        )
    }

    acceptButton(){
        const {params} = this.props.navigation.state;
        const isPending = params ? params.pending : null;

        if(isPending===true){
            return(
                <View>
                    <Button title='Accept' onPress={() => alert('accepted')} />
                </View>
            )
        }
    }
    /* <ListItem
                key={list.id} 
                hideChevron={true}
                containerStyle={{borderBottomWidth: 0}}
                subtitle={
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{list.description ? list.description: 'No Account'} </Text>
                        <Text>{list.amount} </Text>
                    </View>
                }
            /> */
    renderRow(list, sectionId, rowId, hightlightRow){
        console.log(list)
        return(
            <Text> j </Text>
            
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                {headerWithBack('Fund Replenishment', 'Purchase Order')}
                <View style={styles.dataSquare}>
                    {this.itemDetails(this.state.dataInput)}
                </View>
            </SafeAreaView>
        )
    }
}

//redux
function mapStateToProps(state) {
	return {
        user: state.User,
        fundsDetail: state.FundsDetail,
        token: state.Token,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenDetails);
//redux