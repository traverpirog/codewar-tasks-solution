
        var regex = /\w+/g;

        console.log("aa bbb cccc ddddd eeeeee fffffff".match(regex), ['aa', 'bbb', 'cccc', 'ddddd', 'eeeeee', 'fffffff']);
        console.log("aaa bcccd".match(regex), ['aaa']);
        console.log("_x_x_ --- ~~|~~".match(regex), ['_x_x_']);
        console.log("ABCDCBA ABABABA".match(regex), ['ABCDCBA', 'ABABABA']);
        console.log("121 1221 13577531 11211".match(regex), ['121', '1221', '11211']);
        console.log("aabbbcccc d".match(regex), null);
        console.log("abbA CdDc".match(regex), null);
        console.log("1    1".match(regex), null);
        console.log("1231 12341 123451 1234561".match(regex), null);
    