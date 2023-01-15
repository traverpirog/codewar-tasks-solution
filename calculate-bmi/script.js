
        function bmi(weight, height) {
            const bmi = weight / Math.pow(height, 2);
            let type = 'Normal';
            if (bmi <= 18.5) type = 'Underweight';
            if (bmi > 18.5 && bmi <= 25) type = 'Normal';
            if (bmi > 25 && bmi <= 30) type = 'Overweight';
            if (bmi > 30) type = 'Obese';
            return type;
        }
        console.log(bmi(80, 1.80), "Normal");
    