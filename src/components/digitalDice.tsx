import "./digitalDice.css";

import React, { Component } from "react";

interface IProps {}
interface IState {
	sides: number;
	result: number;
	color: string;
	rolling: boolean;
}

export default class DigitalDice extends Component<IProps, IState> {
	static displayName = DigitalDice.name;

	constructor(props: any) {
		super(props);
		this.state = { result: 0, color: "black", sides: 9999, rolling: false };
	}

	// prettier-ignore
	colors = [
		'#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

	genColor = () => {
		for (;;) {
			var color = this.colors[Math.floor(Math.random() * this.colors.length)];
			if (color !== this.state.color) return color;
		}
	};

	rollDice = (ms: number) => {
		this.setState({
			result: Math.floor(Math.random() * this.state.sides),
			color: this.genColor(),
			rolling: true,
		});
		if (ms < 1024) setTimeout(this.rollDice, ms, ms * 1.25);
		else this.setState({ rolling: false });
	};

	render() {
		return (
			<div>
				<h1>Digital Dice</h1>
				<div className="flex-container">
					<div
						className="dice"
						style={{
							backgroundColor: this.state.color,
						}}
					>
						<span className="hc-text" style={{ fontSize: "26px" }}>
							{this.state.result.toString().padStart(Math.floor(Math.log10(this.state.sides) + 1), "0")}
						</span>
					</div>
					<div style={{ float: "left", marginLeft: "10px" }}>
						<label htmlFor="upto">Up to:</label>
						<br />
						<input
							type="number"
							name="upto"
							onChange={(e: any) => this.setState({ sides: e.target.value })}
							min="1"
							style={{ width: "96px", marginBottom: "10px" }}
							defaultValue="9999"
							disabled={this.state.rolling}
						/>
						<br />
						<button
							className="btn btn-primary"
							onClick={() => this.rollDice(1)}
							style={{ float: "left", width: "96px" }}
							disabled={this.state.rolling}
						>
							{this.state.rolling ? "Rolling" : "Roll"}
						</button>
					</div>
			</div>
				</div>
		);
	}
}
