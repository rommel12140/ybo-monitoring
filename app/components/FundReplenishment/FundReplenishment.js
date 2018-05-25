import React, { Component } from 'react'
import { 
    ScrollView, 
    Button,
    Text, 
    View, 
    TextInput,
    StyleSheet,
    AppRegistry,
    SafeAreaView,
  } from 'react-native'
import { header } from '../Header'
import styles from '../../Themes/Styles'
  
export default class FundReplenishment extends Component {
    constructor(props) {
        super(props);
    }    

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                {header('Fund Replenishment')}

            </SafeAreaView>
        )
    }
}