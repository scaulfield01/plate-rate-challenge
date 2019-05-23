# plate-rate-challenge
Coding Challenge for PlateRate


1. Capable of responding to HTTP GET requests

1. Should have an endpoint(/posts) that dynamically makes a request to (https://jsonplaceholder.typicode.com/posts) and renders an EJS view using the data returned. Only the title and body of all the posts should be displayed in an centered and ordered HTML list on the DOM. The titles should have a font size of 16px and color: #3cb371. The body should have a font size of 12px color: #4A4A4A.

1. Should have an individual endpoint(/aboutme) that respond data in JSON format for the questions below. The endpoint should respond the appropriate data based on query parameter q given from below. If no parameter is given it should return all questions and answers. The JSON response should have question and answer.

		* Parameter: description. Returns response for question: Tell me a little bit about yourself?
		* Parameter: tech. Returns response for question: What excites you about technology? 
		*  Parameter: techstack . Returns response for question: What is your preferred technology stack?
		* Parameter: hobbies. Returns response for question: What are your favorite hobbies?

1. Any request to an endpoint that is not defined should ‘Not Found’ as plain text