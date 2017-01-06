function CalculateTip(){
	return 10;
}

function CalculateValues(){
	var totalnotax = BeforeTaxes();
}

function BeforeTaaxes(){
	var subtotal = $('#subtotal').val();
	var tipval = $('#tipval').val();
}

function WriteSubtotal(){
	var output = $('#subtotal').val();

	$('#subtotal_sol').val(output);
}