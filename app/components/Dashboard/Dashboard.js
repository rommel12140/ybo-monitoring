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

const funcDataCreator = (data) => {
    var string = data

    return string
}

var string = funcDataCreator('something')


var data = [{
    id: 0,
    name: 'First',
    data: string
},{
    id: 1,
    name: 'Second',
    data: string
},{
    id: 2,
    name: 'Third',
    data: string
},{
    id: 3,
    name: 'Fourth',
    data: string
}]

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: ds,
            dataNames: ['data1','data2','data3','data4']
        }
    }    

    componentDidMount(){
        this.setState({
            listInput: this.state.listInput.cloneWithRows(data)
        })
    }

    renderRow(list, sectionId, rowId, hightlightRow){
        return(
            <ListItem
                key={list.id} 
                title={<Text style={styles.titleCart}>{list.name}</Text>}
                hideChevron={true}
                subtitle={
                    <Text> {list.data} </Text>
                }
            />
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header('Dashboard')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                        <Text style={styles.dataTitle}>{this.state.dataNames[0]}</Text>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('DashboardDataView', {list: this.state.listInput, title: this.state.dataNames[0]})}} >
                            <View style={styles.dataSquare}>
                                <List>
                                    <ListView dataSource={this.state.listInput} 
                                                renderRow={this.renderRow.bind(this)}/>
                                </List>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.dataTitle}>{this.state.dataNames[1]}</Text>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('DashboardDataView', {list: this.state.listInput, title: this.state.dataNames[1]})}} >
                            <View style={styles.dataSquare}>
                                <List>
                                    <ListView dataSource={this.state.listInput} 
                                                renderRow={this.renderRow.bind(this)}/>
                                </List>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.dataTitle}>{this.state.dataNames[2]}</Text>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('DashboardDataView', {list: this.state.listInput, title: this.state.dataNames[2]})}} >
                            <View style={styles.dataSquare}>
                                <List>
                                    <ListView dataSource={this.state.listInput} 
                                                renderRow={this.renderRow.bind(this)}/>
                                </List>
                            </View>
                        </TouchableHighlight>
                        
                        <Text style={styles.dataTitle}>{this.state.dataNames[3]}</Text> 
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('DashboardDataView', {list: this.state.listInput, title: this.state.dataNames[3]})}} >
                        <View style={styles.dataSquare}>
                            <List>
                                <ListView dataSource={this.state.listInput} 
                                            renderRow={this.renderRow.bind(this)}/>
                            </List>
                        </View>
                        </TouchableHighlight>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);