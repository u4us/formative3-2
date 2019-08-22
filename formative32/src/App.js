import React, {Component} from 'react';
import axios from 'axios'
import View from './View';
import Project from './Project';
import './App.css';

// https://github.com/u4us/formative3-2

var urlPrefix = 'http://localhost:3001/api'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView:'home',
      icecreams: [
        {
          id: 1,
          flavour: 'chocolate',
          parlour: 'maccas',
          user: 'henry',
          rating: 4,
        }
      ],
    };

  }
  setActiveView = (view) => {
    this.setState({activeView:view});
  }
  
  getIcecreams = () =>{
		axios.get(urlPrefix+'/icecreams')
		.then(res=>{
			console.log(res);
			this.setState({icecreams:res.data})
		})
  }
  
  componentDidMount(){
    this.getIcecreams();
  }

  render(){
    return (
        <div className="app">
          <View viewName="home" activeView={this.state.activeView} className="color1" >
            <div className="header "><div className="navbar"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div><h2>Rate your Ice Cream</h2><div className="navadd"><div className="addIcecream" onClick={() => this.setActiveView('add-project')} ><img src="add-icecream.png" alt="icecream" class="icecream" /></div></div></div>
            <div className="main">
              <h3>Home</h3>
              <p onClick={() => this.setActiveView('about')} >Go to about</p>
              {
                this.state.icecreams.map((icecreams)=>{
                  var icecreamProps = {
                    ...icecreams,
                    key: icecreams.id,
                  }
                  return(<Project {...icecreamProps}/>)
                })
              }
            </div>
          </View>

          <View viewName="about" activeView={this.state.activeView} className="color2" >

            <div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-times"></i></div>
            <div className="main">
              About
            </div>

          </View>
          <View viewName="login" activeView={this.state.activeView} className="color3" >

            <div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-times"></i></div>
            <div className="main">
              Login
            </div>

          </View>
          <View viewName="nav" activeView={this.state.activeView} className="color5" >

            <div className="header"><i className="fas fa-times" onClick={() => this.setActiveView('home')}></i></div>
            <div className="main">

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