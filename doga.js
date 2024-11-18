//Dolgozat
//Dna to Rna
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
//Disemvowel Trolls
function disemvowel(str){
    return str.replace(/[aeiou]/gi,"");
}
//Fizz Buzz - Without ifs
const fizzBuzz = n => {
return  (n % 15 === 0 && "FizzBuzz") ||
        (n % 3 === 0 && "Fizz") ||
        (n % 5 == 0 && "Buzz") ||
       n 
    };
//Correct the date-string
function dateCorrect(dateString) {
    if (!dateString) {
      return dateString
    }
    const match = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
    if (match) {
      const date = new Date(match[3], match[2] - 1, match[1], 12)
      return date.toJSON().replace(/^(\d+)-(\d+)-(\d+)T.+/, '$3.$2.$1')
    } else {
      return null
    }
  }
