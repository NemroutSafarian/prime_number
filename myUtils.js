module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	printPrimes: function(arrayOfPrimes){

		for(let i = 0; i < arrayOfPrimes.length; i++){
			console.log(arrayOfPrimes[i]);
		}

	}
}
