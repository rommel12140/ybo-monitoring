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
import Back from './BackButton'
import Logout from './Logout/Logout'


//HEADER CAUSES CRASH ON NAVIGATION BECAUSE OF UPDATE EVERY SCREEN
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

export const headerWithBack = (title, subtitle) => {
    if(title){
        return (
        <View style={styles.headerContainer} >
            <View>
                <Text style={styles.headerTitle}> {title} </Text>
                <Text style={styles.headerSubtitle} > {subtitle} </Text>
            </View>
            <View>
                <Back />
            </View>
        </View>
        )
    }
}