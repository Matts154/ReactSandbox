import React from "react";

import NavItem from "./Nav/NavItem";

export default class Nav extends React.Component {
	constructor(){
		super();
		this.state = {collapsed: true};
	}

	toggleCollapse(e){
		const collapsed = !this.state.collapsed
		this.setState({collapsed});
	}

	render() {
		return (
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
							<span class="sr-only">Toggle navigation</span>
							<i class="fa fa-bars fa-lg"></i>
						</button>
						<a class="navbar-brand" href="#">{this.props.websiteTitle}</a>
					</div>

					<div class= {this.state.isCollapsed ? 'navbar-collapse collapse' : 'navbar-collapse'}>
						<ul class="nav navbar-nav">
							<NavItem to="tic-tac-toe" onClick={this.toggleCollapse.bind(this)} router={this.props.router}>
								<i class="fa fa-gamepad fa-sm"></i>&nbsp;Tic-Tac-Toe
							</NavItem>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
