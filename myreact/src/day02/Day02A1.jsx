import React from 'react';

// 리액트의 초창기 작성 방법으로 클래스 형식의 작성방법이다.
export default class Day02A1 extends React.Component{
    render(){
        return(
            // 부모가 하나여야 한다는 문법적 제약 때문에 가짜 태그를 넣어준다.
            <> 
                {/* 이것은 주석입니다. */}
                <div>안녕하세요</div>
                <div>안녕하세요. 부모는 반드시 하나여야 합니다.</div>
            </>
        )
    }
}
