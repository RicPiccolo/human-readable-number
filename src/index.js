module.exports = function toReadable(number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let stringed = number.toString();

    if (number === 0) {
        return 'zero'
    } else if (number < 20) {
        return units[number];
    } else if (stringed.length === 2) {
        return (`${tens[stringed[0]]} ${units[stringed[1]]}`).trim();
    } else if (stringed.length === 3) {
        if (stringed[1] === '0' && stringed[2] === '0') {
            return `${units[stringed[0]]} hundred`;
        } else {
            return `${units[stringed[0]]} hundred ${toReadable(+(stringed[1] + stringed[2]))}`;
        }
    }
}
