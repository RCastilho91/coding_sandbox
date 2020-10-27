/**
 * In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) 
 * the digit 1 occurs 6 times.

In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
Roman numerals, how many times does the numeral “X” occur?
 */

function sum(max) {
    let count = 0;
    for (let i = 1; i <= max; i++) {
      const roman = toRoman(i);
      roman.replace(/X/g, () => {
        count++;
      });
    }
  
    return count;
  
    function toRoman(num) {
      if (typeof num !== "number") throw Error();
  
      const digits = String(num).split("");
      const key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX"
      ];
      let roman_num = "";
      let i = 3;
      while (i--) {
        roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
      }
      return Array(+digits.join("") + 1).join("M") + roman_num;
    }
  }
  
  console.log(sum(2660));