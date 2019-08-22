import React from 'react';
import './App.css';

class Project extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="card project">
				<img className="card-img-top" src="pic1.jpg" alt="Card image cap" />
				<div className="card-body">
				<h5 className="card-title">{this.props.parlour}</h5>
				<p className="card-text">{this.props.flavour} flavour, rating: {this.props.rating}</p>
				<p className="card-text">{this.props.user}</p>
				<p>
					<i className="fas fa-heart"></i>
					<i className="fas fa-edit"></i>
					<i className="fas fa-trash"></i>
				</p>
				</div>
			</div>
		)
	}
}

export default Project;