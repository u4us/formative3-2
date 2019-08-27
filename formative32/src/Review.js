import React from 'react';
import './App.css';

var serverUrl = 'http://10.2.24.60:3001/';

class Review extends React.Component{
	constructor(props){
		super(props);
	}

	handleDeleteClick = () =>{
		var {deleteReview, id} = this.props;
        deleteReview(id);
	}

	handleEditClick = () =>{
		var {setActiveView, setReviewToUpdate, id} = this.props;
        setReviewToUpdate(id);
        setActiveView('edit-review');
	}

	render(){

		var {parlour, flavour, rating, user, photo} = this.props;
		return(
			<div className="card project">
				<img className="card-img-top" src={serverUrl+photo} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{parlour}</h5>
					<p className="card-text">Flavour: {flavour}</p>
					<p className="card-text">Rating: {rating}</p>
					<p className="card-text">Author: {user}</p>
					<p>
						{/* <i className="fas fa-heart"></i> */}
						<i onClick={this.handleEditClick} className="fas fa-edit"></i>
						<i onClick={this.handleDeleteClick} className="fas fa-trash"></i>
					</p>
				</div>
			</div>
		)
	}
}

export default Review;