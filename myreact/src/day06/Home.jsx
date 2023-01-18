import { useState } from "react"
import SAMPLE_IMG from "./images/sample-image.jpg"
import CLOSE_IMG from "./images/close.png"
import GAME_1 from "./images/game-1.jpg"
import GAME_2 from "./images/game-2.jpg"
import GAME_3 from "./images/game-3.jpg"

//리팩토링 택하기 전
// export default function Home(props){
//     const [count, setCount] = useState(0)

//     const onClickLink = (event) => {
//         window.open("http://www.daum.net");
//     }

//     const onClickLike = (event) => {
//         setCount(count + 1);
//     }

//     return(
//         <section className="container">
//             <ul className="list">
//                 <li>
//                     <div className="card">
//                         <img src={SAMPLE_IMG} alt="샘플이미지" />
//                         <div className="text">
//                             <span className="title" onClick={onClickLink}>Chn & Kwon</span>
//                             <span className="label">변호사 및 법률 사무소</span>
//                             <span className="label">정천수 님 외 {count} 명이 페이지를 좋아합니다. </span>
//                         </div>
//                         <button onClick={onClickLike}>좋아요</button>
//                         <span className="btn-box">
//                             <img src={CLOSE_IMG} alt="닫기 버튼" />
//                         </span>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//     )
// }

// 1차로 반복적인 아이템을 리팩토링하자
export default function Home(props){
    // const [count, setCount] = useState(0);
    const [list, setList] = useState([
        // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        {name: 'Cha & Kwon', title: '변호사 및 법률 사무소', text: '정천수 님 외', img : GAME_1, count: 0},
        {name: '홍길동', title: '우리의 영웅', text: '1단 입니다.', img : GAME_2, count: 0},
        {name: '이순신', title: '임진왜란', text: '12척의 배가 있습니다.', img : GAME_3, count: 0},
        {name: 'Cha & Kwon', title: '변호사 및 법률 사무소', text: '정천수 님 외', img : GAME_1, count: 0},
        {name: '홍길동', title: '우리의 영웅', text: '1단 입니다.', img : GAME_2, count: 0},
        {name: '이순신', title: '임진왜란', text: '12척의 배가 있습니다.', img : GAME_3, count: 0}
    ]);

    const onClickLink = () => {
        window.open("http://www.daum.net");
    }

    const onClickLike = (item) => {
        item.count = item.count + 1;
        // const array = [...list]
        // setList(array)

        // 배열 업데이트 하는 방법 [...x]
        setList([...list]);
        // setCount(count + 1);
    }

    return(
        <section className="container">
            <ul className="list">
                {/* 반복될 요소 */}
                {
                    list.map(item => {
                        // console.log(item);
                        return <li>
                            <div className="card">
                                <img src={item.img} alt="샘플이미지" />
                                <div className="text">
                                    <span className="title" onClick={onClickLink}>{item.name}</span>
                                    <span className="label">{item.title}</span>
                                    <span className="label">{item.text} </span>
                                    <span className="label">{item.count} </span>
                                </div>
                                <button onClick={() => onClickLike(item)}>좋아요</button>
                                <span className="btn-box">
                                    <img src={CLOSE_IMG} alt="닫기 버튼" />
                                </span>
                            </div>
                        </li>
                    })
                }
                
            </ul>
        </section>
    )
}