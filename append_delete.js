
function appendAndDelete(s, t, k) {
	var step = k;

	var oldArr = s.split('');
	var newArr = t.split('');
	var oldLen = oldArr.length;
	var newLen = newArr.length;

	var removeLen = 0;
	var addLen = 0;
	var totalLen = 0;
	for(var i=0; i<oldLen; i++) {
		var old = oldArr[i];
		var nnew = newArr[i];

		if(old == nnew) {
			continue;
		} else {
			removeLen = (oldLen - 1) - i + 1;
			addLen = (newLen - 1) - i + 1;
			totalLen = removeLen + addLen;

			/*
			console.log(removeLen);			
			console.log(addLen);
			console.log(totalLen);
			console.log('--');
			*/

			break; 	
		}	
	}

	if(totalLen <= k) {
		var diff = k - totalLen;


		return 'Yes';
	} else {
		return 'No';
	}

}

/*
var s = 'hackerhappy'; 
var t = 'hackerrank';
var k = 9;
*/

/*
var s = 'aba';
var t = 'aba';
var k = 7;
*/

/*
var s = 'ashley';
var t = 'ash';
var k = 2;
*/

var s = 'abcd';
var t = 'abcdert';
var k = 10;

var out = appendAndDelete(s, t, k);
console.log(out);
