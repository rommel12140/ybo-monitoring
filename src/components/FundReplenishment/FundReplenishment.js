import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    View, 
    TextInput,
    StyleSheet,
    AppRegistry,
    SafeAreaView,
    TouchableHighlight,
  } from 'react-native'
import { Icon, List, ListItem, Button, Divider } from 'react-native-elements'
//import header function to be used
import { header } from '../Header'
import styles from '../../Themes/Styles'
  
export default class FundReplenishment extends Component {
    constructor(props) {
        super(props);
    }    

    //render navigation of screens from stack
    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header('Fund Replenishment')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ReadPurchaseOrder')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='truck'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                             <Text style={styles.dataTitle}> Read Purchase Order </Text>
                            </View>
                        </TouchableHighlight>
                        <Divider />
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ReadReceiveInventory')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='database'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                                <Text style={styles.dataTitle}> Read Receive Inventory </Text>
                            </View>
                        </TouchableHighlight>
                        <Divider />
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ReadPayBills')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='credit-card'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                                <Text style={styles.dataTitle}> Read Pay Bills </Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}