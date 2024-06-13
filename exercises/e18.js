/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  // This exercise broke me 🙃

  let yearsDiscovered = [];
  // Get all years (avoid adding duplicate years)
  data.asteroids.map(function(asteroid) {
    let discoveryYear = asteroid.discoveryYear; 
    if (!yearsDiscovered.includes(discoveryYear)) {
      yearsDiscovered.push(discoveryYear);
    }
  });
  // ☝️ Here, nothing is being returned despite there being a map method, yet it does what I expect it to do: populate yearsDiscovered with all unique years. 
  // Is doing this acceptable though? I found it extremely hard finding another way without using for loops..

  // Map year to frequency of asteroids discovered ( [ { year: #, frequency: # } ] )
  let discoveryFrequencyMap = yearsDiscovered.map(year => {
      let frequency = data.asteroids.filter(function(asteroid) {
        return asteroid.discoveryYear == year;
      }).length;

      return {
        discoveryYear: year,
        frequency: frequency
      }
  });

  let mostFrequentDiscoveries = maxBy(discoveryFrequencyMap, (discovery) => discovery.frequency);
  return mostFrequentDiscoveries.discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
