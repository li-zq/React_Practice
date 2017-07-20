import './commonmenu.less';
const Link = ReactRouter.Link;
const Redirect = ReactRouter.Redirect;

export default class CommonMenu extends React.Component {
	constructor(props) {
		super(props);
		console.log('CommonMenu');
		this.state = {
			isLogout: false
		}
		this.spanStyle = {
			color: '#fff',
			fontSize: '23px',
			padding: '0.5rem 0 0 1rem',
			position: 'absolute'
		}
		this.logout = this.logout.bind(this);
	}
	logout(){
		this.setState({
			isLogout: true
		})
	}
	render(){
		if(this.state.isLogout){
			return <Redirect to="login"/>
		}else{
			return (
				<div>
					<div className="siderBar">
						<div className="siderMenu">
							<Link to="/projectManage" replace>
								<span><i className="glyphicon glyphicon-th-large"></i> 项目管理</span>
							</Link>
							<div className="siderSubMenu">
							
							</div>
						</div>
						<div className="siderMenu">
							<Link to="/appManage" replace>
								<span><i className="glyphicon glyphicon-th-list"></i> 应用管理</span>
							</Link>
							<div className="siderSubMenu">
							
							</div>
						</div>
						<div className="siderMenu">
							<Link to="/sysManage" replace>
								<span><i className="glyphicon glyphicon-cog"></i> 系统管理</span>
							</Link>
							<div className="siderSubMenu">
							
							</div>
						</div>
					</div>
					<div className="headerBar">
						<span style={this.spanStyle}>XX管理平台</span>
						<span onClick={this.logout} style={{float: 'right',position: 'relative',top: '1.2rem',right: '1rem',color:'#fff',fontSize:'16px',cursor: 'pointer'}}><i className="glyphicon glyphicon-off"></i></span>
					</div>
				</div>
			)
		}
		
	}
}