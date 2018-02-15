var day = 1;
var youngerBrotherPercent = document.getElementById('youngerBrotherPercent');
var olderBrotherPercent = document.getElementById('olderBrotherPercent');

var percentArray1 = [0.5]
var percentArray2 = [0.5]

function count() {
    var value1 = 1/2;
    var value2 = 1/2;  
    for(i = 0; i < 42; i++) {

        var value1 = value1 - value1/3;

        var value2 = value2 + value1/2;

        var value2 = value2 - value2/3;

        var value1 = value1 + value2/2;

        var value2 = 1 - value1; 
        
        percentArray1.push(value1);
        percentArray2.push(value2);


        console.log("younger: " + value1*100 + "%");

        console.log("older: " + value2*100  + "%");

        console.log(percentArray1);
        console.log(percentArray2);
    }
}
count();

function nextDayClick() {
    
  if (day < 42) {

     dayCount.innerHTML = day;
     youngerBrotherPercent.innerHTML = percentArray1[day]*100;
     olderBrotherPercent.innerHTML = percentArray2[day]*100;
     console.log(day);
     day++;
     console.log(percentArray1);
 
  }
    
  else {
     dayCount.innerHTML = "42 - infinitly small exchange of land - no noticable increase or decrease."
     youngerBrotherPercent.innerHTML = " 60";
     olderBrotherPercent.innerHTML = " 40";
  }

}


 






/*

Step by step through my thought process... 



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