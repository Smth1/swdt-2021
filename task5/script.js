function sort_friends(str) {
    var people = str.split(';');
    var res_str = ''


    var res = people.map(element => {
        arr = element.split(':');

        return arr;
    });

    res = res.sort(function (a, b) {
        if (a[1] == b[1]) {
            if (a[0] == b[0])
                return 0;

            if (a[0] < b[0])
                return -1;
            if (a[0] > b[0])  
                return 1;
        } 

        if (a[1] < b[1])
                return -1;
        if (a[1] > b[1])  
            return 1;

    });

    res.forEach(element => {
        res_str = res_str.concat('(', element[1].toUpperCase(), ', ', element[0].toUpperCase(), ')');
    });

    return res_str;
}

var s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

var res = sort_friends(s);

console.log(res);