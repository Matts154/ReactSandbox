import React from "react";

import Square from "./Square";

export default class Board extends React.Component {
	constructor(){
		super();
		const scale = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth)/250;
		const padding = 5.5 * scale;
		const circleSize = 2.5 * scale;
		const squareSize = 9 * scale;
		console.log(scale);
		this.state = {
			scale: scale,
		 	padding: padding,
			circleSize: circleSize,
			squareSize: squareSize
		}
	}

	componentDidMount() {
        this.updateCanvas();
    }

	componentDidUpdate(nextProps, nextState) {
		this.updateCanvas();
	}

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
		const scale = this.state.scale;
		const padding = this.state.padding;
		const circleSize = this.state.circleSize;
		const squareSize = this.state.squareSize;

		ctx.fillStyle = "#DCB77C";
		ctx.fillRect(0, 0, squareSize * (this.props.size**2), squareSize * (this.props.size**2));
		ctx.fillStyle = "black";

		for (let x = 0; x < this.props.size; x++) {
			for (let y = 0; y < this.props.size; y++) {
				const index = y * this.props.size + x;

				if ( y < this.props.size - 1 && x < this.props.size - 1 ){
					ctx.strokeRect(padding + x * squareSize, // X position
								   padding + y * squareSize, // Y position
								   squareSize, squareSize); // Width, height
			   	}

				if(this.props.board[index] !== null){
					ctx.beginPath();
    				ctx.arc(padding + x * squareSize , padding + y * squareSize , circleSize, 0, Math.PI * 2, true); // Outer circle

					this.props.board[index] ? ctx.fillStyle = "white" : ctx.fillStyle = "black";

					ctx.stroke();
					ctx.fill();
				}
				//ctx.fillStyle = "black";
				//ctx.fillText(index, padding + x * squareSize, padding + y * squareSize);
			}
		}
    }

	handleClick(event) {
	    const rect = event.target.getBoundingClientRect();
	    const x = event.clientX - rect.left;
	    const y = event.clientY - rect.top;
		const index = (Math.floor((y / this.state.squareSize) % this.props.size) * this.props.size) + Math.floor((x / this.state.squareSize) % this.props.size);
	    //console.log("x: " + x + " y: " + y);
		//console.log( Math.floor((x / this.state.squareSize) % this.props.size),
		// 			 Math.floor((y / this.state.squareSize) % this.props.size) );
		this.props.onClick(index);
	}

	handleResize(event) {
		this.setState({scale: (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth)/250})
	}

    render() {
        return (
			<canvas
				id="gomoku-board"
				width={(this.props.size * this.state.squareSize) + this.state.padding-5}
				height={(this.props.size * this.state.squareSize) + this.state.padding-5}
				onClick={this.handleClick.bind(this)}
				ref="canvas"
			/>
        );
    }
}
