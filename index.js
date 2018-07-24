// Code your solution in this file!
const LOCATION = 42
const CITY_BLOCK_IN_FEET = 264
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - LOCATION)
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * CITY_BLOCK_IN_FEET
}

function distanceTravelledInFeet(start, destination){
    var diff = Math.abs( start - destination )
    return diff * CITY_BLOCK_IN_FEET
}

function calculatesFarePrice(start, destination){
  var diff = Math.abs(destination - start)
  var distance = distanceTravelledInFeet(start, destination)
  if(distance < 400){
    return 0;
  }
  else if(distance >= 400 && distance <= 2000){
    return (distance - 400) * .02
  }
}
