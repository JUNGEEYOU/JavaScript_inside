//3. 프로토타입: 자바스트립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
// 3-1) 객체 생성 및 출력 > 객체의 프로토타입은 objcect는 기본 내장 매서드 포함됨 
var foo = {
    name: 'foo',
    age: 30
};

console.log(foo.toString()); // 부모 객체에 정의되어 있어 오류발생 안함!!
console.dir(foo); 