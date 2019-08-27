import React from 'react';
import './App.css';

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
		return(
			<div className="card project">
				<img className="card-img-top" src="pic1.jpg" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{this.props.parlour}</h5>
					<p className="card-text">Flavour: {this.props.flavour}</p>
					<p className="card-text">Rating: {this.props.rating}</p>
					<p className="card-text">Author: {this.props.user}</p>
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