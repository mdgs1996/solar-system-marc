/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = data.asteroids.reduce((counts, asteroid) => {
    const discoveryYear = asteroid.discoveryYear;
    counts[discoveryYear] = ( counts[discoveryYear] || 0 ) + 1; // counts is the map of years to frequency. It is 0 if the value can't be found for the given year in the array.
    return counts;
  }, {}); // Make the accumulator's starting value as an empty object. Returning counts for a given year adds a new object to the array.

  let maxYear = null;
  let maxCount = 0;
  for (const year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxCount = yearCounts[year];
      maxYear = parseInt(year);
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
