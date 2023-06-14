const validateTime = (num) => {
    const correctNamber = num < 10 ? '0' + num : num ;
    return correctNamber;
}

module.exports = { validateTime }