const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let totalPoints = 0;
    const pointsForSizeOfSkiJumpingLaunchingPad = [60, 120];
    const pointsForDistanceOverK = [2, 1.8, 1.2];
    switch (hillSize) {
        case ('normal'):
            totalPoints = pointsForSizeOfSkiJumpingLaunchingPad[0] + (distance - kPoint) * pointsForDistanceOverK[0];
            break;
        case('big'):
            totalPoints = pointsForSizeOfSkiJumpingLaunchingPad[0] + (distance - kPoint) * pointsForDistanceOverK[1];
            break;
        case ('mammut'):
            totalPoints = pointsForSizeOfSkiJumpingLaunchingPad[1] + (distance - kPoint) * pointsForDistanceOverK[2];
            break;
    }
    return totalPoints;

};
module.exports = calculateDistancePoints;