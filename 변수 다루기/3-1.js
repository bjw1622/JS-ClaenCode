const global = "global";
console.log(global);

// 웹 API 이기 떄문에 코드 작성시에 에러 발생 X
const setTimeout = 'setTimeout';

function setTimeout() {
    console.log('function');
}