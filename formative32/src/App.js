import React, {Component} from 'react';
import axios from 'axios'
import View from './View';
import Review from './Review';
import AddForm from './AddForm';
import EditForm from './EditForm';
import './App.css';

// https://github.com/u4us/formative3-2
// add/edit w/modals,
// tabs for sort by chocolate

// var urlPrefix = 'http://localhost:3001/api'
var urlPrefix = 'http://10.2.24.60:3001/api'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeView:'home',
      reviews: [],
      reviewToUpdate: null,
    };
  }

  uploadFile = (formData) =>{
		var setting = { headers: {'Content-Type': 'multipart/form-data' }};
		return axios.post(urlPrefix+'/upload', formData, setting)
	}

  setActiveView = (view) => {
    this.setState({activeView:view});
  }
  
  getReviews = () =>{
		axios.get(urlPrefix+'/reviews')
		.then(res=>{
			console.log(res);
			this.setState({reviews:res.data})
		})
  }

  addReview = (data) =>{
		axios.post(urlPrefix+'/reviews',data)
		.then(res=>{
			this.getReviews();
		})
  }
  
  deleteReview = (id) =>{
		axios.delete(urlPrefix+'/reviews/'+id)
		.then(res=>{
			this.getReviews();
		})
  }
  
  updateReview = (id, data) =>{
		axios.put(urlPrefix+'/reviews/'+id,data)
		.then(res=>{
			this.getReviews();
		})
  }
  
  setReviewToUpdate = (id) =>{
		var review = this.state.reviews.find((review)=>{
			return review.id === id;
		});
		this.setState({reviewToUpdate: review});
	}
  
  componentDidMount(){
    this.getReviews();
  }

  render(){
    return (
        <div className="app">

          <View viewName="home" activeView={this.state.activeView} className="color1" >
            <div className="header">
              {/* <div className="navbar">
              <i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i>
              </div> */}
            <img className="icecream"src="Icecreamer.png"></img>
            <div className="navadd"><div className="addIcecream" onClick={() => this.setActiveView('add-review')} ><img src="add-icecream.png" alt="icecream" class="icecream" /></div></div></div>
            <div className="main">
            <div className="drips"><img src="chocolate-drops.png" alt=""/></div>
              {/* <p onClick={() => this.setActiveView('about')} ></p> */}
              {
                this.state.reviews.map((reviews)=>{
                  var reviewProps = {
                    ...reviews,
                    key: reviews.id,
                    deleteReview: this.deleteReview,
                    setActiveView: this.setActiveView,
                    setReviewToUpdate: this.setReviewToUpdate,

                  }
                  return(<Review {...reviewProps}/>)
                })
              }
            </div>
          </View>

          <View viewName="add-review" activeView={this.state.activeView} className="color2" >
            <div className="header"><i onClick={() => this.setActiveView('home')} className="fas fa-times"></i></div>
            <div className="main">
              <h3>Add Review</h3>
              <AddForm uploadFile={this.uploadFile} addReview={this.addReview} setActiveView={this.setActiveView}/>
            </div>
          </View>

          <View viewName="edit-review" activeView={this.state.activeView} className="color3" >
            <div className="header"><i onClick={() => this.setActiveView('home')} className="fas fa-times"></i></div>
            <div className="main">
            <h3>Edit Review</h3>
              <EditForm {...this.state.reviewToUpdate} updateReview={this.updateReview} setActiveView={this.setActiveView}/>
            </div>
          </View>

          <View viewName="nav" activeView={this.state.activeView} className="color4" >
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