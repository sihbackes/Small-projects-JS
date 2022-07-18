var newYearsEve = new Date ("1 January 2023 00:00:00" ).getTime();

var x =setInterval(function(){
  var now = new Date().getTime();
  var distance = newYearsEve -now;

  var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 *60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60))/1000);


  document.getElementById("days").innerHTML =days;
  document.getElementById("hours").innerHTML =hours;
  document.getElementById("mins").innerHTML =mins;
  document.getElementById("seconds").innerHTML =seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);