function first100Primes(){
	var primeNumbers = [];
	var number = 2;
	primeNumbers.push(number);
	number++;
	while (primeNumbers.length < 100) {
	    var isPrime = true;
	    for (index = 0; index < primeNumbers.length && primeNumbers[index] * primeNumbers[index] <= number; index++) {
	        if (number % primeNumbers[index] === 0) {
	            isPrime = false;
	            break;
	        }
	    }
	    if (isPrime) {
	        primeNumbers.push(number);
	    }
	    number++;
	}
	return primeNumbers;
}

var outFile = "prime_numbers.txt";
var fs = require('fs');
var primeNumbers = first100Primes();
fs.writeFileSync(outFile, primeNumbers.join(", "));
console.log("First 100 prime numbers are: \n" + primeNumbers.join(", "));

