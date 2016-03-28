import React from 'react';
import ProgressBar from '../src/ProgressBar.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {completed: 0};
		this.timer = setInterval(this.tick.bind(this), 1000);
	}

	getRandomNumber() {
		return Math.floor((Math.random() * 100));
	}

	tick() {
		let completed = this.getRandomNumber();
		this.setState({completed});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const completed = this.state.completed;
		return (
			<div>
				<h1>Battle.net <b>style progress bar</b></h1>
				<ProgressBar completed={completed}/>
			</div>
		)
	}
}