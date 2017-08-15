import "./showPlugin.less";

export default class ShowPlugin extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='page'>
				<div className="container col-md-12">
					<div className="unit"></div>
					<div className="unit"></div>
				</div>
				<div></div>
			</div>
		)
	}
}