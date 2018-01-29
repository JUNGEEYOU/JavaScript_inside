//4. 배열 

var colorArr =['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[4]);

// 1) 배열의 요소 생성: 배열도 객체처럼 동적으로 배열 원소를 추가 가능 
var emptyArr = [];
console.log(emptyArr[0]);

emptyArr[0] = 100;
emptyArr[3] ='eight';
emptyArr[7] = true;

console.log(emptyArr);//[ 100, , , 'eight', , , , true ]
console.log(emptyArr.length);//8

//2) 배열의 length 프로퍼티 - 명시적 변경 
var arr =[0, 1, 2];
console.log(arr.length);

arr.length =5;
console.log(arr.length);
console.log(arr);//[ 0, 1, 2, ,  ]

arr.length =2;
console.log(arr.length);
console.log(arr); //[ 0, 1 ]

//3) 배열 표준 메서드(push) 와 length 프로퍼티 
var arr =[0, 1,2];

arr.push(3);
console.log(arr);

arr.length =5;
arr.push(4);
console.log(arr);


//4) 배열과 객체 : 자바스크립트는 배열도 객체이다. 
// 4-1) 차이점과 유사점 
//colorsArray 배열 
var colorsArray =['orange', 'yellow', 'green'];
console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[2]);


//colorsObj 객체 
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

//배열도 객체
console.log(typeof colorArr);  //object
console.log(typeof colorsObj); //object 

console.log(colorArr.length);
console.log(colorsObj.length);  //undefined > 객체는 길이가 존재하지 않는다 

colorArr.push('red');
//colorsObj.push('red');  //에러 발생 > 객체는 배열 메서드를 사용 못함 / 배열은 객체를 상속 받아 객체에 대한 것을 사용 가능 


//배열의 프로토타입과 객체의 프로토타입 비교 
var emptyArr = [];
var emptyObj = [];

console.dir(emptyArr.__proto__); //Array.prototype
console.dir(emptyObj.__proto__); //Object.prototype


//4-2) 배열의 프로퍼티 동적 생성 > 배열도 객체이므로 동적으로 생성 가능 but 배열의 길이 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경됨!!
var arr =['zoro', 'one', 'two'];
console.log(arr.length);

//프로퍼티 동적 추가 
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);//3 
console.log(arr);

arr[3] ='red'; 
console.log(arr);
console.log(arr.length);  //4

//4-3) 배열의 프로퍼티 열거 
for (var prop in arr){
    console.log("prop: ",prop, arr[prop]);
}

//4-4) 배열 요소 삭제 (delete 연산자 사용 )> delete 연산자는 undefied로 변경할뿐 원소 자체를 삭제하지 않는다. >완전히 삭제할때 splice()
var arr =['arr', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);
console.log(arr.length); //4 

//4-5) 배열 완전히 삭제하기 > splice() 매서드 
var arr=['zero', 'one', 'two','three'];

arr.splice(2,1); //2번 원소를 1개 삭제 
console.log(arr);
console.log(arr.length);//3 

//5) Array() 생성자 함수 
// - 호출할 때 인자 1개이면서 숫자인 경우, 숫자 만큼 length를 갖고, undefined 
// - 그외: 호출된 인자를 요소로 갖는 배열 생성 
var foo = new Array(3);
console.log(foo);//[ , ,  ]
console.log(foo.length);//3

var bar = new Array(1,2,3);
console.log(bar);//[ 1, 2, 3 ]
console.log(bar.length); //3 


//6) 유사 배열 객체 : 일반 객체에 length 프로퍼티를 갖게 하는것> apply() 메서드를 통해 해결 (4.4.2.4 call과 apply 매서드를 이용한 명시적인 this 바인딩)
var arr =['bar'];
var obj ={name: 'foo', length: 1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);//{ '1': 'baz', name: 'foo', length: 2 }

//7) 기본 타입과 표준 메서드 : 기본타입도 객체처럼 표준 매서드를 호출 가능 
var num =0.5;
console.log(num.toExponential(1)); // 5.0e-1

console.log("test".charAt(2)); //s 


//8) typeof 연산자 : null, 배열은 object / 함수는 function/ undefined 는 undefined




