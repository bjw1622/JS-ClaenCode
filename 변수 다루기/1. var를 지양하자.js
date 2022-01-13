// var => 함수 스코프
// let, const => 블록 스코프
// let => 재할당 O
// const => 재할당 x, 선언 + 할당 동시에

var global = '전역';

if (global === '전역') {
  var global = '지역';
  console.log(global);
}

let letGlobal = '전역';

if (letGlobal === '전역') {
  let letGlobal = '지역';
  console.log(letGlobal);
}
console.log(letGlobal); // let, const는 블록 스코프이므로
