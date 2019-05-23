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
})

//set up posts route

app.get('/posts', (req, res) => {
	console.log("/posts");
})

// set up about me route

app.get('/aboutme', (req, res) => {
	console.log("/aboutme");
})

// set up catch all route

app.get('*', (req, res) => {
	console.log("/Not Found");
})

app.listen(3000, () => console.log('app listening on port 3000!'));