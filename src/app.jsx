import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './sass/main.scss';
import ReactIcon from 'public/react-brands.svg';
import Rating from './jsx/rating';

class App extends Component {
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
				<Rating/>
			</React.Fragment>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));