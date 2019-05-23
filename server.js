const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('request');

const questionResponse = 
{
	description: {	
		question: 'Tell me a little bit about yourself?', 
		response: 'I am a person'
	},
	tech: {	
		question: 'What excites you about technology?', 
		response: 'that its techincal'
	},
	techstack: {
		question: 'What is your preferred technology stack?', 
		response: 'how it stackble'
	},
	hobbies: {	
		question: 'What are your favorite hobbies?', 
		response: 'ones where I dont hobble'
	}
};

const postApiUrl = 'https://jsonplaceholder.typicode.com/posts';
//set up view engine

app.set('view engine', 'ejs');

//set up index route 

app.get('/', (req, res) => {
	console.log("/");
	res.render('pages/index');
})

//set up posts route

app.get('/posts', (req, res) => {
	console.log("/posts");
	request(postApiUrl, (err, response) => {
	    if (!err && response.statusCode == 200) {
	    	console.log(response.body);
	    } else {
	    	console.log(err);
	    }
	});
	res.render('pages/posts');
})

// set up about me route

app.get('/aboutme', (req, res) => {
	let query = req.query;
	let aboutmeResponse = "";
	switch(query.q) {
		case 'description':
			aboutmeResponse = "description"
			break;
		case 'tech':
			aboutmeResponse = "tech"
			break;
		case 'techstack':
			aboutmeResponse = "techstack"
			break;
		case 'hobbies':
			aboutmeResponse = "hobbies"
			break;
		default:
			aboutmeResponse = "default"
	}
	console.log(aboutmeResponse);
})

// set up catch all route

app.get('*', (req, res) => {
	res.render('pages/notfound');
	console.log("/Not Found");
})

app.listen(3000, () => console.log('app listening on port 3000!'));