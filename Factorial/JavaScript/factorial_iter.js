function factorial(n) {
	//edge case
	if (n < 0) {throw "Number must be non-negative";}
	var sum = 1;
	//skip zero and one
	while (n>1) {
		sum *=n;
		n--;
	}
		return sum;
}

