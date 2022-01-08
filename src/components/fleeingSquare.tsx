import "./fleeingSquare.css";

import React, { Component } from "react";

interface IProps {}
interface IState {
	x: number;
	y: number;
	timer: number;
	speed: number;
	curLvl: number;
	over: boolean;
}

export default class FleeingSquare extends Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = { x: 46, y: 46, over: false, timer: 5, speed: 1000, curLvl: 0 };
	}

	teleport = () => {
		this.setState(
			{
				x: Math.floor(Math.random() * 92),
				y: Math.floor(Math.random() * 92),
				// since modern browser's timeout min wait is ~4ms, the game kind caps at lvl 100
				speed: this.state.curLvl > 100 ? this.state.speed : this.state.speed * 0.94268,
				timer: this.state.timer + (this.state.curLvl > 100 ? 100 : this.state.curLvl),
				curLvl: this.state.curLvl + 1,
			},
			() => setTimeout(this.clock, this.state.speed, this.state.curLvl)
		);
	};

	clock = (lvl: number) => {
		if (lvl === this.state.curLvl && !this.state.over) {
			if (this.state.timer < 0) {
				this.setState({ over: true });
			} else {
				this.setState({ timer: this.state.timer - 1 });
				setTimeout(this.clock, this.state.speed, lvl);
			}
		}
	};

	miss = (e: any) => {
		if (e.srcElement.id !== "target") {
			console.log("MISS");
			this.setState({ timer: this.state.timer - this.state.curLvl });
		}
	};

	componentDidMount() {
		document.addEventListener("click", this.miss);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.miss);
	}

	render() {
		return (
			<>
				<h1 className="points">Level: {this.state.curLvl}</h1>
					<div className="game-field">
						<div
							id="target"
							className="hc-text click-target"
							style={{
								top: this.state.over ? "46%" : this.state.y + "%",
								left: this.state.over ? "46%" : this.state.x + "%",
								backgroundColor: this.state.over ? "red" : "green",
								cursor: this.state.over ? "default" : "pointer",
							}}
							onClick={this.state.over ? () => undefined : this.teleport}
						>
							{this.state.over ? "" : this.state.timer}
						</div>
					</div>
			</>
		);
	}
}
