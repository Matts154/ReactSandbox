import React from "react";

import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import ThemeSelector from "./Layout/ThemeSelector"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.websiteTitle = "React Sandbox"
		this.author = "Matt";
	}
	render() {
		return (
			<div class="container">
				<ThemeSelector />
				<Header websiteTitle={this.websiteTitle} router={this.props.router} />
					{this.props.children}
				<Footer />
			</div>
		);
	}
}
