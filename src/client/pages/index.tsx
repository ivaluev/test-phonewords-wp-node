import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppBar from "../components/AppBar";
import Homepage from "./Homepage";
import NotFound from "./404";

export default function App() {
		return (
			<Router>
				<AppBar />
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		);
}

