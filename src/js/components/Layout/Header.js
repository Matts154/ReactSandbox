import React from "react";

import Nav from "./Header/Nav";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<Nav websiteTitle={this.props.websiteTitle} router={this.props.router} />
			</header>
		);
	}
}
