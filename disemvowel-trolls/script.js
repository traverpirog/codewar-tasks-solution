
        function disemvowel(str) {
            let vowels = ['a', 'e', 'i', 'o', 'u'];
            return str.split(' ').map(word => {
                return word.split('').filter(item => !vowels.includes(item.toLowerCase())).join('')
            }).join(' ');
        }

        /* 
        
        OTHER VARIANT

        function disemvowel(str) {
            return str.replace(/[aeiou]/gi, '');
        }
        
        */

        console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
        console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
        console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    