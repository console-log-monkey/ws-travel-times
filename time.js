var totalRelics = 1;
var rushLevel = 6;
var totalDistance = 500;
var rushSpeedIncreasePercentPerLevel = [
  0, 6, 7, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 28, 31, 35,
];
var rushMaxSpeedMultiplier = 2.0;
var transportSpeed = 74.0 / 3600;

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h.toString();
  var mDisplay = m.toString();
  var sDisplay = s.toString();

  return hDisplay + "h:" + mDisplay + "m:" + sDisplay + "s";
}

function getRushSpeed(rushLevel, totalRelics) {
  if (totalRelics <= 0) {
    return 0;
  }
  if (totalRelics > 0) {
    rushMultiplier =
      (rushSpeedIncreasePercentPerLevel[rushLevel] / 100.0) * totalRelics;

    if (rushMultiplier >= rushMaxSpeedMultiplier) {
      rushMultiplier = rushMaxSpeedMultiplier;
    }
    finalSpeed = transportSpeed + transportSpeed * rushMultiplier;
    console.log("rushMultiplier: " + rushMultiplier);
    console.log("finalSpeed: " + finalSpeed);
    return finalSpeed;
  }
}

function getRushTime(totalDistance, rushLevel, totalRelics) {
  time = totalDistance / getRushSpeed(rushLevel, totalRelics);
  return time;
}

console.log(secondsToHms(getRushTime(totalDistance, rushLevel, totalRelics)));
