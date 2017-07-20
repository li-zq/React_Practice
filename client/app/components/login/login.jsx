import "./login.less";
const Redirect = ReactRouter.Redirect;

export default class Login extends React.Component {
	constructor(props){
		super(props);
		console.log('login');
		this.state = {
			userName: '',
			password: ''
		}
		this.phoneReg = /^1[3|4|5|7|8]\d{9}$/;
		this.userCheck = true;
		this.passCheck = true;
		this.handel = this.handel.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.handleUserName = this.handleUserName.bind(this);
		this.blurCheck = this.blurCheck.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}
	handel(){
		console.log(1);
	}
	formSubmit(e){
		e.preventDefault();
		this.isLogin = true;
		this.setState({});
		console.log(this.state.userName+' '+this.state.password);

	}
	handleUserName(e){
		this.setState({userName: e.target.value});
		if(this.phoneReg.test(e.target.value)){
			this.userCheck = true;
		}
	}
	handlePassword(e){
		this.setState({password: e.target.value});
		if(this.state.password.length < 6){
			this.passCheck = false;
		}else {
			this.passCheck = true;
		}
	}
	blurCheck(e){
		this.setState({userName: e.target.value});
		this.userCheck = this.phoneReg.test(e.target.value);
	}
	render(){
		if(!this.isLogin){
			return (
				<div className="content">
					<form className="form-horizontal col-md-12" style={{verticalAlign: 'middle'}} name="loginForm" role="form" noValidate>
					    
					    <div className="form-group">
					    	<div className="formInput">
					    		<i className="glyphicon glyphicon-user glyUser"></i>
					    		<input value={this.state.userName} onBlur={this.blurCheck} onChange={this.handleUserName} type="text" autoFocus="autofocus" className="form-control" placeholder="请输入您的手机号" required/>
					    		{!this.userCheck && <span className="inputError">用户名必须是手机号码</span>}
					    	</div>
					    </div>
					    <div className="form-group">
					    	<div className="formInput">
					    		<i className="glyphicon glyphicon-lock glyUser"></i>
					    		<input value={this.state.password} onChange={this.handlePassword} type="password" className="form-control" placeholder="请输入您的密码" required/>
					    		{!this.passCheck && <span className="inputError">密码长度大于等于6位</span>}
					    	</div>
					    </div>
					    <div className="form-group">
					    	<div className="formInput">
					    		<button onClick={this.formSubmit} type="submit" className="btn btn-default" disabled={!(this.userCheck&&this.state.userName&&this.state.password&&this.passCheck)}>登录</button>
					    		<span style={{paddingLeft: '1rem',cursor: 'pointer'}}>注册</span>
					    		<span style={{paddingLeft: '1rem',cursor: 'pointer'}}>忘记密码？</span>
					    	</div>
					    </div>
					</form>
				</div>	
			)
		} else {
			return <Redirect to="/projectManage"/>
		}
	}
}