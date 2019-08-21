var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var Icecream = require('./icecream-model');

//setup database connection
var connectionString = 'mongodb://admin:admin@cluster0-shard-00-00-ff1hv.mongodb.net:27017,cluster0-shard-00-01-ff1hv.mongodb.net:27017,cluster0-shard-00-02-ff1hv.mongodb.net:27017/icecream?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
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

//setup routes
var router = express.Router();

router.get('/icecreams', (req, res) => {

	Icecream.find()
	.then((items) => {
	    return res.json(items);
	});

})

router.get('/icecreams/:id', (req, res) => {

	Icecream.findOne({id:req.params.id})
	.then((items) => {
	    return res.json(items);
	});
})

router.post('/icecreams', (req, res) => {

	var icecream = new Icecream();
	icecream.id = Date.now();
	
	var data = req.body;
	Object.assign(icecream,data);
	
	icecream.save()
	.then((items) => {
	  	return res.json(items);
	});
});

router.delete('/icecreams/:id', (req, res) => {

	Icecream.deleteOne({ id: req.params.id })
	.then(() => {
		return res.json('deleted');
	});
});

router.put('/icecreams/:id', (req, res) => {

	Icecream.findOne({id:req.params.id})
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