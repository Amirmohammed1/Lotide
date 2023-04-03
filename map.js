const words = ["Raptors", "Championship", "rings", "2019", "Kwahi"];

const map = function(array, callback){
  const results =[];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);