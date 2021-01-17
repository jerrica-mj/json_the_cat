// CATS AS A SERVICE ASSIGNMENT

// Build a comand line app that makes it "easy" for users to query TheCatAPI (an HTTP API that provides JSON data about Cats) dataset from the terminal.
// Users can provide any breed name, causing our app to fetch the info from the API and pring out a short description of that breed


const request = require("request"); // require "request" since our query is a get request---not using "net"


// Refactor our previous code by moving the main "request" logic into a function named fetchBreedDescription, which will use a callback to print the results; also move the command-line argument handling to index.js
const fetchBreedDescription = function(breedName, callback) {
  // use the API endpoint/URL to search for a breed - returns [] if no query added, or no match found
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";

  request(url + breedName, (error, response, body) => {
    let description;
    if (error) {
      // pass a null description to the callback if there's an error
      description = null;
    } else if (body === "[]") {
      // pass error message and null description if inavlid/no breed given (body = [])
      error = `Sorry, no match found for "${breedName}", please revise your query and try again`;
      description = null;
    } else {
      // Else, parse the body string & get the description of the first match--could use a loop to pass descriptions of multiple matches
      description = JSON.parse(body)[0].description;
    }
    // call the callback with the error and appropriate description
    callback(error, description);
  });
};


module.exports = {fetchBreedDescription};