import React, { Component } from 'react';

class History extends Component {
	constructor(props) {	
		super(props);

		this.historyClear = this.historyClear.bind(this);
	}

	historyClear() {
		this.props.historyClear();
	}

	render() {

		const history = this.props.history.map(row => (<tr><td>{row}</td></tr>));

		return (
			<div className="history">
				<div className="history__title">History</div>
				<div className="button button--history--clear" onClick={this.historyClear}>HC</div>
				<table className="history__table">
					<tbody>
						{history}
					</tbody>
				</table>
			</div>
		);
	}
}

export default History;
