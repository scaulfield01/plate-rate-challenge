# plate-rate-challenge
Coding Challenge for PlateRate


1. Capable of responding to HTTP GET requests

2. Should have an endpoint(/posts) that dynamically makes a request to (https://jsonplaceholder.typicode.com/posts) and renders an EJS view using the data returned. Only the title and body of all the posts should be displayed in an centered and ordered HTML list on the DOM. The titles should have a font size of 16px and color: #3cb371. The body should have a font size of 12px color: #4A4A4A.

3. Should have an individual endpoint(/aboutme) that respond data in JSON format for the questions below. The endpoint should respond the appropriate data based on query parameter q given from below. If no parameter is given it should return all questions and answers. The JSON response should have question and answer.

		* Parameter: description. Returns response for question: Tell me a little bit about yourself?
		* Parameter: tech. Returns response for question: What excites you about technology? 
		* Parameter: techstack . Returns response for question: What is your preferred technology stack?
		* Parameter: hobbies. Returns response for question: What are your favorite hobbies?

4. Any request to an endpoint that is not defined should ‘Not Found’ as plain text


## To get running 

1. open terminal and navigate to a directory where you would like to test, example your desktop.
2. ``` git clone https://github.com/scaulfield01/plate-rate-challenge.git on to desktop ``` 
3. move into folder ``` cd into the plate-rate-challenge folder ```.
4. install packages using the command ``` npm install ```.
5. start server using the command ``` node server ```.
6. Navigate to **http://localhost:3000/**.
7. To view posts either click on **"Check out Posts"** on the home page or enter **http://localhost:3000/posts**.
8. To view aboutme with out parameters click **"See about me JSON"** or enter ``` curl http://localhost:3000/aboutme ```
9. To view the JSON parameters at work enter **http://localhost:3000/aboutme?q=description** into the browser with the desired q value in this case "description" or ``` curl http://localhost:3000/aboutme?q=description ``` following the same format.
10. To view the Not Found page simply enter a route that isnt there example **http://localhost:3000/notsomethingyouhave**



