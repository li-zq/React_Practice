import './theme.less';
import FistOne from "./components/m1/m1.jsx";
import Router from "./router/router.jsx";

ReactDom.render(
	//<FistOne dl="zmq"/>,
	//<h1>hello world</h1>,
	<Router />,
	document.getElementById('reactInstance')
);


