import React from "react";

// export default class Day02A3 extends React.Component{
//     render() {
//         const islogin = "N";
//         return(
//             <>
//                 {/* 삼항 연산자(if) */}
//                 {islogin === "Y" ? <div>회원입니다.</div> : <div>비회원 입니다.</div>}
//             </>
//         )
//     }
// }


// export default class Day02A3 extends React.Component{
//     render() {
//         const islogin = "Y";
//         let title = "";

//         if(islogin === "Y") title = <div>회원입니다.</div>
//         else title = <div>비회원입니다.</div>

//         return title;
//     }
// }

// export default function Day02A3(){
//     const islogin = "N";
//     return(
//         <>
//             {/* 삼항 연산자(if) */}
//             {islogin === "Y" ? <div>회원입니다.</div> : <div>비회원 입니다.</div>}
//         </>
//     )
// }

export default function Day02A3(){
    const islogin = "Y";
        let title = "";

        if(islogin === "Y") title = <div>회원입니다.</div>
        else title = <div>비회원입니다.</div>

        return title;
}