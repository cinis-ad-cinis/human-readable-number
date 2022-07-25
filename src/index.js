module.exports = function toReadable (number) {
    const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrTens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (number === 0) {
        return word = 'zero';
    }

    if (number > 0 && number < 20) {
        return word = arr[number];
    }

    if (number >= 20 && number <= 99) {
        const tens = Math.trunc(number / 10);
        const digit = number % 10;

        return word = (arrTens[tens] + ' ' + arr[digit]).trim();
    }

    if (number > 99) {
        const hundred = Math.trunc(number / 100);
        const tens = Math.trunc(number % 100 / 10);
        const digit = number % 10;

        tens <= 1 ? word =  arr[hundred] + ' hundred ' + arr[number - (hundred * 100)] : word = arr[hundred] + ' hundred ' + arrTens[tens] + ' ' + arr[digit];

        return word.trim();
    }
}
