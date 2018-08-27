
function appendAndDelete(s, t, k) {
	var oldStr = s;
	var newStr = t;
	var step = k;

	var oldStrArr = s.split('');
	var newStrArr = t.split('');
	
	let oldDiffArr = oldStrArr.filter(x => !newStrArr.includes(x));	
	let newDiffArr = newStrArr.filter(x => !oldStrArr.includes(x));

	console.log(oldStrArr);
	console.log(newStrArr);
	console.log(oldDiffArr);
	console.log(newDiffArr);
}

var s = 'hackerhappy'; 
var t = 'hackerrank';
var k = 9;
var out = appendAndDelete(s, t, k);
console.log(out);
