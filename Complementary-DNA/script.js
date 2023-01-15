
        const decoder = {
            'A': 'T',
            'T': 'A',
            'G': 'C',
            'C': 'G'
        }

        function DNAStrand(dna) {
            return dna.split('').map(item => decoder[item]).join('')
        }

        console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is")
        console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is")
        console.log(DNAStrand("GTAT"), "CATA", "String GTAT is")  
    