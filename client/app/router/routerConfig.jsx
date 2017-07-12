import Bundle from "./Bundle.jsx";

import _Login from "bundle-loader?lazy&name=login!../components/login/login.jsx";

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_Login}>
				{(Components)=> <login><Components {...this.props}/></login>}
			</Bundle>
		)
	}
} 