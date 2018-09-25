module.exports = function countOccurences(tree) {
  const node = JSON.parse(tree);
  let newArr = [];
  let newObj = {};

  function accessObj(obj) {
    for (let key of Object.keys(obj)) {
      let value = obj[key];
      if (typeof value === 'object') {
        accessObj(value);
      } else {
        if (newObj.hasOwnProperty(key)) {
          newObj[key] += value;
        } else {
          newObj[key] = value;
        }
      }
    }
  }


  accessObj(node);
  let max = Math.max.apply(null, Object.keys(newObj).map(function(x) {
    return newObj[x];
  }));

  newArr.push(max);

  newArr.push(Object.keys(newObj).filter(function(x) {
    return newObj[x] == max;
  }));

  return newArr;
};
