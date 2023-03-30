const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const letterPositions = function(string) {
  let object = {}
  for (let i=0; i<string.length; i++){
    if (object.hasOwnProperty(string[i])) {
      object[string[i]]++
    } else {
      object[string[i]] = 1
      
    }
  }
 return object 
}
const result = letterPositions("hello")
console.log(result)
console.log(result["l"])