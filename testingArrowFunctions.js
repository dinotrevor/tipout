
/*
/////////////////////////////////////////////////
/				Title:Arrow Functions			/
/				Author:Trevor Flynn 09/22/21	/
/////////////////////////////////////////////////
/
/
/				||_ NOTES PART 1 _||
/				 ||_|||_||||_|||_||
/
/	1.)	If the function has only 1 argument,
/	then you dont need parathensis around it.
/
/	2.)	If 1 statement is right of the arrow,
/	then you dont need curly braces around the
/	statement for both 1 argument and multiple
/	arguments arrow functions.
/
/
/
/
/		For example:
/				
/			We can change the following arrow functions from this:
/
/					
///	///	///	///		const square = (x) => { return  x * x; }
///	///	///	///		const cube = (x) => { return square(x) + x; } 
/
/
/			To a shorter version, using the above notes.
/
/
///	///	///	///		const square = x => x * x;
///	///	///	///		const cube = x => square(x) * x;
/
/
/
/
*/




function multiply1() {
	const a = 0.045;
	const b = document.getElementById("userInput").value;
	const c = 0.05;
	const d = document.getElementById("userInput2").value;
	const result = a * b;
	const result2 = c * d;
	document.getElementById("results").innerHTML = "<p id ='shelf1'>Tipout Food:</p>" + result  + "<p id ='shelf2'>Tipout Bar:</p>" + result2 + "<br><br>";
	//alert("Tipout for food sales: " + result + " Tipout for bar sales: " + result2 );
}

/*function multiply2() {
	const c = 0.05;
	const d = document.getElementById("userInput2").value;
	const result = c * d;
	alert(result);
}*/







/*
function multiply1(a, b) {
	return a * b;
}

const multiply2 = function(a, b) {
	return a * b;
}

const multiply3 = (a, b) => {
	return a * b;
}

const multiply4 = (a, b) => a * b;

*/