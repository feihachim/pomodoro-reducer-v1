function appendZero(digit) {
    return digit < 10 ? `0${digit.toString()}` : digit.toString();
}

function displayTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${appendZero(minutes)}:${appendZero(seconds)}`;
}

function changeCounter(number, step, minimum = 1, maximum = 60) {
    if (number + step >= minimum && number + step <= maximum) {
        return number + step;
    }
    return number;
}

export { appendZero, displayTime, changeCounter };
