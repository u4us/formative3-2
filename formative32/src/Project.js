import React from 'react';
import logo from './logo.svg';
import './App.css';

// https://github.com/u4us/formative3-2


class Project extends React.Component{
	render(){
		return(
			<div className="card project">
				<img className="card-img-top" src="pic1.jpg" alt="Card image cap" />
				<div className="card-body">
				<h5 className="card-title">Review1</h5>
				<p className="card-text">blahblahjuhee</p>
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
