var gals = parseInt(prompt("How many gallons do you want to convert to liters?"));

var liters = function(gals){
  return gals / .26417;
};

alert("Your gals converted to liters is " + liters(gals));
