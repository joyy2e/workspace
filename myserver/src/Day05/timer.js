const TimeExam = {
    timeout: () => {
        // setInterval(()=>{
        //     console.log("뚕")
        // },100)
        setTimeout(()=>{
            console.log("1.5초 후에 실행됩니다.")
        }, 1500)
    }, 
    interval: () => {
        setInterval(() => {
            console.log("1초마다 실행됩니다.")
        }, 1000);
    },
    clear: () => {
        const timer1 = setTimeout(() => {
            console.log("3초 후에 실행됩니다.")
        }, 3000);

        const timer2 = setInterval(() => {
           console.log("1초 마다 실행됩니다.") 
        }, 1000 );

        // 2초 후에 실행될 타이머
        setTimeout(() => {
            console.log("2초 후에 실행됩니다.")

            // 첫번쨰 타이머 setTimeout 삭제
            clearTimeout(timer1);

            // 두번째 타이머 setTimeout 삭제
            clearTimeout(timer2);
        }, 2000);
    }
}

module.exports = TimeExam