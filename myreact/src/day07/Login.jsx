import { useState, useRef } from "react";

export default function Login(props){
    //useState() : 상태관리
    const [userid, setUserId] = useState();
    const [password, setPassword] = useState();
    const login = useRef();
    const pass = useRef();
    const loginBtn = useRef();

    const onChangeInput = (event) => {
        console.log(event.target.value);
        setUserId(event.target.value);
    }

    const onChangePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const onLogin = (event) => {

       

        // userid === null || userid === undefined || userid === ""
        if(!userid){
            alert("사용자 아이디를 입력하세요.");
            login.current.focus();
            return;
        }

        if(!password){
            alert("사용자 비밀번호를 입력하세요.");
            pass.current.focus();
            return;
        }

        // 로그인이 되었습니다.
        alert(userid + "(" + password + ")" + "로 로그인 하였습니다.");
        
    }

    const onKeyUpId = (event) => {
        if(!userid){
            return
        }
        if(event.keyCode === 13){ // 엔터키이면
            // alert("enter key");
            pass.current.focus();
        }
        // console.log(event.keyCode);
    }

    const onKeyUpPass = (event) => {
        if(!password){
            return
        }
        if(event.keyCode === 13){ // 엔터키이면
            // alert("enter key");
            alert("로그인 성공!");
        }
        // console.log(event.keyCode);
    }

    return(
        <div className="login-box">
            <input ref={login} className="input-email" type="text" onChange={onChangeInput} placeholder="이메일 또는 전화번호를 입력하세요." onKeyUp={onKeyUpId}/>
            <input ref={pass} className="input-pass" type="password" onChange={onChangePassword} placeholder="비밀번호를 입력하세요." onKeyUp={onKeyUpPass}/>

            <button ref={loginBtn} className="login-button" name="login" onClick={onLogin}>로그인</button>

            <span>비밀번호를 잊으셨나요?</span>
            <div className="div-line"></div>
            <span>새 계정 만들기</span>
        </div>
    )
}