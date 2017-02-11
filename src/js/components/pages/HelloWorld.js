import React from "react";

import Jumbotron from "./HelloWorld/Jumbotron"

export default class HelloWorld extends React.Component {
	constructor(){
		super();
		this.state = {name: ""};
	}

	changeName(e){
		this.setState({name: e.target.value});
	}

	render() {
		return (
			<main>
				<Jumbotron name={this.state.name} />
				<input onChange={this.changeName.bind(this)}/>
			</main>
		);
	}
}
