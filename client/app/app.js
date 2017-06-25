
$.ajax({
	url: '/api',
	type: 'GET',
	dataType: 'json',
	data: {param1: 'value1',param2: 'value2'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});