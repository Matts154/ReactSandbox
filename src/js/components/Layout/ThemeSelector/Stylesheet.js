import React from "react";

export default class Stylesheet extends React.Component {
	constructor(){
		super();
		// TODO: Get the stylesheet first before displaying it.
	}

	render() {
		return (
			<link href={this.props.href}  rel="stylesheet" type="text/css" />
		);
	}
}
