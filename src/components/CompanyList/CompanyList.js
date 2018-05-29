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
import { ActionCreators } from '../../redux/actions';
import { connect } from 'react-redux';
import { header } from '../Header'
import styles from '../../Themes/Styles'
import { setTimeout } from 'core-js';


class CompanyList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: ds,
        }
    }    

    //before the module mounts, it calls getCompanyList
    // in action recipes to get all Company List 
    //of the user then cloneWith rows to the datasource
    componentDidMount(){
        this.props.getCompanyList(this.props.token,this.props.user)
        .then(() => this.setState({
            listInput: this.state.listInput.cloneWithRows(this.props.companylist)
        }))

    }

    //after press, call selectCompany then navigate
    //to dashboard
    onPress(id){
        this.props.selectCompany(this.props.token,id)
        .then(() => this.props.navigation.navigate('Dashboard'))
    }

    renderRow(list, sectionId, rowId, hightlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(list.id)}} >
                <ListItem
                    key={list.id} 
                    title={<Text>{list.name}</Text>}
                    hideChevron={true}
                />
            </TouchableHighlight>
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header()}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                        <Text style={styles.dataTitle}>Companies</Text>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Dashboard', {list: this.state.listInput})}} >
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

//redux
//get user, token, company list stored on redux
function mapStateToProps(state) {
	return {
        user: state.User,
        token: state.Token,
        companylist: state.CompanyList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
//redux