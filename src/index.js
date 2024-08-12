module.exports = function reverse(n) {
	let resStr = n.toString().split("").reverse().join('');
	return parseInt(resStr);
}
