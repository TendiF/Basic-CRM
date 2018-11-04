import React from 'react';
import { Alert, Button, TextInput, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import {RkButton, RkStyleSheet, RkText, RkTheme, RkTextInput} from 'react-native-ui-kitten';


RkTheme.setType('RkTextInput', 'frame', {
    input: {
      backgroundColor: 'white',
      marginLeft: 0,
      marginHorizontal: 0,
      borderRadius: 5
    },
    color: 'gray',
    backgroundColor: 'gray',
    borderRadius: 10,
    container: {
      paddingHorizontal: 20
    }
  });

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : null,
            password : null
        };
    }

    
    render() {

    let authProcess = (username, password) => {
        if(username == null && password == null){
            this.props.navigation.navigate('Dashboard');
        }else{
            Alert.alert(
                'Warning',
                'Invalid Usename or Password'
            )
        }
    }

    return (
        <Grid>
            <Row size={1}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Login Screen</Text>
                </View>
            </Row>
            <Row size={4}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <RkTextInput 
                        rkType='rounded'
                        onChangeText={(username) =>{this.setState({username})}}
                        placeholder='Username' />
                    <RkTextInput 
                        rkType='rounded'
                        placeholder='Password'
                        onChangeText={(password) =>{this.setState({password})}}
                        secureTextEntry />
                    <Button
                        title="Login"
                        onPress={()=>{ authProcess(this.state.username, this.state.password) }}
                    />
                </View>            
            </Row>
        </Grid>
    );
  }
}