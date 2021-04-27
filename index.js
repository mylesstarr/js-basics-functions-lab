function  distanceFromHqInBlocks(pickuplocation) {
    let stringValue = parseInt(pickuplocation)
    let distanceInBlk= Math.abs(42-stringValue)
    return distanceInBlk
    
}
function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlk = distanceFromHqInBlocks(pickupLocation)
    const feetInABlk = 264
    const distanceInFeet = (distanceInBlk * feetInABlk)
    return distanceInFeet
}

function distanceTravelledInFeet(startingLocation, endingLocation) {
    const endInt = parseInt(endingLocation)
    const startInt = parseInt(startingLocation)
    const absValLoc = Math.abs(endInt-startInt)
    const feetInABlk = 264
    const distTravInFeet = absValLoc * feetInABlk
    return distTravInFeet
}

// function calculatesFarePrice(distanceTravelledInFeet){
// if (distanceTravelledInFeet <= 400) {
//     return (0)
// } else if (distanceTravelledInFeet >= 400 && distanceTravelledInFeet <= 2000) {
//     return ((distanceTravelledInFeet - 400) * .02)
// } else if (distanceTravelledInFeet >= 2000 && distanceTravelledInFeet <= 2500) {
//     return (25)
// } else if (distanceTravelledInFeet >= 2500) {
//     return ('cannot travel that far')
// }
// }


function calculatesFarePrice(start, destination){
    const destinationInt = parseInt(destination)
    const startInt = parseInt(start)
    const absValLoc = Math.abs(destinationInt-startInt)
    const feetInABlk = 264
    const distTravInFeet = absValLoc * feetInABlk
    
    
    if (distTravInFeet <= 400) {
        return (0)
    } else if (distTravInFeet >= 400 && distTravInFeet <= 2000) {
        return ((distTravInFeet - 400) * .02)
    } else if (distTravInFeet >= 2000 && distTravInFeet <= 2500) {
        return (25)
    } else if (distTravInFeet >= 2500) {
        return ('cannot travel that far')
    }
    }
    