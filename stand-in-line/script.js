
        function nextInLine(arr, item) {
            // Only change code below this line
            arr.push(item);
            return arr.shift();
            // Only change code above this line
        }

        // Setup

        // Display code
        console.log(nextInLine([], 5));
        console.log(nextInLine([], 1));
        console.log(nextInLine([2], 2));
        console.log(nextInLine([5,6,7,8,9], 5));
    