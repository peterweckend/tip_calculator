// window.alert()

function CalculateValues(){
	var finalamount = Total();
	var taxamount = TaxTotal();
	if (ValidateTip(1) && ValidateSub(1)){
		TotalOutput(finalamount);
		TipOutput(taxamount);

	} else {
		TipError();
		TotalError();
	}
	

}

function Total(){
	var subtotal = Number($('#subtotal').val().slice(1));
	var tipval = Number($('#tipval').val().slice(0,-1)) / 100;
	return subtotal + (subtotal * tipval);
}

function TaxTotal(){
	var subtotal = Number($('#subtotal').val().slice(1));
	var tipval = Number($('#tipval').val().slice(0,-1)) / 100;
	return subtotal * tipval;
}



// mode = 1 is final check, we can ignore $ and %
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



function ValidateValues(){
	var province = $('#province').val();
	if (province == "default"){
		return 0;
	}
	return 1;
}

function TipOutput(output){
	$('#tipamt').val('$'+output.toFixed(2));
}

function TotalOutput(output){
	$('#total_sol').val('$'+output.toFixed(2));
}

function TipError(){
	$('#tipamt').val('Error.');
}

function TotalError(){
	$('#total_sol').val('Error.');
}

function Reset(){
	$('#tipamt').val('');
	$('#total_sol').val('');
	$('#subtotal').val('');
	$('#tipval').val('');
}

function AddPercent(){
	if (ValidateTip(0)){
		$('#tipval').val($('#tipval').val()+'%');
	} 
}

function AddDollar(){
	if (ValidateSub(0)){
		$('#subtotal').val('$'+$('#subtotal').val());
	}
}



