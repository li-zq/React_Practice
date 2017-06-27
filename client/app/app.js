import './theme.less';
import React from 'react';
import ReactDom from 'react-dom';
import FistOne from "./components/m1/m1.jsx";

ReactDom.render(
	<FistOne />,
	//<h1>hello world</h1>,
	document.getElementById('reactInstance')
);


/*$.ajax({
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
});*/
var a = 32;

