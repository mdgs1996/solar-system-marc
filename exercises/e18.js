/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  // discoveryArr = [ {discoveryYear, discoveryCount} ]
  // cb = discoveryCount
  // 1. Map the given data to represent the discoveryYear.
  // 2. For each element in the new array, filter the asteroids based on selected discovery year and record the discoveryCount.
  // 3. Map the discoveryCount to the appropriate discoveryYear.
  // 4. run maxBy(discoveryArr, discovered.count)

  function Discovery(discoveryYear, frequency) {
    this.discoveryYear = discoveryYear;
    this.frequency = frequency;
  }

  let yearsDiscovered = [];
  let discoveryFrequencyMap = [];
    
  //Get all years
  yearsDiscovered = data.asteroids.map(function(asteroid) {
    return asteroid.discoveryYear;
  });
  console.log(`Years Discovered: ${yearsDiscovered}`)

  //Dedupe
  yearsDiscovered = yearsDiscovered.map((year) => {
      console.log(`Year: ${year}`)
      
      let frequency = data.asteroids.filter(function(asteroid) {
        return asteroid.discoveryYear == year;
      }).length;

      
      let discovery = new Discovery(year, frequency);
      // console.log(`Discovered Asteroids for year ${discovery.discoveryYear}: ${discovery.frequency}`)

      if ( !discoveryFrequencyMap.includes(year) ) {
        discoveryFrequencyMap.push(new Discovery(year, frequency));
        
        console.log(discoveryFrequencyMap.length)
      }
      
    });

  // for (const discovery of discoveryFrequencyMap) {
  //   console.log (`Discovered Asteroids for year ${discovery.discoveryYear}: ${discovery.frequency}`);
  // }
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
