// let보다는 const를 쓰는게 좋다.

// 객체의 경우
const person = {
    name: 'jang',
    age: '30',
}

console.log(person);

person.name = 'baek';
person.age = '26';
console.log(person); // const는 재할당이 불가능하지만 객체 내부의 값을 바꿀 수 있다. 재할당만 금지

// 배열의 경우
const arr = [{
    name: 'jay',
    age: '26',
}]
console.log(arr);

arr.push({
    name : 'baek', 
    age : '25',
});
console.log(arr);