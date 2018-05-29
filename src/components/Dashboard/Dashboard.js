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


class Dashboard extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listInput: ds,
        }
    }    

    componentWillMount(){
        //this.props.screenProps.getUserCompany(this.props.user,this.props.selectedCompany)
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
                        <Text style={styles.dataTitle}>{this.props.selectedCompany.name}</Text>    
                        <View style={styles.dashboardSquare}>
                            <Text> Data here... </Text>
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
        token: state.Token,
        selectedCompany: state.SelectedCompany,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
//redux