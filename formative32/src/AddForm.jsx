import React from 'react';

class AddForm extends React.Component{ 
    constructor(props){
        super(props);    
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        var formData = new FormData(this.form);

        var data = {
            user: formData.get('user-input'),
            parlour: formData.get('parlour-input'),
            flavour: formData.get('flavour-input'),
            rating: formData.get('rating-input'),
        };
        console.log(data);
        this.props.addReview(data);
        this.props.setActiveView('home');
    }

	render(){
		return(
            <form onSubmit={this.handleFormSubmit} ref={(el)=>{this.form=el}}>

                <div className="form-group">
                    <label htmlFor="parlour-input">Parlour Name</label>
                    <input type="text" className="form-control" name="parlour-input" id="parlour-input" placeholder="Enter franchise name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="flavour-input">Flavour</label>
                    <input type="text" className="form-control" name="flavour-input" id="flavour-input" placeholder="Enter flavour"/>
                </div>

                <div className="form-group">
                    <label htmlFor="user-input">Author</label>
                    <input type="text" className="form-control" name="user-input" id="user-input" placeholder="Enter author name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="rating-input">Type</label>
                    <select className="form-control" name="rating-input" id="rating-input">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="photo-input">Photo</label>
                    <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
                </div>

                <div className="form-group">
                    <label htmlFor="type-input">Type</label>
                    <select className="form-control" name="type-input" id="type-input">
                    <option value="1">Painting</option>
                    <option value="2">Sculpture</option>
                    <option value="3">Digital</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
		)
	}
}

export default AddForm;