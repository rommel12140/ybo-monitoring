import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    AppRegistry,
    SafeAreaView,
  } from 'react-native';
import styles from '../Themes/Styles';
import Drawer from './ToggleDrawer'
import Logout from './Logout/Logout'

export const header = (title) => {
    if(title){
        return (
        <View style={styles.headerContainer} >
            <View>
                <Text style={styles.headerTitle}> {title} </Text>
                <Text style={styles.headerSubtitle} > YBO Monitoring </Text>
            </View>
            <View>
                <Drawer />
            </View>
        </View>
        )
    }
}