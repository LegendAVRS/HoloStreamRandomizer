const getRandomValue = (myObj: Object) => {
  var keys = Object.keys(myObj) as [keyof typeof myObj];
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  return myObj[randomKey];
};
