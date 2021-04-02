function count_pairs(arr, target) {
    var ans = 0;
    var numbers = {};
    var diff_arr = [];

    for (i=0; i < arr.length; i++) {
        diff_arr.push(arr[i]-target);
        
        if (!numbers.hasOwnProperty(arr[i])) {
            numbers[arr[i]] = 1;
        } else {
            numbers[arr[i]] += 1;
        }
    }

    for (i=0; i <  diff_arr.length; i++) {
        if (numbers.hasOwnProperty((-1)*diff_arr[i])) {
            ans += 1;
            numbers[arr[i]] -= 1;
            numbers[-diff_arr[i]] -= 1;

            if (numbers[-diff_arr[i]] == 0) {
                delete numbers[-diff_arr[i]];
            }

            if (numbers[arr[i]] == 0) {
                delete numbers[arr[i]];
            }
        }
    }

    return ans;
}

var test1_ans = count_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5);

console.log(test1_ans);