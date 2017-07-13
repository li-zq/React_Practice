import "./login.less";

import loginImg from "./image/login.jpg" 
console.log(loginImg)
export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.handel = this.handel.bind(this);
	}
	handel(){
		console.log(1);
	}
	render(){
		return (
			<div className="content">
				<form name="loginForm" role="form" noValidate>
				    <div className="boxinput">
				        <div className="user-input">
				            <input autoFocus="autofocus" type="text" name="username"  placeholder="手机号" required/>
				            <span className="user">
				            	<span className="checkUser place"></span>
				            </span>
				        </div>
				        <div className="password-input">
				           <input type="password" name="password"  placeholder="请输入您的密码" required/>
			            	<span className="passwordClick">
				            	<span className="checkPasssWord place"></span>
				            </span>
				        </div>
				        <div>
					        <button type="submit" >
					        </button>
					    </div>
						<div className="rememberPassword">
					    	<span className="checkbox"></span>
					      <span><a href="javascript:void(0);">记住账户</a></span>
					      <span><a href="javascript:void(0);">忘记密码？</a></span>
					    </div>
				    </div>
				</form>
			</div>	
		)
	}
}