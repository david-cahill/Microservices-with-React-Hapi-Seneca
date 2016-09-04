# Microservices with React, Hapi & Seneca
This repo demonstrates how you would setup a React application that communicates with multiple node js microservices.

# What is this?
There are currently two microservices in this application: users and products.
When you run npm start, the app sends off a "request for data" from each microservice by referencing their name and the relevant command.
Each microservice then replies with some test data.

# Start it up

- npm install
- npm start
- Check server-side console to see each microservice's response.
- Check Chrome network tab to see REST API request to '/api/0.1/products'.
- Check http://localhost:3000 to see response from product's microservice.

# To do

- [x] Add a simple React application.
- [x] Make API requests to each microservice from the React app.
- [x] Render some data in the UI based on the response from the API.
- [x] Add some Hapi routes.
- [x] Add some tests.

# Main stack used

- React with Redux
- Hapi
- Seneca
- Babel
- Node.js
- Superagent
- Webpack

(See package.json for more)

# Any questions/suggestions?
Please feel free to send me an email/create an issue or create a pull request with your suggestion.

