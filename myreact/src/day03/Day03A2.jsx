import React from "react";

export default class Day03A2 extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {count : 0};
    }

    onButtonClick = () =>{
        console.dir(this.state);
        console.log(this.props);
        const {count} = this.state;
        const {max} = this.props;
        // const count = this.state.count;

        //props의 max까지만 카운팅 하고싶다.
        if(count >= max){
            this.setState({count : 0});
        }else{
            this.setState({count : count + 1});
        }
        
    }

    render(){
        return <div>
            <h3>카운트 : {this.state.count}</h3>
            <button type="button" onClick={this.onButtonClick}>클릭하세요.</button>
        </div>
    }
}