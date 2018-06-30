//recursive
(function(x) {
	var memoize = {};
	
	function factorial(n) {
		return n < 2 ? 1: memoize[n] || memoize[n] = n * factorial(n-1));		
	}
	return factorial(x);
	
})(18);