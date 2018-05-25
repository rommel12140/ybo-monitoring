import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View, 
    TextInput,
    Platform,
    StyleSheet,
    AppRegistry,
    SafeAreaView,
  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';
import styles from '../../Themes/Styles';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
  
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          //TODO: CHANGE THIS BACK
          email: 'aldesabido@gmail.com',
          password: '123',
          loading : false,
        }
      }

    componentWillMount(){
        this.setState({loading:false})
        this.props.resetAuthToken()
    }

    onSubmit(){
        this.setState({loading:true})
        this.props.getAuthToken(this.state)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.accept && !nextProps.fail){
              this.props.navigation.navigate('Dashboard')
              this.setState({loading : false});
        }else{
        this.setState({loading : false});
        }
    }

    onChangeUsername(value){
        this.setState({
            email:value
        });
    }

    onChangePassword(value){
        this.setState({
                password:value
        });
    }

    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer}>
                    <View style={styles.loginSquare}>
                        <View style={styles.loginHeader}>
                            <Text style={styles.sectionTitleLogin}>  Login </Text>
                        </View>
                        <Text style={styles.sectionLogin}>Email</Text>
                        <TextInput 
                            placeholder='email'
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                            style={styles.textInput}
                            value={this.state.email}
                            onChangeText={(value) => this.onChangeUsername(value)}
                            />
                        <Text style={styles.sectionLogin}>Password</Text>
                        <TextInput 
                            placeholder='password'
                            style={styles.textInput}
                            keyboardAppearance='dark'
                            secureTextEntry = {true}
                            value={this.state.password}
                            onChangeText={(value) => this.onChangePassword(value)}
                        />
                        <Button title='Login'
                            loading={this.state.loading}
                            disabled={this.state.loading}
                            buttonStyle={styles.loginButton}
                            onPress={this.onSubmit.bind(this)}
                            />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
	return {
    accept : state.AuthAccept,
    fail : state.AuthCheck,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);