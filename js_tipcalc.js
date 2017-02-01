

function CalculateValues(){
	var finalamount = Total();
	var tipamount = TipTotal();
	if (ValidateTip(1) && ValidateSub(1)){
		TotalOutput(finalamount);
		TipOutput(tipamount);

		if ($('#peoplecount').val() != '1') {	// split bill if > 1 person
			$('.group3').css("display", "table-row");
			$('.group1').css("display", "table-cell");
			$('.group2').css("display", "table-cell");
			var tipsplit = Number(tipamount) / Number($('#peoplecount').val());
			var totalsplit = finalamount / Number($('#peoplecount').val());
			GroupOutput(tipsplit, totalsplit);
		}

	} else {
		TipError();
		TotalError();
	}
	

}

function Total(){	// calculates value of subtotal + tip
	var subtotal = Number($('#subtotal').val().slice(1));
	var tipval = Number($('#tipval').val().slice(0,-1)) / 100;
	return subtotal + (subtotal * tipval);
}

function TipTotal(){	// calculates the value of the tip only
	var subtotal = Number($('#subtotal').val().slice(1));
	var tipval = Number($('#tipval').val().slice(0,-1)) / 100;
	return subtotal * tipval;
}


// mode = 1 is final check, we can ignore $ and %
// make sure tip is a valid value
function ValidateTip(mode){

	var valid = 1;
	if (mode == 1){
		var tipamt1 = Number($('#tipval').val().slice(0, -1));

		if ($('#tipval').val().slice(-1) != '%'){
			valid = 0;
		}

		if ($('#tipval').val() == ""){
			valid = 0;
		}
		if (isNaN(tipamt1) || tipamt1 < 0){
			valid = 0;
		}

		return valid;
	}

	else {

		var tipamt0 = Number($('#tipval').val());
		if (tipamt0 == ""){
			valid = 0;
		}
		if (isNaN(tipamt0) || tipamt0 < 0){
			valid = 0;
		}
		return valid;		
	}

}

// mode = 1 is final check, we can ignore $ and %
// make sure subtotal is a valid value
function ValidateSub(mode){

	var valid = 1;

	if (mode == 1){
		var subtotal1 = Number($('#subtotal').val().slice(1));

		if ($('#subtotal').val().slice(0,1) != '$'){
			valid = 0;
		}
		if ($('#subtotal').val() == ""){
			valid = 0;
		}
		if (isNaN(subtotal1) || subtotal1 < 0){
			valid = 0;
		}

		return valid;
	}

	else {
		var subtotal0 = Number($('#subtotal').val());
		if (subtotal0 == ""){
			valid = 0;
		}
		if (isNaN(subtotal0) || subtotal0 < 0){
			valid = 0;
		}
		return valid;		
	}

}


// was originally used to calculate tax for provinces
// function ValidateValues(){
// 	var province = $('#province').val();
// 	if (province == "default"){
// 		return 0;
// 	}
// 	return 1;
// }

function TipOutput(output){
	$('#tipamt').val('$'+output.toFixed(2));
}

function TotalOutput(output){
	$('#total_sol').val('$'+output.toFixed(2));
}

// for split groups
function GroupOutput(split_tip, split_total){
	$('#split_tipamt').val('$'+split_tip.toFixed(2));
	$('#split_total_sol').val('$'+split_total.toFixed(2));
}

// if invalid input entered
function TipError(){
	$('#tipamt').val('$0.00');
}
// if invalid input entered
function TotalError(){
	$('#total_sol').val('$0.00');
}

// on Reset button press
function Reset(){
	$('#tipamt').val('$0.00');
	$('#total_sol').val('$0.00');
	$('#subtotal').val('');
	$('#tipval').val('');
	$('.group').css("display", "none");
	$('#peoplecount').val('1');
}

// if valid input, display percentage sign
function AddPercent(){
	if (ValidateTip(0)){
		$('#tipval').val($('#tipval').val()+'%');
	} 
}

// if valid input, display dollar sign
function AddDollar(){
	if (ValidateSub(0)){
		$('#subtotal').val('$'+$('#subtotal').val());
	}
}



