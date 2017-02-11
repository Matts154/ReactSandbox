import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from "./components/Layout";
import HelloWorld from "./components/pages/HelloWorld"
import TicTacToe from "./components/pages/TicTacToe"

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={HelloWorld}></IndexRoute>
			<Route path="tic-tac-toe" component={TicTacToe}></Route>
		</Route>
	</Router>, app);
