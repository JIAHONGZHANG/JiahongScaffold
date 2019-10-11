import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './sass/main.scss';
import ReactIcon from 'public/react-brands.svg'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="outer"><img src={ReactIcon} alt="react-icon" id="react-icon"/></div>
			</React.Fragment>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));