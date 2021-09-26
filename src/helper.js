//Removing duplicates from an array
export const removeDuplicateObjectFromArray = (array, key) => {
  var check = new Set();
  return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
};

// All functions regarding the calender
