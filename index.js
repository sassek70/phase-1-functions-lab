function distanceFromHqInBlocks(someValue) {
    const blocks = Math.abs(someValue - 42);
    return blocks;
}

function distanceFromHqInFeet (someValue) {
    const feet = distanceFromHqInBlocks(someValue)
    const footage = (feet * 264);
    return footage
}

function distanceTravelledInFeet(start, destination) {
    const travelled = distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
    return travelled;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination)< 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) >= 2000 && (distanceTravelledInFeet(start, destination) < 2500)) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return "cannot travel that far"
    }

}