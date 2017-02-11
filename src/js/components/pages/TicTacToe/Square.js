import React from "react";

export default class Square extends React.Component {
    constructor(){
        super();
    }
    render() {
        const style = {
            //background: "#fff",
            border: "1px solid #999",
            float: "left",
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "34px",
            height: "34px",
            marginRight: "-1px",
            marginTop: "-1px",
            padding: 0,
            textAlign: "center",
            width: "34px"
        }

        return (
            <button style={style} class="btn btn-primary" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
