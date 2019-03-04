import React, { Component } from 'react';

import './App.css';
import Header from '../src/Header';
import Main from '../src/Main';
import 'normalize-css';


class App extends Component {
  constructor(){
    super();

    this.state={
      user:{
        foto: "https://pbs.twimg.com/profile_images/525778302540070913/_3-_wx3E_400x400.png",
        email:'sanchezzz2391@gmail.com',
        onOpenText: false,
        displayName: 'JOSE SANCHEZ'

      }
    }
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Main  user={this.state.user}/>
      </div>
    );
  }
}

export default App;
