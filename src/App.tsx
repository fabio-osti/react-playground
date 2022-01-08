import React from "react";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FleeingSquare from "./components/fleeingSquare";
import RainbowGenius from "./components/rainbowGenius";
import DigitalDice from "./components/digitalDice";
import LatinScript from "./components/latinScript";
import NavMenu from "./components/NavMenu";
import "./App.css";

function App() {
	return (<>
    <NavMenu />
		<Container>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/fleeing-square" element={<FleeingSquare />} />
					<Route path="/rainbow-genius" element={<RainbowGenius />} />
					<Route path="/digital-dice" element={<DigitalDice />} />
					<Route path="/latin-transcript" element={<LatinScript />} />
				</Routes>
			</div>
		</Container>
  </>
	);
}

export default App;
