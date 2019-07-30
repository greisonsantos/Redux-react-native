import React,{Component} from 'react';
import {View, Text, Button,TextInput, StyleSheet} from 'react-native';

import {connect} from 'react-redux';


export  class Login extends Component{
  constructor(props){
      super(props);
      this.state={
          
      }
  }
    
    logar(){
        
    }

    render(){

        return(
            <View>
                <Text> 
                    tela  de Login
                </Text>

                <Text> Email</Text>
                <TextInput style={styles.input}
                 value= {this.props.email}
                />
                
                <Text> Senha</Text>
                <TextInput style={styles.input}
                 value= {this.props.senha}
                />


                <Button title="Logar"
                 onPress={()=> {this.logar}}
                /> 
        
            </View>
        );
    }
}


styles= StyleSheet.create({
    input:{
        height:40,
        padding:5,
        backgroundColor: '#CCCCCC'
    }
});

//pega informações do store e tranforma em props
const mapStateToProps= (state)=>{
  
     return {
       email: state.auth.email,
       senha: state.auth.senha
     };
};

const LoginConnect= connect(mapStateToProps)(Login);
export default LoginConnect;