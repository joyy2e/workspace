const moment = require("moment")

const Moment = {
    today: () => {
        console.log("today ===> ")
        console.log(moment())
    },
    date: () => {
        console.log("date ===> ")
        console.log(moment("2022-01-27"))
        console.log(moment("20220127", "YYYYMMDD"))
    },
    format: () => {
        console.log("format ===> ")
        const date = moment(); // 오늘 날짜와 시간으로 만들 moment

        console.log("년/월/일" + date.format("YYYY/MM/DD"))
        console.log("시:분:초" + date.format("HH:mm:ss"))
        console.log("시:분:초" + date.format("hh:mm:ss"))
        console.log("요일 = " + date.format("dddd"))
        console.log("년-월-일 요일 ===>" + date.format("YYYY-MM-DD"))
        console.log("년-월-일 시:분:초===>" + date.format("YYYY-MM-DD HH:mm:ss"))
        console.log("년-월-일 요일 시:분:초 ===>" + date.format("YYYY-MM-DD dddd HH:mm:ss"))
        console.log("년-월-일 요일 시:분:초 밀리초 ===>" + date.format("YYYY-MM-DD dddd HH:mm:ss:SSS"))

        console.log("년-월-일 요일 시:분:초 밀리초 ===>" + date.format("YY년 MM월 DD일 dddd HH:mm:ss:SSS"))
    },
    add: () => {
        console.log("add or substract ===> ")

        // 날짜 더하기
        console.log(moment("2022-01-27").add(1, "days"))

        // 포맷을 같이 이용하자
        const day = moment("2022-10-10 10:10:10").add(1, "years").format("YYYY-MM-DD HH:mm:ss")
        console.log(moment("년 더하기 ===> " + day))
        
        console.log("월 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "months").format("YYYY-MM-DD HH:mm:ss"))

        console.log("일 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "days").format("YYYY-MM-DD HH:mm:ss"))

        console.log("시 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "hours").format("YYYY-MM-DD HH:mm:ss"))

        console.log("분 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "minutes").format("YYYY-MM-DD HH:mm:ss"))

        console.log("초 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "seconds").format("YYYY-MM-DD HH:mm:ss"))

        console.log("=======================================")

        console.log("년 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "years").format("YYYY-MM-DD HH:mm:ss"))

        console.log("월 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "months").format("YYYY-MM-DD HH:mm:ss"))

        console.log("일 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "days").format("YYYY-MM-DD HH:mm:ss"))

        console.log("시 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "hours").format("YYYY-MM-DD HH:mm:ss"))

        console.log("분 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "minutes").format("YYYY-MM-DD HH:mm:ss"))

        console.log("초 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "seconds").format("YYYY-MM-DD HH:mm:ss"))

        console.log("초 빼기 ===> " + moment("2022-10-10 10:10:10").subtract(1, "years").format("YYYY-MM-DD HH:mm:ss"))
    }, 
    diff: () => {
        // 시간의 차이
        console.log("diff ===================> ")

        console.log("년 차이 ==========> " + moment("2023-11-17").diff("2022-11-17", "years"))

        console.log("월 차이 ==========> " + moment("2022-10-17").diff("2020-9-17", "months"))

        console.log("일 차이 ==========> " + moment("2022-12-27").diff("2022-11-17", "days"))

        console.log("시 차이 ==========> " + moment("2022-11-27 10:10:10").diff("2022-11-27 12:10:10", "hours"))

        console.log("분 차이 ==========> " + moment("2022-11-27 10:10:10").diff("2022-11-27 10:30:10", "minutes"))

        console.log("초 차이 ==========> " + moment("2022-11-27 10:10:10").diff("2022-11-27 10:30:50", "seconds"))
    }
}

module.exports = Moment;