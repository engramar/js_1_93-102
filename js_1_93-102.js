#Record Collection
// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {  
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

#Iterate with JavaScript While Loops
// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while(i > -1) {
  myArray.push(i);
  i--;
}

#Iterate with JavaScript For Loops
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

#Iterate Odd Numbers With a For Loop
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

#Count Backwards With a For Loop
// Setup
var myArray = [];

// Only change code below this line
var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

#Iterate Through an Array with a For Loop
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0; 
for (var i = 0; i < myArr.length; i++) {
   total = total + myArr[i];
}

#Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

#Iterate with JavaScript Do...While Loops
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11);

#Replace Loops using Recursion



#Profile Lookup
