import React from "react";

import Board from "./TicTacToe/Board";
import Score from "./TicTacToe/Score";

export default class TicTacToe extends React.Component {
	constructor() {
        super();
        this.state = {
			history: [Array(9).fill(null)],
			gameState: "PLAYING",
			status: "Next player: X",
			x: true,
			board: {
				squares: Array(9).fill(null)
			},
			score: {
				x: 0,
				o: 0
			}
        };
    }

	jumpTo(i){
		if (this.state.history.length-1 !== i) {
			this.setState({gameState: "PLAYING", board: { squares: this.state.history[i]} });
		}
	}

    resetBoard() {
		this.setState({
			history: [Array(9).fill(null)],
			gameState: "PLAYING",
			status: "Next player: X",
			x: true,
			board: {
				squares: Array(9).fill(null)
			},
        })
    }

    handleClick(i) {
		if(this.state.board.squares[i] || this.state.gameState == "GAME_END")
            return;

		let newState = Object.assign({}, this.state);

		switch(this.state.gameState){
			case "PLAYING":
				newState = Object.assign(newState, this.processPlaying(i, newState));
			case "GAME_END":
				newState = Object.assign(newState,  this.processGameEnd(newState))
				break;
			default:
				console.error("INVALID GAME STATE!", this.state.gameState);
		}

		// Record board history
		this.state.history.push(newState.board.squares);

		this.setState(newState);
    }

	processPlaying(i, currentState) {
		let newState = {
			status: "Next player: " + (currentState.x ? "O" : "X"),
			x: !currentState.x,
			board: {
				squares: currentState.board.squares.slice()
			}
		};


		// Update board state
		newState.board.squares[i] = currentState.x ? "X" : "O";

		return newState;
	}

	processGameEnd(currentState) {
		if (currentState.gameState == "GAME_END")
			 return;

		let winner = this.calculateWinner(currentState.board.squares);

		if (winner) {
			let newState = {
				gameState: "GAME_END",
				status: "Winner: " + winner + "!",
				score: Object.assign(currentState.score)
			};

			if (winner == "X")
				newState.score.x++;
			else
				newState.score.o++;

			return newState;
		} else {
			let tie = this.calculateTie(currentState.board.squares);

			if (tie) {
				return {gameState: "GAME_END", status: "Cats game!"};
			}
		}

		return null;
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];

			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}

		return null;
	}

	calculateTie(squares){
		let tie = true;

		for (let i = 0; i < 10; i++) {
			if (squares[i] === null) { // Empty square. End loop early.
				tie = false;
				break;
			}
		}

		return tie;
	}

	render() {
		const moves = this.state.history.map((step, move) => {
			const desc = move ?
			'Move #' + move :
			'Game start';
			return (
				<li key={move}>
					<a onClick={() => this.jumpTo(move)}>{desc}</a>
				</li>
			);
		});
		return (
			<main id="tictactoe">
				<div id="scores">
					<Score
						name="Player X"
						value={this.state.score.x}
					/>
					<Score
						name="Player O"
						value={this.state.score.o}
					/>
				</div>
				<div>
					<p>{this.state.status}</p>
					<Board
						handleClick={this.handleClick.bind(this)}
						{...this.state.board}
					/>
				</div>
				<br />
				<button class="btn btn-danger" onClick={this.resetBoard.bind(this)}><i class="fa fa-ban fa-sm"></i> Reset</button>
			</main>
		);
	}
}
