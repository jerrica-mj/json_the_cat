// Mocha and Chai Testing
// for breedFetcher.js (fetchBreedDescription function)

// can run from json_the_cat/ with "npx mocha" or "npm test"
// "npx" is a fancier, more modern way of running locally installed packages



const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done(); // call done() for async tests
    });
  });

  it("returns a 'no match found' message for an invalid/non-existent breed, via callback", (done) => {
    fetchBreedDescription("", (err, desc) => {
      // we expect an error for this scenario
      assert.notEqual(err, null);

      // we expect desc to be null
      assert.equal(desc, null);

      done();
    });
  });
});