/* Created by Steffny Marif Bill 
on 15 Dec 2019 */

//===================================================== Validate============================================================================================
function validate(grossamount){
	//var numbers = document.getElementById("grossamount").value;
	var rgx = /^[0-9]+(\.[0-9]+)+$/;
	
	if (grossamount.value.match(rgx)){
		return rgx;
		}
	else{
		alert("Invalid Number");
		}
	
	
}


//================================================= find tax calculation ==================================================================================
var tax;

function calTax(tax){
var amt = parseFloat(document.getElementById("grossamount").value);
var fortAmt = amt * 26 


if (fortAmt <= 18000){
return tax = (fortAmt * 0.22) / 26;
}
else if (fortAmt >= 18001 && fortAmt <= 33000){
return tax = (fortAmt * 0.3 - 1440) / 26;
}
else if (fortAmt >= 33001 && fortAmt <= 70000){
return tax = (fortAmt * 0.35 - 3090) / 26;
}
else if (fortAmt >= 70001 && fortAmt <= 250000){
return tax = (fortAmt * 0.4 - 6590) / 26;
}
else {
return tax = (fortAmt * 0.42 - 11590) / 26;
}

}


//===============================================================================================================================================

function finTax(){
		
var tax = calTax();
var grossDepAmt = parseFloat(tax);




dep0 = document.getElementById("nonres").value = parseFloat(grossDepAmt).toFixed(2);
}








