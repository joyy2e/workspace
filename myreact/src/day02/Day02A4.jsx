import { render } from "@testing-library/react";
import React from "react";

export default class Day02A4 extends React.Component{
    render(){
        console.log(this.props);
        return <h1>
            {this.props.title} {this.props.name} 입니다.
            </h1>
    }
}