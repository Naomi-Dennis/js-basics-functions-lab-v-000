// Code your solution in this file!
const LOCATION = 42
const CITY_BLOCK_IN_FEET = 264
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - LOCATION)
}

function distanceFromHqInFeet(distance){
  console.log(distance * CITY_BLOCK_IN_FEET)
  return distanceFromHqInBlocks(distance) * CITY_BLOCK_IN_FEET
}

function distanceTravelledInFeet(start, destination){
    var diff = Math.abs( start - destination )
    return distanceFromHqInFeet(diff)
}

function calculatesFarePrice(start, destination){

}
