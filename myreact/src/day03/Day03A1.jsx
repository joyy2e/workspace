import React from "react";

export default class Day03A1 extends React.Component{
    // 컴포넌트가 최초 생성될 때 한 번 호출된다.
    constructor(props){
        super(props);
        
        console.log("constructor() ==================>");
        this.state = {count : Number(props.start)};
    }

    // 컴포넌트가 생성되고 render가 호출된 후 호출된다.
    // HTML(DOM)이 만들어지고 나서 호출된다.
    componentDidMount(){
        console.log("componentDidMount() ==================>");

        // setInterval(function, time) 함수는 두번째 파라메터 시간 마다(ms)
        // 매번 주기적으로 첫번째 함수를 호출하는 타이머 함수이다.
        setInterval(() => {
            // 1초마다 한번 씩 여기를 자동으로 호출해준다.
            // console.log("timer =======>");
            // 카운트를 한개싞 증가하기 위해서 사용(1초마다 1개씩)
            this.setState({ count : this.state.count + 1});
        }, 1000);
    }

    render(){
        return <div>카운트 : {this.state.count} </div>
    }
}