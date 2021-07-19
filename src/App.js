import React, { Component } from 'react';
import './calculate.scss';
import Calc from './Calc';
import History from './History';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			history: []
		};

		this.setHistory = this.setHistory.bind(this);
		this.historyClear = this.historyClear.bind(this);
	}

	setHistory(newHistory) {
		this.setState({
			history: this.state.history.concat(newHistory)
		});
	}

	historyClear() {
		this.setState({
			history: []
		});
	}

	render() {
		return (
			<div className="App">
				<div className="Container">
					<Calc setHistory={this.setHistory} />
					<History history={this.state.history} historyClear={this.historyClear} />
				</div>
			</div>
		);
	}
}

export default App;
