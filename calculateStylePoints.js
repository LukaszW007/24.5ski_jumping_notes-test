function getSum (total, num) {
    return total + num
}

const calculateStylePoints = (styleNotes) => {
    const max = Math.max(...styleNotes);
    const min = Math.min(...styleNotes);
    return styleNotes.reduce(getSum) - max - min;
};

module.exports = calculateStylePoints;