import React from "react";

export default class Score extends React.Component {
	render() {
		const style = {
			display: "inline-block",
			marginRight: "10px",
			textAlign: "center",
		}
		return (
			<div class="jumbotron" style={style}>
				<h3>{this.props.name}</h3>
				<h1>{this.props.value}</h1>
			</div>
		);
	}
}
