import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';


import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './src/Reducers';

//recebe como parametros os reducers
let store= createStore(Reducers);



const Navegador = createStackNavigator({

  Home:{
      screen:Home,
    },
    Cadastro:{
      screen:Cadastro
    },
    Login:{
      screen:Login
    }
});

const AppContainer= createAppContainer(Navegador);

export default class App extends Component{
  render(){

    // criando uma bolha da aplicação
    return(
       <Provider  store={store}>
          <AppContainer />   
       </Provider>
    );
  }
}


