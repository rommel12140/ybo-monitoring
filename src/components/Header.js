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


//HEADER MAY CAUSE THE PROGRAM TO CRASH ON NAVIGATION BECAUSE OF UPDATE EVERY SCREEN
//header functions to be passed on every component
//requires title or title and subtitle
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