// 데이터베이스의 데이터를 임의로 만들자.

const users = [
    {id : 'sentron', name :'조병호', password : '1234'},
    {id : 'hong', name :'홍길동', password : 'abcd'},
    {id : 'kim', name :'김유신', password : '0000'}
]

const request = {
    regist : function(json){
        users.push(json);
        console.log(users);
    }
}