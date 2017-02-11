import React from "react";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<h1 class="jumbotron">Hello{this.props.name ? " " : ""}{this.props.name}!</h1>
		);
	}
}
