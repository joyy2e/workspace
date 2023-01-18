/*
자판기라는 함수를 정의

자판기 함수는 처음에 실행되었을 때
'자판기가 가동되었습니다" 라는 콘솔이 로그

파라미터(인자, 매개변수)로는  coin과 메뉴 이름

반환값은
잔돈이 0원이면 음료수 이름을 반환
잔돈이 있으면 음료수 이름과 잔돈을 반환

만약, 선택한 음료수의 값이 coin보다 클 경우
console.log 금액이 부족합니다.

메뉴가 없다면 console.log 없는 메뉴입니다.

메뉴

솔의눈 300원
비타500 500원
콜라 1000원

조건) else if 사용 x

*/

function 자판기(coin, product){
    let menu = {
        솔의눈 : 300,
        비타500 : 500,
        콜라 : 1000
    };

    let productPrice = menu[product];

    if( !productPrice ) return console.log("제품이 없습니다.");
    if( coin < productPrice ) return console.log("금액이 부족합니다.")

    let change = coin = productPrice;
    if(change === 0 ) return console.log(product);
    return console.log(`주문하신 ${product}이/가 나왔습니다. 잔돈은 ${change}입니다`);

}