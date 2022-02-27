import React, { Component } from "react";

interface IProps {}
interface IState {
	translation: string;
}

export default class LatinScript extends Component<IProps, IState> {
	static displayName = LatinScript.name;

	constructor(props: any) {
		super(props);
		this.state = { translation: "" };
	}

	translate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({
			translation: e.target.value
				.toUpperCase()
				.replaceAll(" É ", " EST ")
				.replaceAll("U", "V")
				.replaceAll(" ", "·")
				.replaceAll("AE", "Æ")
				.normalize("NFD")
				.replace(/([\u0300-\u036f]|[^0-9a-zA-Z·Æ])/g, '')
				.split("")
				.join(" "),
		});
	};

	render() {
		return (
			<div>
				<h1>Latin Transcript</h1>
				<textarea style={{ marginRight: "16px", resize: "none" }} rows={8} cols={64} onChange={this.translate} />
				<textarea
					style={{ backgroundColor: "white", resize: "none" }}
					rows={8}
					cols={64}
					disabled={true}
					value={this.state.translation}
				/>
			</div>
		);
	}
}
