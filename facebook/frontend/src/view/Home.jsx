import MORE_ICON from '../images/more.png'
import HOME_ICON from '../images/home.png'
import YOUTUBE_ICON from '../images/youtube.png'
import PEOPLE_ICON from '../images/people.png'
import EDU_ICON from '../images/edu_icon.png'
import MAIN_IMAGE1 from '../images/game-1.jpg'
import MAIN_IMAGE2 from '../images/game-2.jpg'
import MAIN_IMAGE3 from '../images/game-3.jpg'

import Header from './Header.jsx'

import {Input, Title, Image, Button, Linebar} from "./Component.jsx"
import { useEffect , useState } from 'react'

import axios from 'axios'

export default function Home(props) {
    const [array, setArray] = useState([])

    // 초기화
    useEffect(() => {
        axios.get('/api/home', {}).then((res) => {
            setArray(res.data.result)
        })
    }, [])

    const onRefreshHome = () => {
        console.log("refresh")
        axios.get('/api/home', {}).then((res) => {
            setArray(res.data.result)
        })
    }

    return (
        <>
            <Header name="home"/>
            <section className="home-layer">
                <ul className="list">
                    {array && array.map((item, index) => {
                       return <CardBox key={index} value={item} onRefresh={onRefreshHome} />
                    })}
                </ul>
            </section>
        </>
    )
}

const CardBox = (props) =>{
    
    const {no, title, subtitle, tags, url, text, image, likecount} = props.value

    const onClickLike = () => {
        
        axios.put("/api/home/like", {no: no, like: 1}).then((res)=>{
            props.onRefresh()
        })
        
    }
    const onClickComment = () => {
    
    }
    
    return<>
    <li>
        <div className="card">
            <div className="head">
                <div>
                    <Image src={EDU_ICON} alt="광고 아이콘" />
                    <span className="title">{title}</span>
                    <Image className="more" src={MORE_ICON} alt="광고 아이콘" />
                </div>
                <div className="text">
                    <p>{subtitle}</p>
                    <p className="blue">{tags}</p>
                </div>
            </div>
            <div className="body">
                <div className="image">
                    <Image src={image} alt="광고 메인 이미지" />
                </div>
                <div className="text">
                    <div>
                        <p className="grey sm">{url}</p>
                        <p className="bold">{text}</p>
                    </div>
                    <button>더 알아보기</button>
                </div>
            </div>
            <div className="foot">
                <div className="btn-box active">
                    <div>
                        <Image src={HOME_ICON} alt="홈 바로가기" />
                        <span className="btn-text" onClick={onClickLike}>좋아요 ({likecount})</span>
                    </div>
                </div>
                <div className="btn-box">
                    <div>
                        <Image src={YOUTUBE_ICON} alt="동영상 바로가기" />
                        <span className="btn-text"onClick={onClickComment}>댓글 달기</span>
                    </div>
                </div>
                <div className="btn-box">
                    <div>
                        <Image src={PEOPLE_ICON} alt="사용자 바로가기" />
                        <span className="btn-text">공유 하기</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
    </>
}



