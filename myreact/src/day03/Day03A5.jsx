import React from "react";

export default class Day03A5 extends React.Component{

    constructor(props){
        super(props);

        this.state = {radio : 0};
    }
    
    onChangeRadio = (type) => {
        console.log(type);
    }

    render(){
        return <div>
            <h3>RadioBox onChange</h3>
            윈도우 : <input type="radio" name ="os" onChange={(event) => this.onChangeRadio('window')}/>
            맥 : <input type="radio" name ="os" onChange={(event) => this.onChangeRadio('mac')}/>
            유닉스 : <input type="radio" name ="os" onChange={(event) => this.onChangeRadio('unix')}/>          
        </div>
    }

}