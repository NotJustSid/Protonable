
var totalSeconds = 0;

function setTime() {
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  if(totalSeconds===86400){
      totalSeconds = 0;
  }
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
