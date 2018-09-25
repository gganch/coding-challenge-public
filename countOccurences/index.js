module.exports = function countOccurences(tree) {
  const root = JSON.parse(tree);
  let countDict = {};

  // Made a recursive function that goes through the nested object and
  // update the count for found leaves
  function accessObj(obj) {
    for (let key of Object.keys(obj)) {
      let value = obj[key];
      if (typeof value === 'object') {
        accessObj(value);
      } else {
        if (countDict.hasOwnProperty(key)) {
          countDict[key] += value;
        } else {
          countDict[key] = value;
        }
      }
    }
  }

  // Call on the root
  accessObj(root);

  // Finding the max
  const max = Math.max(...Object.values(countDict));

  // Finding the keys for which count === max
  const keys = Object.keys(countDict)
    .filter((key) => countDict[key] === max);

  return [max, keys];
};


// Possible edge cases not tested:
// - Empty object
// - Empty json string
// - Malformed input json (e.g. json containing other types of data like arrays)
