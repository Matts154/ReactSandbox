import React from "react";

import Stylesheet from "./ThemeSelector/Stylesheet"

export default class ThemeSelector extends React.Component {
	constructor(){
		super();
		this.state = {selected: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"};
	}

	changeStyle(e){
		this.setState({selected: e.target.value});
	}

	render() {
		const themes = [
			{
				href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
				name: "Default"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css",
				name: "Cerulean"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css",
				name: "Cosmo"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cyborg/bootstrap.min.css",
				name: "Cyborg"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css",
				name: "Darkly"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css",
				name: "Flatly"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css",
				name: "Journal"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css",
				name: "Lumen"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css",
				name: "Paper"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/readable/bootstrap.min.css",
				name: "Readable"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/sandstone/bootstrap.min.css",
				name: "Sandstone"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/simplex/bootstrap.min.css",
				name: "Simplex"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css",
				name: "Slate"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css",
				name: "Spacelab"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css",
				name: "Superhero"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/united/bootstrap.min.css",
				name: "United"
			},
			{
				href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css",
				name: "Yeti"
			}
		].map((obj, i) => <option key={i} value={obj.href}>{obj.name}</option>)

		const style = {
			position: "absolute",
			left: "0px",
			top: "0px",
			color: "black"
		}

		return (
			<div>
				<Stylesheet href={this.state.selected} />
				<select style={style} onChange={this.changeStyle.bind(this)}>
				{themes}
				</select>
			</div>
		);
	}
}
