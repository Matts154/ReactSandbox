import React from "react";
import { Link, IndexLink } from 'react-router';

export default class NavItem extends React.Component {
	render () {
		// const { router } = this.context
		// const { index, onlyActiveOnIndex, to, children, ...props } = this.props
		//
		// const isActive = router.isActive(to, onlyActiveOnIndex)
		// const LinkComponent = index ? Link : IndexLink

		return (
			// <li className={isActive ? 'active' : ''}>
			<li>
				<Link to={this.props.to}>{this.props.children}</Link>
			</li>
		)
	}
}
