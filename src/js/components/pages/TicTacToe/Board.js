import React from "react";

import Square from "./Square"

export default class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />;
    }

    render() {
        const styles = {
                boardRow: {
                clear: "both",
                content: "",
                display: "table"
            },
            board: {
                display: "inline-block",
            }
        }

        return (
            <div id="board" style={styles.board}>
                <div style={styles.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div style={styles.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div style={styles.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
