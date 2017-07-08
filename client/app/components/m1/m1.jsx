function ListNum(props) {
	const nums = props.numbers;
	const a = nums.map(function(index, elem) {
		console.log(index, elem);
		return <li key={index}>{index}</li>
	});
	return <ul>{a}</ul>
}
var gnum = [1, 3, 5, 7, 9];
export default class Asdsdfsd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(),num: 0,value: '123'};
		this.malert = this.malert.bind(this);
		this.handlInput = this.handlInput.bind(this);
		this.refIns = this.refIns.bind(this);
		console.log(this);
	}
	malert(event) {
		console.log(this.state.num);
		this.setState((preState, props)=>({
			num: preState.num+1
		}));
	}
	handlInput(e){
		this.setState({value: e.target.value})
	}
	refIns(){
		console.log(this.te);
		this.te.focus();
		this.te.value = "change";
	}
	componentDidMount() {
		this.set1 = setInterval(()=>{
		/*	this.setState({
				date: new Date()
			})*/
			//gnum.push(parseInt((Math.random()*100), 10))
		},1000);
	}
	componentWillUnmount() {
		clearInterval(this.set1);
	}
	render() {
		return ( 
		 <div className="fist">
		 	<span>This is a React app!{this.props.dl}</span>
		 	<h5>Time is: {this.state.date.toLocaleTimeString()}</h5>
		 	<h4>Count: {this.state.num}</h4>
		 	<button className="btn btn-default" onClick={this.malert}>无所谓</button>
		 	<input className="form-control" ref={(input)=>{this.te = input}} defaultValue='123' />
		 	<button className="btn btn-default" onClick={this.refIns}>ref</button>
		 	<input className="form-control" type="text" value={this.state.value} onChange={this.handlInput} />	
		 	<ListNum numbers={gnum} />
		 </div>
		)
	}
}
const a = <p><span>sd</span>aaaaaaaaaaaa</p>
