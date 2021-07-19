import React, { Component } from 'react';

class Calc extends Component {
	constructor(props) {	
		super(props);

		this.state = {
			input: "",
			opers: [],
			calc_times: 0
		};

		this.add = this.add.bind(this);
		this.allClear = this.allClear.bind(this);
		this.operator = this.operator.bind(this);
		this.calc = this.calc.bind(this);
	}


	add(x) {
		this.setState({
			input: this.state.input + x
		});
	}	

	allClear() {
		this.setState({input: "",
					   opers: [],
					   calc_times: 0
						});			
	}

	operator(oper) {
		if(oper === '=')
			this.calc();
		else if(this.state.input === "")
			return;
		else
		{
			this.add(oper);
			this.setState({
				opers: this.state.opers.concat(oper)
			});
			this.setState({
				calc_times: this.state.calc_times + 1
			});
		}
	}	

	calc() {
		var element = [];
		var result;
		var history = "";

		element = this.state.input.split(/\D/);

		for(var j = 0; j < element.length; j++)
		{
			if(element[j] === "")
				element[j] = "0";
		}

		result = Number(element[0]);
		history = element[0];
    	for(var i = 1; i <= this.state.calc_times; i++)
    	{
        	switch (this.state.opers[i-1])
        	{
         	   case '+':
           	    	result += Number(element[i]);
           	    	history += ' + ' + element[i];
            	    break;
            	case '-':
                	result -= Number(element[i]);
                	history += ' - ' + element[i];  
                	break;
            case '×':
                	result *= Number(element[i]);
                	history += ' × ' + element[i];
                	break;
            case '÷':
                	result /= parseFloat(Number(element[i]));
                	history += ' ÷ ' + element[i];
                	break;
            default:
                	break;
       		}
    	}
	this.props.setHistory(history + ' = ' + result);
	}
	
	render() {
		return (
			<div className="calc">
				<div className="calc__title">Calculator</div>
				<div className="calc__score">{this.state.input}</div>
				<div className="calc__keyboard">
					<div className="calc__keyboard__main">
						<div className="button calc__keyboard__ac" onClick={this.allClear}>AC</div>
						<div className="calc__keyboard__number">
							<div className="calc__keyboard__number__line">
								<div className="button button--blue" onClick={() => this.add(1)}>1</div>
								<div className="button button--blue" onClick={() => this.add(2)}>2</div>
								<div className="button button--blue" onClick={() => this.add(3)}>3</div>
							</div>
							<div className="calc__keyboard__number__line">
								<div className="button button--blue" onClick={() => this.add(4)}>4</div>
								<div className="button button--blue" onClick={() => this.add(5)}>5</div>
								<div className="button button--blue" onClick={() => this.add(6)}>6</div>
							</div>
							<div className="calc__keyboard__number__line">
								<div className="button button--blue" onClick={() => this.add(7)}>7</div>
								<div className="button button--blue" onClick={() => this.add(8)}>8</div>
								<div className="button button--blue" onClick={() => this.add(9)}>9</div>
							</div>
						</div>
						<div className="button button--blue--big" onClick={() => this.add(0)}>0</div>
					</div>
					<div className="calc__keyboard__operator">
						<div className="button button--deepblue" onClick={() => this.operator('+')}>+</div>
						<div className="button button--deepblue" onClick={() => this.operator('-')}>-</div>
						<div className="button button--deepblue" onClick={() => this.operator('×')}>×</div>
						<div className="button button--deepblue" onClick={() => this.operator('÷')}>÷</div>
						<div className="button button--pink" onClick={() => this.operator('=')}>=</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calc;
