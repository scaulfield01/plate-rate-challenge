const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('request');
const path = require('path');

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

// path to public files for stylesheet reference in head 
app.use(express.static(path.join(__dirname, 'public')));

//set up view engine
app.set('view engine', 'ejs');

//set up index route 

app.get('/', (req, res) => {
	console.log("/");
	res.render('pages/index', {page:'Home'});
})

//set up posts route

app.get('/posts', (req, res) => {
	request(postApiUrl, (err, response) => {
	    if (!err && response.statusCode == 200) {
	    	let postsObjects = JSON.parse(response.body);
	    	res.render('pages/posts', {page:'Posts', posts: postsObjects});
	    } else {
	    	res.render('pages/notfound', {page:'Not Found'});
	    }
	});
})

// set up about me route

app.get('/aboutme', (req, res) => {
	let query = req.query;
	let aboutmeResponse = "";
	switch(query.q) {
		case 'description':
			aboutmeResponse = questionResponse.description;
			break;
		case 'tech':
			aboutmeResponse = questionResponse.tech;
			break;
		case 'techstack':
			aboutmeResponse = questionResponse.techstack;
			break;
		case 'hobbies':
			aboutmeResponse = questionResponse.hobbies;
			break;
		default:
			aboutmeResponse = Object.values(questionResponse);
	}
	res.json(aboutmeResponse);
})

// set up catch all route

app.get('*', (req, res) => {
	res.render('pages/notfound', {page:'Not Found'});
})

app.listen(3000, () => console.log('app listening on port 3000!'));
