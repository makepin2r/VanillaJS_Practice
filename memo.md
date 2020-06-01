### Why JS

- What is JS : 하나뿐인 웹 프로그래밍 언어 (프론트엔드 - interactive하게) --> 웹 기반이니 빠르게 발전하는, 영향력 큰 언어. 웹 프론트엔드 개발자들이 할 수 있는 범주가 넓어진다!

### Versions of JS

- ECMAScript - Specification (매뉴얼같은 거)

###  Why VanillaJS

- 브라우저를 통해 제공된 날것의 자바스크립트
- 바닐라가 익숙해지면 --> 라이브러리, 프레임워크에서도 실력이 오른다.

----------------

### Expressions

- every expression has to be in **each one** line
- **;** : end of expressions

### Variables

- Create a variable --> Initialize --> Use

- variable changes

  ```js
  let a; // Create a
  a = 10; // initialize a
  let b = a - 5; // create b, and initialize b and use a
  console.log(b);
  ```

- 변수의 종류 : 기본으로 const를 쓰고 필요하기 전에는 let 사용하지 않는다 를 원칙으로...
  - **const** : constant. 초기화 후 바뀌지 않는다. (대입 불가능)
  - **let** : 변수 변화를 허용하는 것 빼고는 const와 똑같음
  - var : variable. let처럼 값을 바꿀 수 있음.

### Data Types

- string : text 묶음. 큰따옴표로 묶어줘야 한다

- boolean : true(1)/false(0)

- number

  - float (실수)

    

### Organizing Data 1. Array

- 리스트 형태로 데이터를 저장하는 것
- 어떤 형태의 데이터도 넣을 수 있으며, 자료형이 섞여도 상관 없음

```js
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // 대괄호에 데이터를 넣는다.
console.log(daysOfWeek); // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(daysOfWeek[2]) // Wed

const something = "Something";
const myArr = ["mon", 1, true, somthing];
```



### Organizing Data 2. Object

- name & value

```js
// object는 {}로 정의한다.
const myInfo = {
    name: "Lucy",
    age: 28,
    gender:"female",
    isHandsome: true
};
console.log(myInfo); // { name: "Lucy", age: 28, gender:"female", isHandsome: true }
console.log(myInfo.gender); // female
```

- name은 변수명과 같다. 텍스트가 아님
- object는 const로 정의했더라도, 내부의 값을 바꾸는 건 괜찮다.  단 그 자체를 바꾸는 건 불가능

```js
myInfo.gender = "Male"; // OK
myInfo = true; // ERROR
```

- Object는 Array 안에 요소로 들어갈 수 있으며, Array도 Object의 요소로 들어갈 수 있다.

```js
const arrInObj = {
    info : [1, 2, 3],
};

const ObjInArr = [
    {obj1: true},
    {obj2: true},
    {obj3: true},
    {obj4: true},
];
```



- TMI(?) : js가 망가져도 HTML, CSS는 영향 받지 않는다

