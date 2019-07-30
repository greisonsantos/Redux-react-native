import React,{Component} from 'react';
import {View, Text, Button,TextInput} from 'react-native';

export default class Home extends Component{
     constructor(props){
       super(props);
       this.state={

       }

       this.login= this.login.bind(this);
       this.cadastrar= this.cadastrar.bind(this);
     }

  login(){
    this.props.navigation.navigate('Login');
  }

  cadastrar(){
    this.props.navigation.navigate('Cadastro');
  }

    render(){

        return(
            <View>
                <Button
                  title="Login"
                  onPress={this.login}
                />

                <Button
                  title="Cadastro"
                  onPress={this.cadastrar}
                /> 
            </View>
        );
    }
}