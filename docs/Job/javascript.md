# Javacsript

[[toc]]

## closure 대해 설명하고 예시가 있다면 설명해주세요.

`closuer`는 함수를 return하는 일급함수의 일종으로, module화 하는 패턴 중하나 이다.
실행시의 선언전 환경을 가지고 실행되며, 이를 lexical environment라고 한다.

외부에 데이터를 숨기거나 접근할 수 없도록 정보의 은닉화를 가져갈 수 있어 module형태를 구성하는 하나의 패턴으로 사용 가능하다.

_간단한 클로저 패턴 예시_

```js
function couter() {
  let count = 0;
  return {
    increase() {
      return ++count;
    },
    decrease() {
      return --count;
    },
  };
}
```

## js에서 this란 무엇이고 어디에 사용되나요

context를 나타내며, 해당 스코프의 주인이라고 할 수 있다.
object그 자체 이거나 function그 자체를 나타내며

web에서의 `this` 차제는 `window`를 나타내며, 하위 객체 안에서는 그 객체 자체를 나타낸다.

화살표 함수 같은 경우는 this를 갖지 못한다.

## Difference between “==” and “===” ?

`==`는 순수한 값의 비교를 진행하며 타입의 차이는 이해하지 못한다.

```js
1 == "1"; // true
1.1 == "1.1"; // true
0 == false; // true
1 == true; // true
```

`===` strict equal operator로써 type의 같음까지 비교한다.

```js
1 === "1"; // false
1.1 === "1.1"; // false
0 === false; // false
```

## ES6에 대해서 알고 계신가요? 사용하고 있는 ES6 feature들을 설명해 주세요

- let, const keyword
  TDZ를 이용한 debuging에 효율적인 keyword 입니다. 기존에 var를 통한 변수 생성은 TDZ를 이용하지 않아 hoisting으로 인한 undefined를 연산하는 경우가 발생하거나 변수를 재선언하여 사용하는 문제들이 있었습니다.
- Arrow Functions
  선언식 함수가 아닌 arrow function을 통한 함수 생성이 가능합니다. 조금더 직관적인 관계를 파악할 수 있으며, 일반적인 변수선언과 같은 방식으로 함수를 사용할 수 있습니다.
- For/of
  배열을 순회할 수 있는 방식으로 해당 인덱스 순서에 따라 순회할 수 있습니다.
- Map Objects
  리스트 형식의 데이터를 생성합니다.
- Set Objects
  Set 형식의 데이터를 생성합니다.
- Classes
- Promises
- Symbol
- Default Parameters
- Function Rest Parameter
- String.includes()
- String.startsWith()
- String.endsWith()
- Array.from()
- Array.keys()
- Array.find()
- Array.findIndex()

## let 과 var의 차이점과 활용도를 알려주세요

`let`는 재선언은 불가능하지만, 재할당은 가능하다.  
`var`는 재선언도 가능하고, 재할당도 가능하다.

let은 hoisting으로 인한 TDZ이 발생할 수 있어 할당 전에는 접근이 불가능하다.

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
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

1,4,3,2로 나타난다.
자기 실행 함수로 인해서 선언된 함수가 바로 실행되면,
함수 실행 가장 첫 번째인, `console.log(1)`이 실행 stack에 저장됩니다.
이후 `console.log(1)` 리턴되어 console에 출력됩니다.
다음으로 setTimeout이 비동기 처리를 위한 web API에 할당되어 처리됩니다.
처리된 결과는 callback queue에 저장됩니다.
이와 같은 과정으로 다음 setTimeout도 web API에 처리를 요청하고 결과가 callback queue에 저장됩니다.
이후 `console.log(4)`를 스택에 추가하고 console에 4를 출력합니다.

timeout 0, 1000에 따라서 3이 먼저 callback queue에 저장되고 2가 다음에 저장되게 됩니다.

queue의 성질에 따라서 3,2순서로 실행 스택에 저장, 출력하는 단계를 거칩니다.

## javascript array가 c 언어의 array와 어떻게 다른지 설명해 주세요

heap에 값과 주소를 저장하여 다음 위치를 저장하는 방식
일정 메모리 안에 array의 모든 값을 순차적으로 저장하는 방식
때문에, C 의 array는 크기가 한정정으로 되어 있다.

<!-- ## deep 과 shallow object copy에 대해 설명해 주시고 용도가 있다면 말씀해 주세요 -->

## javascript 의 null, undefined, undeclared 차이점은 무엇인가요

선언하면서 값을 비우도록 강제하는 것 null
선언조차 하지 않은 변수 undeclared, type은 undefined
값이 할당되지 않은 변수 `undefined`

## 모든 자바스크립트 파일을 브라우저에서 한번에 loading 할 때 문제점

자바스크립트 파일을 불러와 실행하는 과정은 동기로 처리되기 때문에, 웹에서의 모든 행동이 막히게 됩니다. 스크립트 파일을 많이 불러오거나, 그 처리 과정이 복잡하고 오래걸리는 경우 사용자가 브라우저를 이용하지 못하는 현상이발생할 수 있습니다.

이로 인해 lazy import나 dynamic import를 통해서 번들의 크기를 줄이는 과정이 필요하게 됩니다.

<!-- ## 자바스크립트 Prototype에 관해 설명해주세요.-->

## promise에 대해서 설명해 주세요

비동기 처리를 위한 하나의 메서드로 es6에서 도입된 문법입니다.
Promise 객체는 resolve를 통해 return을 발생하고 그 전까지의 처리를 보류할 수 있습니다. pending, resolve, reject의 staging을 가지고 있으며,
모든 실행 stack이 비워진 이후에 then, catch 명령어를 실행하게 됩니다.

<!-- ## Array prototype splice 와 slice의 차이점은 무엇인가요 -->
<!--
## OOP의 4가지 특징과 javascript를 활용하여 OOP스럽게 개발해 본 경험이 있다면 이야기해 주세요 -->

<!-- ## 탱크 게임 (혹은 기타 게임) 을 OOP적으로 어떻게 개발할 수 있을지 설명해 보세요. -->

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

## Can you describe the main difference between a .forEach() loop and a .map() loop and why you would pick one versus the other?

map은 일정한 return을 필요로 할 때 사용합니다.
forEach는 배열을 순회하면서 각 값에 따른 일정한 함수를 실행하는데 적절합니다.

map은 처리한 결과를 다른 배열의 형태로 return하게 되고, forEach는 실행한 결과와 무관하게 return이 없이 실행됩니다.

## 타입스크립트는 어떻게 다른가요? 장점은?

typescript는 자바스크립트를 위한 하나의 문법확장이라고 볼 수 있습니다.
type에 자유로운 javascript에게 type을 강제하여 사용할 수 있게 해줍니다.

변수에 할당할 수 없는 타입이나 함수의 I/O를 관리할 수 있게 해줍니다.
이를 통해 협업간의 함수의 활용이나 변수의 용도를 통일성있게 구성할 수 있습니다.

## 크롬 브라우저 외 ES6 스펙 지원이 되지 않는 브라우저의 경우 개발자로서 해결 방법은?

babel을 이용한 bundling을 통해서 호환을 맞출 수 있습니다.
번들러는 문법을 각 환경에서 사용할 수 있는 방식으로 변경하여 적용하는데 큰 역할을 할 수 있습니다.
