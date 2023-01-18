import React from "react";

export default class Day03A3 extends React.Component{
    constructor(props){
        super(props);

        this.state = {birthday : 2000};
    }

    // 함수를 만들 떄 주의할 점은 this 사용을 위해 
    // 반드시 화살표 형식으로 작성
    onChangeSelect = (event) => {
        // console.log(this.state);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);

        this.setState({birthday : event.target.value});
    }

    render(){
        return <div>
            <h3>생년월일 : {this.state.birthday}</h3>
            <select onChange={this.onChangeSelect} value={this.state.birthday}>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>

            </select>
        </div>
    }
}