
        function duplicateCount(text) {
            const object = text.toLowerCase().split('').reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
            let counter = 0;
            for (const key in object) {
                object[key] > 1 ? counter++ : counter;
            }
            return counter
        }

        console.log(duplicateCount("")); // 0
        console.log(duplicateCount("abcde")); // 0
        console.log(duplicateCount("aabbcde")); // 2
        console.log(duplicateCount("aabBcde")); // 2
        console.log(duplicateCount("Indivisibility")); // 1
        console.log(duplicateCount("Indivisibilities")); // 2
    