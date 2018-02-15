var day = 0;
var youngerBrotherPercent = document.getElementById('youngerBrotherPercent');
var olderBrotherPercent = document.getElementById('olderBrotherPercent');

function nextPrimeClick() {
  if (day < 365) {
     youngerBrotherPercent.innerHTML =  /* primeNumbersArray[myIndex]; */
     olderBrotherPercent.innerHTML = /* primeNumbersArray[myIndex - 1]; */
     day++;
  }
  else {
     youngerBrotherPercent.innerHTML = "That was a full year... the brother's are tired of dividing their field.";
     olderBrotherPercent.innerHTML = "";
  }


var value1 = 1/2;

var value2 = 1/2;

function sunSet() {
    for (var day = 0; day < 365; day++) {
   
    var value1 = value1 - value1/3;

    var value2 = value2 + value1/2;

    var value2 = value2 - value2/3;

    var value1 = value1 + value2/2;

    var value2 = 1 - value1; 
    
    console.log(value1);
    
    console.log(value2);
    
        
    }

}





/*

// Identify Prime Numbers

// If # is divisible by 2, 3, 5, 7 then not prime else prime
// Run from 2 to infinity as array
// Loop through prime array and check if each i is divisible



// puts 1 to 8000 in an array

    var allNumbersArray = [0, 1]
    var primeNumbersArray = ['', 2, 3, 5, 7]
    function findPrimes() {        
        for (var i = 2; i < 8000; i++) {
        allNumbersArray.push(i);
            if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % Math.sqrt(i) !==0) {
            primeNumbersArray.push(i);  
            }    
        }
    }
    findPrimes();


// if (primeNumbersArray[i] divides into i then do not put it in primeNumbersArray)

var myIndex = 1;
var currentPrimeNumber = document.getElementById('currentPrimeNumber');
var previousPrimeNumber = document.getElementById('previousPrimeNumber');
var futurePrimeNumber = document.getElementById('futurePrimeNumber');

currentPrimeNumber.innerHTML = primeNumbersArray[0]; //Print first value of array right away.
previousPrimeNumber.innerHTML = primeNumbersArray[0];
futurePrimeNumber.innerHTML = primeNumbersArray[1];

function nextPrimeClick() {
  if (myIndex < primeNumbersArray.length) {
     currentPrimeNumber.innerHTML = primeNumbersArray[myIndex];
     previousPrimeNumber.innerHTML = primeNumbersArray[myIndex - 1];
     futurePrimeNumber.innerHTML = primeNumbersArray[myIndex + 1];
     myIndex++;
  }
  else {
     currentPrimeNumber.innerHTML = "CONGRATS! You made it through first 1000 Prime Numbers!";   
  }
};


*/








/*
var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

myButton.addEventListener('click', doSomething, false)

function doSomething() {
	myText.textContent = "hello, world!";
}
var day = 0;
var field = 1/2;
var peter = field - (field/3);
var ivan = field + (peter/2);
var updatePeter = (field + peter) - ((field + peter)/3);
var updateIvan = 1 - updatePeter;
var newPeter = peter + field - peter/3




var day = 0
var field = 1/2;
var peter = field - (field/3);
var ivan = field + (peter/2);
var updatePeter = ((2*field + 2*peter)/3);
var updateIvan = 1 - updatePeter;
var newPeter = updatePeter - (updatePeter/3);


var day = 0
var field = 1/2;
var peter = field - (field/3);
var ivan = field + (peter/2);
var peter = ((2*field + 2*peter)/3);
var ivan = 1 - updatePeter;
var peter = updatePeter - (updatePeter/3);


function wheatField() {        
        for (day = 0; day < 11; day++) {
            
            var field = 1/2;
			var peter = field - (field/3);
			var ivan = field + (peter/2);
			var peter = ((2*field + 2*peter)/3);
			var ivan = 1 - updatePeter;  
			
			
            }    
        }
    }
    wheatField();
    
    
    
    
    
var value1 = 1/2;

var value2 = 1/2;

var value1 = value1 - (value1/3);

var value2 = value2 + value1/2;

var value1 = (value2 - value2/3);

var value2 = 1 - value1;

*/