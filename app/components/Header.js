import React, { Component } from 'react';
import { 
    ScrollView, 
    Text, 
    View, 
    TextInput,
    StyleSheet,
    AppRegistry,
    SafeAreaView,
  } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../Themes/Styles';
import Drawer from './ToggleDrawer'
import Logout from './Logout/Logout'

export const header = (title) => {
    return (
    <View style={styles.headerContainer} >
        <View>
            <Text style={styles.headerTitle}> {title} </Text>
            <Text style={styles.headerSubtitle} > Yahshua Booking Orders </Text>
        </View>
        <View>
            <Drawer />
        </View>
    </View>
    )
}