import Header from "./Header.jsx"

import { useState, useTransition } from "react";
import IMG_LOGO from "../images/facebook-logo.svg"
import {Input, Title, Image, Button, Linebar} from "./Component.jsx"
import axios from 'axios'

export default function Login(props){
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")

    const onChangeUserid = (event) => {        
        setUserid(event.target.value)
        // console.log(event.target.value);
    }

    const onChangePassword = (event) => {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    const onClickLogin = () => {
        console.log("아이디 : " + userid + " 비밀번호 : " + password);

        if(!userid){
            alert("이메일 또는 전화번호를 반드시 입력해주세요.")
            return
        }

        if(!password){
            alert("비밀번호를 반드시 입력해주세요.")
            return
        }

        axios.post("/api/login", {userid: userid, password: password}).then((res) => {
            console.log(res.data)
            const {result} = res.data
            if(result === "success"){
                // alert("로그인 성공")
                window.location.href="/home"
            }else{
                alert("로그인 실패")
            }
        })
    }

    return(
        <div className="login-layer">
            <div className="logo-box">
                <Image src={IMG_LOGO} alt="" />
                <Title text="Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요."></Title>
            </div>
            <div className="login-box">
                <div>
                    <div>
                        <Input type={"true"} placeholder="이메일 또는 전화번호" onChange={onChangeUserid}/>
                        <Input type={"true"}  placeholder="비밀번호" onChange={onChangePassword}/>

                        <Button type="primary" className="login-button" onClick={onClickLogin} text="로그인">로그인</Button>
                        <a onClick={() => window.location.href="/identify"}>비밀번호를 잊으셨나요?</a>
                        <Linebar/>
                        <div className="regist">
                            <Button type={"secondary"} onClick={() => window.location.href="/regist"} text="새 계정 만들기" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

