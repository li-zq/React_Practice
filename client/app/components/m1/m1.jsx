import React from 'react';
//import ReactDom from 'react-dom';

export default class Asdsdfsd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(),num: 0};
		this.malert = this.malert.bind(this);
		console.log(this);
	}
	malert(event) {
		console.log(this.state.num);
		this.setState({
			num: self.state.num++
		});
	}
	componentDidMount() {
		this.set1 = setInterval(()=>{
			this.setState({
				date: new Date()
			})
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
		 </div>
		)
	}
}
const a = <p><span>sd</span>aaaaaaaaaaaa</p>
