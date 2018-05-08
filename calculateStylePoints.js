function getSum(total, num) {
    return total + num;
}

const calculateStylePoints = (styleNotes) => {
    const max = Math.max();
    const min = Math.min();
    return getSum(styleNotes) - max - min;
};

module.exports = calculateStylePoints;