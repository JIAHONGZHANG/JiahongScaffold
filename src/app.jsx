import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './sass/main.scss';
import ReactIcon from 'public/react-brands.svg';
import 'antd/es/rate/style/index.css';
import { Rate } from 'antd';
class App extends Component {
	constructor(){
		super();
		this.desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
		this.state = {
			desc: 5
		}
	}

	handleChange = (value) =>{
		this.setState({
			desc: value
		})
	}

	render() {
		return (
			<React.Fragment>
				<div id="outer">
					<img src={ReactIcon} alt="react-icon" id="react-icon"/>
					<div style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)"
					}} id="z-icon">
					</div>
				</div>
				<span style={{
						position: "absolute",
						top:"10%",
						left:"50%",
						transform:"translateX(-50%)"
						}} >
					<div style={{fontSize:"2rem",textAlign:"center"}}>{this.desc[this.state.desc-1]}</div>
					<Rate onChange={this.handleChange} value={this.state.desc}/>
				</span>
			</React.Fragment>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));