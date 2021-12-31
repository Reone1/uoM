# javascript Prototype

[Referrence](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)

자바스크립트가 클래스가 아닌 새로운 패턴의 prototype을 사용하게 되었는가에 대한 깊은 고찰을 보고 간단하게 내용을 정리하려 한다.
해당 글은 과거 철학적인 접근에서 비롯한 객체지향과 prototype의 기반하여 javascript가 prototype을 선택한 이유에 대해 서술하였고

javascript가 prototype을 선택한 이유로 발생하는 this와 hositing의 원리를 설명하고 있다.

## javascript는 왜 prototype을 사용하게 되었는가?

### class와 prototype은 어떤 차이가 있는가?

java는 대표적인 class기반 oop를 사용한다.
java의 클래스 사용을 살펴보면

```java
class Person {
  ...
}

Person defaultPerson = new Person();
```

가장 상단에 정의된 레퍼런스타입인 `Person`은 코드로 존재하지만 실제 프로그램 안에서는 아무런 공간을 차지하지 않습니다.
`new` 키워드를 통해 새로운 instance를 생성해야지만 프로그램 안에서의 의미를 갖게 됩니다.

이러한 방식이 일반적인 oop에서 말하는 추상화라고 볼 수 있습니다.

prototype은 이러한 구분과는 차이가 있습니다.
우리는 사람이라는 객체를 구분하기 위한 몇 가지 기준을 통해 사람이라는 객체를 생성합니다.

프로토타입은 이와 다르게 애매한 구분

## javascript가 prototype을 사용함으로서 발생하는 효과는 어떤게 있을까?

호이스팅이 발생한다.

## 결론

문맥적 실행이 자바스크립트의 가장 중요한 요소중 하나라고 볼 수 있다.
실행 컨텍스트를 생성하면서 렉시컬 환경을 구성하기 위해 호이스팅이 발생한다.

해당 호이스팅의 결과에 따라 렉시컬 환경을 구성하고 이후 코드를 실행하게 된다.
