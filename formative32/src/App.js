import React, {Component} from 'react';

import View from './View';
import './App.css';


class  App extends Component {

  constructor(props){
    super(props)

    this.state = {
      activeView:'home'

    };

  }
  setActiveView = (view) => {
    this.setState({activeView:view});
  }
  

  



  render(){

  
    return (
        <div className="app">
      
          <View viewName="home" activeView={this.state.activeView} className="color1" >

          <div className="header "><div className="navbar"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div><h2>Rate your Ice Cream</h2><div className="navadd"><div className="addIcecream" onClick={() => this.setActiveView('add-project')} ><img src="add-icecream.png" alt="icecream" class="icecream" /></div></div></div>
					<div className="main">
              <h3>Home</h3>
              <p onClick={() => this.setActiveView('about')} >Go to about</p>
            </div>

          </View>

          <View viewName="about" activeView={this.state.activeView} className="color2" >

            <div class="header"><i onClick={() => this.setActiveView('nav')} class="fas fa-times"></i></div>
            <div class="main">
              About
            </div>

          </View>
          <View viewName="login" activeView={this.state.activeView} className="color3" >

            <div class="header"><i onClick={() => this.setActiveView('nav')} class="fas fa-times"></i></div>
            <div class="main">
              Login
            </div>

          </View>
          <View viewName="nav" activeView={this.state.activeView} className="color5" >

            <div class="header"><i class="fas fa-times" onClick={() => this.setActiveView('home')}></i></div>
            <div class="main">

              <ul className="menu">
                <li><a onClick={() => this.setActiveView('home')} className="color1" href="#">Home</a></li>
                <li><a onClick={() => this.setActiveView('about')} className="color2" href="#">About</a></li>
                <li><a onClick={() => this.setActiveView('login')} className="color3" href="#">Login</a></li>
              </ul>

            </div>

          </View>

        </div>
    );
  }



}

export default App;
