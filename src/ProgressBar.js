import React from 'react';

export default class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		let [orange, yellow, green] = [30, 55, 85];
		if (props.colors) {
			[orange, yellow, green] = props.colors;
		}
		this.colors = {orange, yellow, green};
	}

	updateProgress() {
		let percent = this.props.completed;
		let progress = {className: ''};
		let bar = {
			className: '',
			divStyle: {
				width: '0%'
			}
		};
		let text = '';
		let {orange, yellow, green} = this.colors;

		if (percent >= 100) {
			progress.className = 'progress--complete';
			bar.className = 'progress__bar--blue';
			text = 'Complete';
		} else {
			if (percent >= green) {
				bar.className = 'progress__bar--green';
			} else if (percent >= yellow) {
				bar.className = 'progress__bar--yellow';
			} else if (percent >= orange) {
				bar.className = 'progress__bar--orange';
			}
		}
		bar.divStyle.width = percent + '%';
		return {percent, progress, bar, text};
	}

	render() {
		const {percent, progress, bar, text} = this.updateProgress();
		return (
			<div className={'progress progress--active ' + progress.className}>
				<b className={'progress__bar ' + bar.className} style={bar.divStyle}>
					<span className="progress__text">
						Progress: <em>{percent} %  {text}</em>
					</span>
				</b>
			</div>
		)
	}
}