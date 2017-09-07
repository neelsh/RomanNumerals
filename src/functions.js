function romanNumerals(num) {
  let result = "";
  const numeral = function(value, numeral) {
    return {value: value, numeral: numeral};
  };

  const numerals = [
    numeral(1000, "M"),
    numeral(900, "CM"),
    numeral(500, "D"),
    numeral(400, "CD"),
    numeral(100, "C"),
    numeral(90, "XC"),
    numeral(50, "L"),
    numeral(40, "XL"),
    numeral(10, "X"),
    numeral(9, "IX"),
    numeral(5, "V"),
    numeral(4, "IV"),
    numeral(1, "I")
  ];

  numerals.forEach(function(item) {
    for (; num >= item.value; num -= item.value) {
     result += item.numeral;
    }
  })
  return result;
}

function integer(str) {
  let result = 0;
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    for (let i = 0;i<=decimal.length;i++) {
      while (str.indexOf(roman[i]) === 0){
        result += decimal[i];
        str = str.replace(roman[i],'');
      }
    }
  return result;
}
