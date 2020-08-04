import React from 'react';
import {Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and.sign-up.component';
import Header from './components/header/header.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
//import { render } from 'node-sass';


// hereda toda las funciones y propiedades de REact Component
class App extends React.Component{

  // siempre debe tener un constructor
  // lo primero que se ejecuta 
  // willmount esta deprecado
  constructor(){
    super();

    this.state={
      currentUser : null
    };
  }


unsubscribeFromAuth = null;

//ciclo de vida logia que se ejcuta 
//despues de montar el componente
componentDiMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
    if (userAuth){
      const userRef = await createUserProfileDocument(userAuth);
     
      //
      userRef.onSnapshot(snapShot => {
        this.setState ({
          currentUser : {
            id : snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state);
      });
    }
    // current user tenga la estrucutra de intefferaz de userauth
    this.setState({currentUser : userAuth});
  });
  
}

// limpiar ciclo de vida del componente
// se desmonta el componente 
componentWillUnmount(){
  // metodo de firebase 
  this.unsubscribeFromAuth() ;
}
  render() {
    return(
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path = '/shop' component={ShopPage} />
          <Route path = '/signin' component={SignInAndSignUpPage}/>
        </Switch>

      </div>

    );
  }
}

export default App;
