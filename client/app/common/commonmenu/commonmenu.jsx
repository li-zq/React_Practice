import './commonmenu.less';

export default class CommonMenu extends React.Component {
	constructor(props) {
		super(props);
		console.log('CommonMenu');
		this.spanStyle = {
			color: '#fff',
			fontSize: '23px',
			padding: '0.5rem 0 0 1rem',
			position: 'absolute'
		}
	}
	render(){
		return (
			<div>
				<div className="siderBar">
					<ul>
						<li>项目管理</li>
					</ul>
				</div>
				<div className="headerBar">
					<span style={this.spanStyle}>XX管理平台</span>
				</div>
			</div>
		)
	}
}