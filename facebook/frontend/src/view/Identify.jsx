import Header from "./Header.jsx"

import { Image, Title, Subtitle, Button, Input } from "./Component"
import IMG_LOGO from "../images/facebook-logo.svg"
import { useState } from "react"
import axios from 'axios'

export default function Identify(props) {
    const [email, setEmail] = useState("")

    const onChangeEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const onClickCancle = (event) => {
        window.location.href="/"
    }

    const onClickSearch = (event) => {

        if(!email){
            alert("이메일을 입력하세요")
            return
        }

        let check = email.indexOf("@")
        if(check < 1){
            alert("이메일 형식에 맞지 않습니다.")
            return 
        }

        check = email.indexOf(".")
        if(check < 0){
            alert("이메일 형식에 맞지 않습니다.")
            return
        }

        axios.get('/api/identify', {params: {email}}).then((res) => {
            const {result, text} = res.data

            if(result === "fail" && text){
                alert(text)
            }else{
                alert("계정은" + result + "입니다.")
                window.location.href="/"
            }

        })
    }

    

    return (
        <div className="identify-layer">
        <div className="logo-box">
            <Image src={IMG_LOGO} alt="로고"/>
        </div>
        <div className="card-box">
            <div className="head">
            <Title text="내 계정 찾기" />
            </div>
            <div className="body">
                <Subtitle text="계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요." />
                <Input type="text" placeholder="이메일을 입력하세요." onChange={onChangeEmail} />
            </div>
            <div className="foot">
            <Button type="cancle" text="취소" onClick={onClickCancle}/>
            <Button type="primary" text="검색" onClick={onClickSearch} />
            </div>
        </div>
        </div>
    )
}