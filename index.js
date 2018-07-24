// Code your solution in this file!
const LOCATION = 42
const CITY_BLOCK_IN_FEET = 264
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - LOCATION)
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * CITY_BLOCK_IN_FEET
}

function distanceTravelledInFeet(){

}

function calculatesFarePrice(start, destination){

}
