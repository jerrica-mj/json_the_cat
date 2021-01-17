// CATS AS A SERVICE ASSIGNMENT

// Build a comand line app that makes it "easy" for users to query TheCatAPI (an HTTP API that provides JSON data about Cats) dataset from the terminal.
// Users can provide any breed name, causing our app to fetch the info from the API and pring out a short description of that breed


const request = require("request"); // require "request" since our query is a get request---not using "net"


// use the API endpoint/URL to search for a breed - returns [] if no query added, or no match found
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
// let the user specify breed name as a command-line argument
const breedQuery = process.argv[2];

request(url + breedQuery, (error, response, body) => {
  // Print error info if one occurs, and exit the process
  if (error) {
    console.log("error:", error);
    process.exit();
  }
  // Parse the body string to convert to an object
  const data = JSON.parse(body);
  // Output appropriate message if requested breed not found, or no input received, and exit process
  if (body === "[]") {
    console.log(`Sorry, no match found for "${breedQuery}", please try again with revised input`);
    process.exit();
  }
  // Print the description of the first match--could use an array loop to handle multiple matches
  console.log(data[0].description);
});