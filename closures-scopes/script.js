
        function createFunctions(n) {
            var callbacks = [];

            for (var i = 0; i < n; i++) {
                let count = i;
                callbacks.push(function() {
                    return count;
                });
            }

            return callbacks;
        }

        let callbacks = createFunctions(5);
        for (let i = 0; i < callbacks.length; i++) {
            console.log(callbacks[i](), i, `Function with index ${i}`);
        }
    