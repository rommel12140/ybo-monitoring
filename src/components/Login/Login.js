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
//redux import
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/actions';
import { connect } from 'react-redux';
  
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          //TODO: CHANGE THIS BACK
          username: 'aldesabido@gmail.com',
          password: '123',
          loading : false,
        }
      }

    //Everytime the login component is called, resetAuthToken from action recipes is called
    // to reset redux
    componentWillMount(){
        this.setState({loading:false})
        this.props.resetAuthToken()
    }

    //to notify the user that loading took too long
    _onLoadingLimit(){
        if(this.state.loading===true){
            setTimeout(() => {
                alert('There seems to be a problem with your connection')
            }, 20000)
        }
    }

    //upon submission, loading will start and will call getAuthToken
    //from action recipes and passes the state
    onSubmit(){
        this.setState({loading:true})
        this.props.getAuthToken(this.state)
        this._onLoadingLimit()
    }

    //after receiving props from redux, this function is called and will control
    //wether the user is accepted or not
    componentWillReceiveProps(nextProps){
        
        if(nextProps.accept && !nextProps.fail){
            this.props.navigation.navigate('Company_List')
            this.setState({loading : false});
        }else{
        this.setState({loading : false});
        }
    }

    //every letter entered on username, the state is changed
    onChangeUsername(value){
        this.setState({
            username:value
        });
    }

    //every letter entered on password, the state is changed
    onChangePassword(value){
        this.setState({
                password:value
        });
    }

    //SafeAreaView to fit screen on phone view
    //KeyboardAwareScroll view to have movable contents
    render(){
        return (
            <SafeAreaView style={styles.mainContainer}>
                <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer}>
                    <View style={styles.loginSquare}>
                        <View style={styles.loginHeader}>
                            <Text style={styles.sectionTitleLogin}>  Login </Text>
                        </View>
                        <Text style={styles.sectionLogin}>Username</Text>
                        <TextInput 
                            placeholder='username/password'
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                            style={styles.textInput}
                            value={this.state.username}
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

//use redux to pass AuthAccept and AuthCheck to props
//use the redux props to check if the user is accepted
//redux
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
//redux