function digital_root(num) {
    var sum_numbers = 0;

    if (num < 10)
        return num;

    while (num >= 10) {
        sum_numbers += num % 10;
        num = Math.floor(num / 10);
    }

    sum_numbers += num;

    return digital_root(sum_numbers);
}

var res1 = digital_root(16);
console.log(res1);

var res2 = digital_root(942);
console.log(res2);

var res3 = digital_root(132189);
console.log(res3);

var res4 = digital_root(493193);
console.log(res4);
