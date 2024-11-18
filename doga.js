//Dna to Rna
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
//Disemvowel Trolls
function disemvowel(str){
    return str.replace(/[aeiou]/gi,"");
}
Fizz Buzz - Without ifs
const fizzBuzz = n => {
    const result = [
      n % 3 == 0 && n % 5 == 0 && "FizzBuzz",
      n % 3 == 0 && "Fizz",
      n % 5 == 0 && "Buzz",
      n
      ].filter(Boolean)[0];
    return result;
  };

