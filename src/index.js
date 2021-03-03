module.exports = function toReadable(number) {
    const numberInWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'

    }

    const numberInWordsTens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let str = String(number),
        hundred, decimal, num;

    if (number === 0) {
        return 'zero';
    }

    if (number < 20 && number != 0) {
        return numberInWords[number];
    }

    if (str.length === 2 && number > 19) {
        decimal = Number(str[0]);
        num = Number(str[1]);
        return decimalNumber(decimal, num);
    }

    if (str.length === 3) {
        hundred = Number(str[0]);
        decimal = Number(str[1]);
        num = Number(str[2]);
        return number % 100 === 0 ? numberInWords[hundred] + ' hundred' : numberInWords[hundred] + ' hundred ' + decimalNumber(decimal, num);
    }

    function decimalNumber(decimal, num) {
        let newNum = Number(String(decimal) + String(num));
        if (newNum < 20 && newNum != 0) {
            return numberInWords[newNum];
        }
        return (numberInWordsTens[decimal] ? numberInWordsTens[decimal] : '') + (numberInWords[num] ? ' ' + numberInWords[num] : '');

    }
}