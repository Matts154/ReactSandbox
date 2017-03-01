import React from "react";

import Board from "./Gomoku/Board";

export default class Gomoku extends React.Component {
	constructor(){
		super();
		this.size = 20;
		this.rowLength = 5;

		this.state = {
			board: Array(this.size**2 + 1).fill(null),
			status: "Next player: White",
			whitesTurn: true,
			hasWon: false,
		};
	}

	handleClick(i){
		if ( this.state.board[i] !== null || this.state.hasWon ) { return; }

		let newState = Object.assign(this.state, {
			board: this.state.board.slice(),
			status: "Next player: " + (this.state.whitesTurn ? "White" : "Black"),
			whitesTurn: !this.state.whitesTurn,
		});

		newState.board[i] = this.state.whitesTurn;

		if( this.calculateWinner(newState.board, i) ){
			newState.status = "Winner: " + (this.state.whitesTurn ? "White!" : "Black!");
			newState.hasWon = true;
		}

		this.setState(newState);
		console.log("Clicked!", i);
	}

	calculateWinner(board, position){
		let lines = [];
		let winner = null;

		// Determine positions of pieces to check.
		for (let i = -this.rowLength + 1; i <= 0; i++) {
			let horizontal = [],
			    vertical = [],
				posDiagonal = [],
				negDiagonal = [];

			for (let j = 0; j < this.rowLength; j++) {
				const x = i + j;

				horizontal.push(position + x);
				vertical.push(position + (this.size - 1) * x);
				posDiagonal.push(position + (this.size - 2) * x);
				negDiagonal.push(position + this.size * x);
			}

			lines = [...lines, horizontal, vertical, posDiagonal, negDiagonal];
		}

		// For each line, see if each piece in that line is the current players.
		winner = lines.some(function(line) {
			return line.every(function(p, i, a) {

				// BROKEN! D: Intentional "&& false" so the code isnt executed.
				if(i > 0 && false) { // Fixing a bug where lines that wrap to new lines were valid.
					const curX = Math.floor(p % this.size);
					const prevX = Math.floor(a[i-1] % this.size);
					const xDelta = curX - prevX;
					console.log("curX:", curX, "prevX:", prevX, "xDelta:", xDelta);

					if (Math.abs(xDelta) > 1) {
						return false;
					}
				}

				return board[p] === this.state.whitesTurn;

			}, this);
		}, this);

		return winner;

	}

	resetBoard(){
		this.setState({
			board: Array(this.size**2).fill(null),
			status: "Next player: White",
			whitesTurn: true,
			hasWon: false,
		});
	}

	render() {
		return (
			<div id="gomoku">
				<p id="status">{this.state.status}</p>
				<Board
					board={this.state.board}
					size={this.size-1}
					onClick={this.handleClick.bind(this)}
				/>
				<br />
				<button class="btn btn-danger" onClick={this.resetBoard.bind(this)}><i class="fa fa-ban fa-sm"></i> Reset</button>
			</div>
		);
	}
}
