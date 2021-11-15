# Javacsript

[[toc]]

## clouser에 대해 설명하고 예시가 있다면 설명해주세요.

## js에서 this란 무엇이고 어디에 사용되나요

context를 나타내며, 해당 스코프의 주인이라고 할 수 있다.
object그 자체 이거나 function그 자체를 나타내며

web에서의 `this` 차제는 `window`를 나타내며, 하위 객체 안에서는 그 객체 자체를 나타낸다.

화살표 함수 같은 경우는 this를 갖지 못한다.

## Difference between “==” and “===” ?

## ES6에 대해서 알고 계신가요? 사용하고 있는 ES6 feature들을 설명해 주세요

## let 과 var의 차이점과 활용도를 알려주세요

`let`는 재선언은 불가능하지만, 재할당은 가능하다.  
`var`는 재선언도 가능하고, 재할당도 가능하다.

두 변수 모두 hoisting이

## javascript 와 node는 어떻게 다른가요

javascript는 웹에서 동적 페이지를 생성하기 위한 script언어로 시작했다.  
이를 이용한 service를 만드는 frameworkd이 nodejs라고 할 수 있다.

큰 차이점은 javascript는 웹에서 사용하기 위한 script언어이고 nodejs는 이러한 javascript를 웹 밖에서도 사용할 수 있게 해주는 런타임 환경 자체라고 할 수 있다.
javscript runtime은 싱글 스레드, non-blockin IO를 사용하고 있으며, nodejs는 이러한 환경을 C/C++등의 언어로 구현한 런타임이다.

## hoisting 에 대해 설명해 주세요

스코프 안에서는 어디에 선언되든 최상위에 선언한 것과 같게 사용하는 것이다.
Javascript에서는 모두 호이팅을 지원한다.
let, var, function, const등이 있다.

TDZ (Temporal Dead Zone)이라는 개념에 따라서 const, let등은 hoisting과 별개로 동작하지 않는다.
`var`는 변수가 선언되는 시점이 언제든 최상단에 선언되는 방식으로 사용된다.

```js
console.log(name);
var name = "reone1";

var name;
console.log(name);
name = "reone1";
```

이와 같은 방식으로 호이스팅이 이뤄진다고 볼 수 있다.
`var name`은 `var name = undefined`와 같은 의미로 `console.log(name)`의 결과가 `undefined`가 발생하는 것과 같다.

하지만, `const`, `let`은 이와 같은 방식으로 사용하면 ReferenceError를 발생하게 된다.  
해당 에러는 선언된 변수가 할당되기 전에 사용하려 할 때 발생하는 에러로 syntaxError와 다르게 나타난다.

이처럼 할당되기 전 변수가 선언된 상태 (호이스팅으로 인한 선언)를 TDZ라고 할 수 있다.

이를 통해 let, conts, var는 모두 호이스팅을 지원하지만, const, let은 TDZ로 인해 error를 발생시킨다.

## call apply bind 에 대해 설명해 보세요. 언제 다르게 쓰나요?

모두 context와 관련이 있는 functiona prototype의 method이다.

- `call`  
  `call`은, 1인자로 context를 받고 나머지 인자를 통해 기존 함수의 변수를 받아 사용한다.

  ```js
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
  }

  console.log(new Food("cheese", 5).name);
  // expected output: "cheese"
  // ref: MDN Functions.prototype.call
  ```

  이처럼 선언된 Product함수의 this를 food의 this로 변경하여 실행하고 category라는 값을 추가하게 된다.

- `apply`
  `apply`는 `call`과 같이 `context`를 변경하고 변수를 할당할 수 있다.  
  다만, `call`과 다르게 인자를 배열의 형태로 받는다. 때문에 단 2개의 인자를 받을 수 있다.

- `bind`
  `bind`는 해당 함수를 호출하지 않고 context를 변경하는 역할을 한다.
  함수를 특정 context에 맞춰 변경하고자 할 때, 변수에 할당하여 사용한다.

## 자기실행함수의 결과가 어떻게 나오나요?

```js
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

## javascript array가 c 언어의 array와 어떻게 다른지 설명해 주세요

## deep 과 shallow object copy에 대해 설명해 주시고 용도가 있다면 말씀해 주세요

## javascript 의 null, undefined, undeclared 차이점은 무엇인가요

## 모든 자바스크립트 파일을 브라우저에서 한번에 loading 할 때 문제점

## 자바스크립트 Prototype에 관해 설명해주세요.

## promise에 대해서 설명해 주세요

## Array prototype splice 와 slice의 차이점은 무엇인가요

## OOP의 4가지 특징과 javascript를 활용하여 OOP스럽게 개발해 본 경험이 있다면 이야기해 주세요

## 탱크 게임 (혹은 기타 게임) 을 OOP적으로 어떻게 개발할 수 있을지 설명해 보세요.

## 익명함수와 선언적함수의 차이가 무엇인가요.

익명함수는 다음과 같이 변수에 함수의 형태를 할당하는 방식이다.

```js
let foo = function () {
  ...
}
```

선언적 함수는 함수를 생성할 때 그 이름을 등록하는 방식이다.

```js
function foo () {
  ...
}
```

똑같이 함수를 선언하여 사용할 수 있으나 두 방식은 호이스팅에서 차이가 발생한다.
선언적 방식을 사용하는 경우 스크립트 전체에 함수의 선언을 먼저 읽어오기 때문에, 어디에서도 호출하여 사용할 수 있다.

하지만, 익명함수의 경우 익명함수를 변수에 할당해 사용하는 시점에 따라서 함수의 실행이 되지 않을 수 있다.
항상 익명함수의 실행은 변수에 할당한 이후에 가능하다.

## Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?

## 타입스크립트에 대해서 들어보셨나요? 사용해본 경험은? 어떻게 다른가요? 장점은?

## 크롬 브라우저 외 ES6 스펙 지원이 되지 않는 브라우저의 경우 개발자로서 해결 방법은?
