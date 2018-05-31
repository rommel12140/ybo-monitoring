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
import { header } from '../Header'
import styles from '../../Themes/Styles'


export default class PurchaseOrderScreen extends Component {
    constructor(props) {
        super(props);
    }    

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                    {header('Supplier')}
                    <ScrollView contentContainerStyle={{paddingRight: 10}}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('PurchaseOrder')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='truck'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                             <Text style={styles.dataTitle}> Purchase Order </Text>
                            </View>
                        </TouchableHighlight>
                        <Divider />
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ReceiveInventory')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='database'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                                <Text style={styles.dataTitle}> Receive Inventory </Text>
                            </View>
                        </TouchableHighlight>
                        <Divider />
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Payments')}>
                            <View style={styles.screenSquare}>
                                <Icon 
                                    name='credit-card'
                                    size= {50}
                                    color= 'white' 
                                    type='font-awesome' 
                                    title="Drawer" 
                                    />
                                <Text style={styles.dataTitle}> Payments </Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}
