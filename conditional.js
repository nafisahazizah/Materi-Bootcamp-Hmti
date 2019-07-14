// < , > , >= , <= ,== , !=, !== , !===

// 1. if
if (1 > 0) {
	console.log('[IF]satu lebih dari 0');
}

//2. if else
if (1 != 1) {
	console.log('[IF:ELSE] 1 tidak sama dengan 1');
}else{
	console.log('[IF:ELSE] 1 sama dengan 1')
}

//3. if else if
if (1 != 1) {
	console.log('[IF:ELSE IF]1 tidak sama dengan 1');
}else if (1 > 1){
	console.log('[IF:ELSE IF]1 sama dengan 0')
}

//4. if elseif else
if (1 != 1) {
	console.log('[IF:ELSE IF: ELSE]1 tidak sama dengan 1');
}else if (1 > 1){
	console.log('[IF:ELSE IF: ELSE]1 sama dengan 0')
}else{
	console.log('[IF:ELSE IF: ELSE] ambil semua bro')
}

//5. if bersarang
if (1 > 0) {
	console.log('ternyata benar ');
	if (2 > 1) {
		console.log('2 lebih dari dia');
	if (3 > 2) {
		if (4 > 3) {
			if (5 > 4) {

			} else{

			}
		}else if (6 > 5){

		}
	}else{
		
	}
}
console.log('yang 2 > 1 bisa jadi salah');


//console.log('apakah Sama ? ', 1 === '1');
//1 === '1' //false
//1 == '1' //true