//2. 자바스트립트 참조 타입(객체 타입) 
//1) 참조타입: 참조타입은 하나의 값만 갖는 것이 아닌 여러개의 프로퍼티를 포함 가능 

//2) 객체 생성: 3가지 방법> Object() 객체 생성자 함수 이용 / 객체 리터럴 이용 / 생성자 함수 이용 
//2-1) Object() 생성자 함수 이용 
var foo = new Object();

//객체 프로퍼티 생성 
foo.name = 'foo';
foo.age = 20;
foo.gender = 'male'

console.log(typeof foo);  //objcet 
console.log(foo); //{ name: 'foo', age: 20, gender: 'male' }

//2-2) 객체 리터럴 방식 이용 : {이름 : 값 } 중괄호 이용
var foo2 = {
    name : 'foo2',
    age : 20,
    gender : 'male'
};
console.log(typeof foo2);  //objcet 
console.log(foo2); //{ name: 'foo2', age: 20, gender: 'male' }

//2-3) 생성자 함수 이용: 함수를 통해서 객체 생성 > 3장에서...

// 3) 객체 프로퍼티 읽기/쓰기/갱신 - 접근 : 대괄호 [] , 마침표 . 
// 3-1) 프로퍼티 읽기  
console.log(foo.name); // foo
console.log(foo['name']); //foo
console.log(foo.nicname); // undefined 

//3-2) 프로퍼티 갱신 
foo.age = 25;
console.log(foo.age);

//3-3) 프로퍼티 동적 생성 > 객체가 생성된 후에도 동적으로 프로퍼티를 생성해서 추가 가능 
foo.nicname ='jungee';
console.log(foo.nicname);

//3-4) 대괄호 표기법만을 사용해야하는 경우 : 프러퍼티가 표현식이거나 예약어인 경우  
foo['full-name'] ='foo bar';
console.log(foo['full-name']);
//console.log(foo.full-name); //에러 발생!!!



// 4) for in 문과 객체 프로퍼티 출력: 프로퍼티가 하나씩 할당됨 
for (var prop in foo){
    console.log("for in: ",prop, foo[prop]);
}
// for in:  name foo
// for in:  age 25
// for in:  gender male
// for in:  nicname jungee
// for in:  full-name foo bar

//5) 객체 프로퍼티 삭제 : 객체 자체는 삭제 못하고 프로퍼티만 삭제 가능 
var foo ={
    name : 'foo',
    nicname : 'babo'
};
console.log(foo);
delete foo;  //객체 자체는 삭제 못함 
console.log(foo);
delete foo.name;
console.log(foo); { nicname: 'babo' }


//6) 참조 타입의 특성: 값을 저장하는 것이 아닌 개체를 참조하는 값을 저장할 뿐임 
var objA ={
    val : 40
};
var objB = objA;

console.log(objA.val); //40
console.log(objB.val); //40 

objB.val = 50;
console.log(objA.val); //50
console.log(objB.val); //50 

//6-1) 객체 비교 
var a =100;
var b =100;

var objA ={value: 100};
var objB ={value: 100};

var objC = objB;

console.log(a==b); //true
console.log(objA==objB);//false
console.log(objB==objC); //true 

//6-2) 참조에 의한 함수 호출 방식 / 값에 의한 호출 : 매개변수로 복사된 값이 전달됨 
var a =100;
var objA = {value: 100};

function changeArg(num, obj){
    num =200;
    obj.value =200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA); //a: 값이 복사되어 전달 , objA: 참조값이 복사되어 전달되어 같은 값을 참조해서 변경가능 

console.log(a);
console.log(objA);