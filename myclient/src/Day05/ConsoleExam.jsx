const ConsoleExam = {
    time: () => {
        console.log("\n\n\n ====================> time")

        console.log("측정 시작")

        console.time("timecheck")

        for(let i = 0; i < 100; i++){
            console.log("timecheck ----------- " + i)
            console.timeStamp()
        }

        console.timeEnd("timecheck")
        console.log("측정 종료")
    },
    table: () => {
        console.log("\n\n\n ====================> table")

        const jsonarray = [
            {name: "홍길동", birth: 1997, gender: "남", address:"송파구" },
            {name: "김유신", birth: 2007, gender: "남", address:"중구"  },
            {name: "박명자", birth: 1998, gender: "여", address:"강북구"  },
            {name: "유제니", birth: 1987, gender: "여", address:"서대문구"  },
            {name: "노홍순", birth: 1997, gender: "여", address:"서초구"  },
        ]

        console.table(jsonarray)
    },

    log : () => {
        console.log("\n\n\n ====================> log")

        console.log("console.log를 사용한 array 객체 출력")
        console.log(["apple", "banana", "orange"])

        console.log("console.log를 사용해 json 객체를 출력")
        console.log({name: "홍길동", title: "test-file", age: 10})

        console.log("console.log를 사용해 여러개의 일자를 출력")
        console.log("test", [1,2,3], {name: "김자바"}, [{name: "홍길동", gender: "여"}])
    }, 
    dir : () => {
        console.log("\n\n\n ====================> dir")

        console.log("console.dir를 사용한 array 객체 출력")
        console.dir(["apple", "banana", "orange"])

        console.log("console.dir를 사용해 json 객체를 출력")
        console.dir({name: "홍길동", title: "test-file", age: 10})

        console.log("console.dir를 사용해 여러개의 일자를 출력")
        console.dir("test", "test", "test", "test")

        const obj = {
            outside : {
                inside : {
                    key: "value",
                    test: "test"
                }
            }
        }

        console.dir(obj)
        console.dir(obj, {colors: false, depth: 1})
        
        console.log("depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정, 기본값: 2")

        console.dir(obj)
    },
    rest: () => {
        console.log("\n\n\n ====================> rest")

        console.log("기본")
        console.info("정보")
        console.debug("디버그")
        console.warn("경고")
        console.error("에러")

        // console.trace("에러 위치 추적")
    }
}

module.exports = ConsoleExam