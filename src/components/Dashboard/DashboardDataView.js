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
import { header } from '../Header'
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';

export default class DashboardDataView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: ds
        }
    }    

    componentDidMount(){
        const {params} = this.props.navigation.state;
        const list = params ? params.list : null;
        console.log(list)
        this.setState({
            listInput: list
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
        const {params} = this.props.navigation.state;
        let title = params ? params.title : null;
        return (
            <SafeAreaView style={styles.mainContainer}>
                {header('Dashboard')}
                <Text style={styles.dataTitle}>{title}</Text>
                <View style={styles.dataSquare}>
                    <List>
                        <ListView dataSource={this.state.listInput} 
                                    renderRow={this.renderRow.bind(this)}/>
                    </List>
                </View>
            </SafeAreaView>
        )
    }
}