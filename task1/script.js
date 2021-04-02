function filter_list(input_list) {
    return input_list.filter(el => typeof(el) != "string");
}

var test1_input = [1, 2, 5, 4.3, '23', 'kjlkjl']

var test1_output = filter_list(test1_input)


console.log(test1_output);