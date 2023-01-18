// 1. 가장 큰 값 구하기
function maxValue(arr){

    arr.sort(function(a, b){
        if(a > b) return -1;
        else if(b > a) return 1;
        else return 0;
    })

    let result = {
        maxValue : Math.max.apply(null, arr),
        sortArr : arr
    }

    console.log(result);
}

// 2. 편의점 물건 확인하기
function convenienceStore(product, count){

    let table = {
        '야채곱창' : 5,
        '바나나우유' : 10,
        '삼각김밥' : 15,
        '도시락' : 10,
        '샌드위치' : 10
    }

    for(let i = 0; i < 5; i++){
        if(product === Object.keys(table)[i] && count === Object.values(table)[i]) return console.log('전산표와 일치합니다.')
        if(product === Object.keys(table)[i] && count != Object.values(table)[i]) return console.log('전산표와 일치하지 않습니다.')
        if(product != Object.keys(table)[i] || count === Object.values(table)[i]) return console.log([product])
    }


}

// 3. 배열 다루기
function arrHandle(arr, num){

    // 배열 요소에 10씩 더하기
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 10;
    }

    // num 이라는 파라미터로 들어온 값이 배열에 속해있는지 확인    
    let idx = arr.indexOf(num)

    if(arr.includes(num)){
        arr.splice(idx, 1)
        console.log(arr)
    } else{
        console.log("결과값이 없습니다.")
    }

}

// 4. 짝수와 홀수의 개수 구하기
function solution(arr){

    let evenArr = [];
    let oddArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0) evenArr += arr[i];
        if(arr[i] % 2 != 0) oddArr += arr[i];
    }

    let evenArrLength = evenArr.length;
    let oddArrLength = oddArr.length;

    let result = [evenArrLength, oddArrLength]

    console.log(result)
    
}
