import React from "react";

import Square from "./Square";

export default class Board extends React.Component {
	constructor(){
		super();
		const scale = 2;
		const padding = 5.5 * scale;
		this.state = {
			scale: scale,
		 	padding: padding,
		}
	}

	componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
		const scale = this.state.scale;
		const padding = this.state.padding;
		const size = 9 * scale;

		ctx.strokeRect(padding, padding, ((size**2)-size) * scale, ((size**2)-size) * scale);

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {

				if ( i < size - 1 && j < size - 1 ){
					ctx.strokeRect(padding + i * size * scale, // X position
								   padding + j * size * scale, // Y position
								   size * scale, size * scale); // Width, height
			   	}

				ctx.fillRect(i * size * scale, j * size * scale, size*1.25, size*1.25);

				if(this.props.board[i*j] !== null){
					ctx.beginPath();
    				ctx.arc(padding + i * size * scale, padding + j * size * scale, 4 * scale, 0, Math.PI * 2, true); // Outer circle
					this.props.board[i*j] ? ctx.stroke() : ctx.fill();
				}
			}
		}
    }

	handleClick(event) {
	    var rect = event.target.getBoundingClientRect();
	    var x = event.clientX - rect.left;
	    var y = event.clientY - rect.top;
	    console.log("x: " + x + " y: " + y);

	}

    render() {
        return (
			<canvas
				id="gomoku-board"
				width={(this.props.size**2 * this.state.scale)-this.props.size}
				height={(this.props.size**2 * this.state.scale)-this.props.size}
				onClick={this.handleClick.bind(this)}
				ref="canvas"
			/>
        );
    }
}
