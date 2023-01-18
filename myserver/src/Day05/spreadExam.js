const spredExam = {
    // 배열 병합
    exam01: () => {
        // ES5 배열 병합 기존 방식
        console.log("ES5 배열 병합 기존 방식 시작 ===================");
        var arr1 = [1, 2, 3];
        var arr2 = [4, 5, 6];

        var arr3 = arr1.concat(arr2);

        console.log(arr3);
        console.log("ES5 배열 병합 기존 방식 끝 ===================");

        // ES6 spread operator
        console.log("ES6 spread operator 시작 ===================");
        var arr4 = [...arr1, ...arr2];
        console.log(arr4);
        console.log("ES6 spread operator 끝 ===================");
    }
}

module.exports = spredExam