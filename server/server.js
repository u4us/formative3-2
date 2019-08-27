var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var Review = require('./review-model');
var fileUpload = require('express-fileupload');


//setup database connection
var connectionString = 'mongodb://admin:admin@cluster0-shard-00-00-ff1hv.mongodb.net:27017,cluster0-shard-00-01-ff1hv.mongodb.net:27017,cluster0-shard-00-02-ff1hv.mongodb.net:27017/review?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var  db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));


//setup express server
var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));
app.use(express.static('public'));
app.use((fileUpload()));

//setup routes
var router = express.Router();

router.post('/upload',(req,res)=>{
	var files = Object.values(req.files);
	var uploadedFile = files[0];
	console.log(uploadedFile);
	var newName = Date.now()+uploadedFile.name;
	uploadedFile.mv('public/'+newName, function(){
		res.send(newName);
	});
	return res.json(files);
});

router.get('/reviews', (req, res) => {

	Review.find()
	.then((items) => {
	    return res.json(items);
	});

})

router.get('/reviews/:id', (req, res) => {

	Review.findOne({id:req.params.id})
	.then((items) => {
	    return res.json(items);
	});
})

router.post('/reviews', (req, res) => {

	var review = new Review();
	review.id = Date.now();
	
	var data = req.body;
	Object.assign(review,data);
	
	review.save()
	.then((items) => {
	  	return res.json(items);
	});
});

router.delete('/reviews/:id', (req, res) => {

	Review.deleteOne({ id: req.params.id })
	.then(() => {
		return res.json('deleted');
	});
});

router.put('/reviews/:id', (req, res) => {

	Review.findOne({id:req.params.id})
	.then((items) => {
		var data = req.body;
		Object.assign(items,data);
		return items.save()	
	})
	.then((items) => {
		return res.json(items);
	});	

});

app.use('/api', router);

// launch our backend into a port
const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));