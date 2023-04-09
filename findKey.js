const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const findKey = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKeyByValue(findKey, { stars: 1 }), "Blue Hill");
assertEqual(findKeyByValue(findKey, { stars: 3 }), "Akaleri");
assertEqual(findKeyByValue(findKey, { stars: 2 }), "noma");
assertEqual(findKeyByValue(findKey, { stars: 4 }), undefined);

