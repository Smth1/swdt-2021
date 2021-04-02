function first_non_repeating_letter(str) {
    var lower_str = str.toLowerCase();

    var letters = {}

    for (i=0; i < lower_str.length; i++) {
        if (!letters.hasOwnProperty(lower_str[i])) {
            letters[lower_str[i]] = 1;
        } else {
            letters[lower_str[i]] += 1;
        }
    }

    for (i=0; i < lower_str.length; i++) {
        if (letters[lower_str[i]] == 1) {
            return str[i];
        }
    }

    return "";
}

var test_str1 = 'stress';

var test_out1 = first_non_repeating_letter(test_str1);

console.log(test_out1);

var test_str2 = 'sTreSS';

var test_out2 = first_non_repeating_letter(test_str2);

console.log(test_out2);