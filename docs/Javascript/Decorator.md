---
title: Decorator
---

# Javascript Decorator

Nestjs를 통해 Back-end API server를 개발하며 사용했던 Docorator를 어떻게 사용하는지 간단하게 정리해본다.

## NestJs에서의 Decorator

NestJs를 사용할 때, decorator는 다양한 기능에서 사용하게 됩니다.

decortaor는 모듈(service, resovler, controller, module, 등)을 선언할 때, 붙여서 특정한 기능을 추가할 수 있도록 사용했다.

middleware처럼 모듈의 동작에서 특정한 기능을 먼저 처리하거나 후 처리도 가능하고, 특정한 중간 처리를 설정할 수 있다.

## Decorator?

일반적인 프로그래밍에서의 Decorator는 `decorator function`을 의미하며, 함수를 1급 객체로 취급하는 모든 언어는 Dcorator기능을 가지고 있다.
원글에서 python을 통한 예시를 간단하게 볼 수 있다.

```py
def cashify(fn):
    def wrap():
        print("$$$$")
        fn()
        print("$$$$")
    return wrap

@cashify
def sayHello():
    print("hello!")

sayHello()

# $$$$
# hello!
# $$$$
```

기본적으로 JS의 기능과는 약간 차이가 있고, 조금 더 직관적이기 때문에 python을 예시로 사용했다.

## Javascript Decorator와 속성 설명자

Decorator의 기능적인 측면을 설명하기 위해 먼저 필요한 개념이 있다.  
속설 설명자의 대한 설명이다.

자바스크립트 객체는 속성이 있고, 속성은 값을 가지고 있다.

```js
const oatmeal = {
  viscosity: 20,
  flavor: "Brown Sugar Cinnamon",
};
```

각 객체는 필드마다 값을 가지고 있으며 이러한 필드 한개를 속성이라고 할 수 있다.  
속성의 대한정보를 확인하는 method를 시용하면 다음과 같은 결과를 얻을 수 있다.

```js
console.log(Object.getOwnPropertyDescriptor(oatmeal, "viscosity"));

/*
{
  configurable: true,
  enumerable: true,
  value: 20,
  writable: true
}
*/
```

이는 ES5에서 추가된 속성 관련 설명을 확인하는 메서드이며, 설정 또한 가능하다.  
이 기능을 `속성 설명자`라고 한다.

위의 속성 설명자에 대한 간단한 설명을 보면,

- 구성 가능(configurable)은 속성 유형을 변경하거나, 객체에서 속성을 삭제할 수 있는지를 결정한다.
- 열거 가능(enumerable)은 Object.keys(oatmeal)를 호출하거나 for 루프에서 사용할 때처럼 객체의 속성을 열거할 때 속성을 표시할지 여부를 제어한다.
- 쓰기 가능(writable)은 할당 연산자 =를 통해 속성값을 변경할 수 있는지를 제어한다.
- 값(value)은 접근할 때 표시되는 속성의 정적 값이다. 속성 설명자 중에 유일하게 쉽게 볼 수 있고, 주로 우리가 관심을 두고 보는 부분이다. 함수를 포함한 모든 자바스크립트의 값이 올 수 있으며, 이 속성은 속성을 자신이 속한 객체의 메소드로 만든다.

## Reference

- [JavaScript Decorator 이해하기](https://wonism.github.io/what-is-decorator/)
- [자바스크립트 데코레이터 이해하기](https://ui.toast.com/weekly-pick/ko_20200102)  
  원글 [Understanding JavaScript Decorators](https://www.simplethread.com/understanding-js-decorators/)
