import "./rainbowGenius.css";

import React, { Component } from "react";

interface IProps {}
interface IState {
	curIndexAnimation: number;
	rightChoices: number;
	curState: gameState;
}

enum gameState {
	notBegun,
	playing,
	over,
}

export default class RainbowGenius extends Component<IProps, IState> {
	static displayName = RainbowGenius.name;
	static Rainbow = ["#000000", "#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#2e2b5f", "#8b00ff"];

	constructor(props: any) {
		super(props);
		this.state = { curIndexAnimation: 0, rightChoices: 0, curState: 0 };
	}
	order: number[] = [];
	index = 0;
	animation = false;

	animate(i: number = -1) {
		if (i === -1) this.order.push(Math.floor(Math.random() * 7) + 1);
		if (i <= this.order.length * 2) {
			setTimeout(
				() => this.setState({ curIndexAnimation: i + 1, rightChoices: 0 }, () => this.animate(i + 1)),
				i === -1 ? 500 : i % 2 === 1 ? 1000 : 200
			);
		} else {
			console.log("ending animation");
		}
	}

	check(e: number) {
		if (!this.animation) {
			const right = e === this.order[this.state.rightChoices];
			if (right && this.state.rightChoices + 1 === this.order.length) {
				this.setState({ rightChoices: this.state.rightChoices + 1 }, this.animate);
			} else if (right) {
				this.setState({ rightChoices: this.state.rightChoices + 1, curState: 1 });
			} else {
				this.setState({ rightChoices: 0, curState: 2 });
			}
		}
	}

	render() {
		this.animation = this.state.curIndexAnimation <= this.order.length * 2;

		return (
			<div className="parent center">
				<div
					className="center"
					onClick={() => {
						if (this.state.curState === 0) {
							this.setState({ curState: 1 }, this.animate);
						}
					}}
					style={{
						backgroundColor:
							RainbowGenius.Rainbow[
								this.state.curIndexAnimation % 2 === 1
									? this.order[
											this.state.rightChoices !== 0
												? this.state.rightChoices - 1
												: Math.floor(this.state.curIndexAnimation / 2)
									  ]
									: 0
							],
					}}
				>
					<span className="inside-text">
						{(() => {
							switch (this.state.curState) {
								case 0:
									return "Start";
								case 1:
									return this.state.rightChoices + "/" + this.order.length;
								case 2:
									return "Over";
							}
						})()}
					</span>
				</div>{" "}
				<div
					className="outer"
					onClick={() => this.check(1)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[1],
						top: "61.6941px",
						left: "-212.98px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(2)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[2],
						top: "-50.5771px",
						left: "-158.913px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(3)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[3],
						top: "-128.271px",
						left: "-61.4874px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(4)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[4],
						top: "-156.000px",
						left: "60.000px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(5)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[5],
						top: "-128.271px",
						left: "181.487px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(6)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[6],
						top: "-50.5771px",
						left: "278.913px",
					}}
				/>
				<div
					className="outer"
					onClick={() => this.check(7)}
					style={{
						cursor: this.animation ? "default" : "pointer",
						backgroundColor: RainbowGenius.Rainbow[7],
						top: "61.6941px",
						left: "332.98px",
					}}
				/>
			</div>
		);
	}
}
