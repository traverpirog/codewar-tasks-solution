
        let count = 0;

        function cc(card) {
            // Only change code below this line
            let res = '';

            if (typeof card === 'number' && card < 10) {
                if (card >= 2 && card <= 6) {
                    count++;
                } else {
                    count += 0
                }
            }

            if (typeof card === 'string' || card === 10) {
                count--;
            }

            return count <= 0 ? `${count} Hold` : `${count} Bet`;
            // Only change code above this line
        }

        console.log(cc(7));
        console.log(cc(8));
        console.log(cc(9));
    