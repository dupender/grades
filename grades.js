// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var numA = 0;
var numB= 0;
var numC = 0 ;
var numD = 0;
var numF = 0;
var high = 0;
var low = 100;


for (var i = 0; i < scores.length; i++){
  if (high < scores[i]) {
      high = scores[i]
    };
  if (low > scores[i]){
    low = scores[i];
  }  
  if ( scores[i]>= 91){ 
    numA +=1
  } else if(scores[i]>=81){
    numB +=1
  }else if(scores[i]>= 71){
    numC +=1
  }else if (scores[i]>=61){
    numD +=1
  } else if (scores[i]>=50){
    numF+=1;
  }
}


console.log("numA",numA );
console.log("numB",numB );
console.log("numC",numC );
console.log("numD",numD );
console.log("numF",numF );
console.log("High",high );
console.log("Low",low );