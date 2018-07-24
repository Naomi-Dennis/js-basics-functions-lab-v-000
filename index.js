// Code your solution in this file!
'use strict'
const LOCATION = 42
const CITY_BLOCK_IN_FEET = 264
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - LOCATION)
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * CITY_BLOCK_IN_FEET
}

function distanceTravelledInFeet(start, destination){
    let diff = Math.abs( start - destination )
    return diff * CITY_BLOCK_IN_FEET
}

function calculatesFarePrice(start, destination){
  let diff = Math.abs(destination - start)
  let distance = distanceTravelledInFeet(start, destination)
  if(distance < 400){
    return 0;
  }
  else if(distance >= 400 && distance <= 2000){
    return (distance - 400) * .02
  }
  else if(distance > 2000 && distance < 2500){
      let processed_distance = distance;
      let final_price = 0
      processed_distance -= 400 // free distance travelled
      console.log("first 400", processed_distance, final_price)
      final_price += 1600 * 0.02//the next 1600 feet will always be priced
      processed_distance -= 1600;
      console.log("next 1600", processed_distance, final_price)
      final_price += processed_distance * 0.25
      console.log("next 1600", processed_distance, final_price)
      return final_price
  }
}
