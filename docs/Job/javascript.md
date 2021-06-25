# Javacsript

[[toc]]

## clouser에 대해 설명하고 예시가 있다면 설명해주세요.

## js에서 this란 무엇이고 어디에 사용되나요

context

## Difference between “==” and “===” ?

## ES6에 대해서 알고 계신가요? 사용하고 있는 ES6 feature들을 설명해 주세요

## let 과 var의 차이점과 활용도를 알려주세요

## javascript 와 node는 어떻게 다른가요

## hoisting 에 대해 설명해 주세요

## call apply bind 에 대해 설명해 보세요. 언제 다르게 쓰나요?

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
