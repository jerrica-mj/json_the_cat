const {fetchBreedDescription} = require("./breedFetcher");

// let the user specify breed name as a command-line argument
const breedQuery = process.argv[2];

fetchBreedDescription(breedQuery, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});