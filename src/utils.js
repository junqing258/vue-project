function arrayDiff(a, b) {
	return a.filter(function (i) {
		return b.indexOf(i) < 0;
	});
};

/**
 * 随机取样
 * @param {Array} arr 
 * @param {number} count 
 */
function getRandomArrayElems(arr, count) {
	var shuffled = arr.slice(0),
	    i = arr.length,
	    min = i - count,
	    temp,
	    index;
	while (i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
