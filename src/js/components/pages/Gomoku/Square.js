import React from "react";

export default class Square extends React.Component {
    constructor(){
        super();
    }
    render() {
        let piece;

        if(this.props.value === true) {
            // piece = "W";
            piece = (<i class="fa fa-circle fa-fw gomoku-white"></i>);
        } else if (this.props.value === false){
            // piece = "B";
            piece = (<i class="fa fa-circle fa-fw gomoku-black"></i>);
        } else {
            piece = " ";
        }

        return (
            <button class="gomoku-button" onClick={() => this.props.onClick()}>
                {piece}
            </button>
        );
    }
}
