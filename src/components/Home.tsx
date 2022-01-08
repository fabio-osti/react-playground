import React, { Component } from "react";
import logo from '../logo.svg';

export default class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<p>Welcome to your new single-page application, built with:</p>
				<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
			</div>
		);
	}
}
