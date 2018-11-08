/*
var container = document.querySelector("#app"); // Object
var minutes; //doubles 10.00  
var seconds; // doubles
var isPaused = false; // boolean true/false
*/
//Fucking fun with js
var Stopwatch = {
  //Properties
  container: document.querySelector("#app"),
  minutes: 0,
  seconds: 0,
  isPaused: false,
  //Methods
  run: function() {
    if(this.isPaused == false) {
      if(this.seconds == 60) {
        this.minutes++;
        this.seconds = 0;
      } else {
        this.seconds++;
      }     
      this.displayNumbers();
    }
  },

  displayNumbers: function(){
    var displayMinutes;
    var displaySeconds;

    if(this.minutes <= 9) {
      displayMinutes = "0" + this.minutes; 
    } else {
      displayMinutes = this.minutes;
    } 

    if(this.seconds <= 9) {
      displaySeconds = "0" + this.seconds;
    } else {
      displaySeconds = this.seconds;
    }
    this.container.innerHTML = displayMinutes + ":" + displaySeconds;
  }
}

setInterval(function(){Stopwatch.run()},1000);


/*
 * Objects: containers = thins about them, things they can do
 * things that describe them are called properties
 * things they can do are called methods
 *
 *
 * */
