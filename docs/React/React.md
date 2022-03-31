# React

React는 자바스크립트 기반 **라이브러리** :books: 이다.  
UI를 구현하기 위해 사용하며, HTML 페이지를 쉽게 만드는 걸 도와주기 위해 만들어 졌다.

## 라이브러리

프레임워크가 아닌 라이브러리다.
라이브러리와 프레임워크의 차이는 간단하게 보자면 어떤 기능을 위한 라이브러리의 모임이 프레임워크가 된다고 생각하면 된다.

`angularjs`는 프레임워크인데 반해 `react`는 UI(User Interface)라이브러리라고 명시되어있다.  
비교적 가벼우며,  
기능에 따라 선택해서 붙일 수 있어 선택의 폭이 넓어진다.

## 컴포넌트

`React`에서는 컴포넌트 단위로 UI를 구성한다.  
컴포넌트를 선언해 다른 컴포넌트에서 재사용하는 것도 가능하다.

컴포넌트는 다양한 방식으로 작성할 수 있다.  
`functional Components, Class Components`의 두 가지 컴포넌트 작성 방식이 있으며,
각각의 html 엘리먼트는 javascrpit로 작성할 수도 있지만, 조금 더 눈에 잘 보이는 `JSX`를 사용한다.

## JSX

`JSX`는 Javascript XML로 XML과 비슷한 형식의 코드를,  
babel이라는 컴파일러를 통해 javascript문법으로 변환해준다.  
`syntactic sugar`라고 한다.

`JSX`와 `javascript`의 차이점은 다음과 같다.

```js
// JSX를 통한 컴포넌트 만들기
const elementJSX = <h1 className="greeting">Hello, world!</h1>;

// 순수 js문법으로만 컴포넌트 만들기
const elementJS = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`JSX`를 사용하면, 코드의 가독성이 올라가고 조금 더 간단한 방식으로 컴포넌트를 구현할 수 있다.

### 규칙

JSX를 통해 컴포넌트를 구성할 때 다음과 같은 몇가지 규칙이 있다.  
여러가지 규칙이 있지만 중요하거나 재미있는 규칙 몇가지만 알아보면,

1. 반드시 `React`라이브러리가 해당 스코프에 존재해야 한다.  
   어찌보면 React에서 컴포넌트 구현하는데 쉽게 쓰라고 만든 JSX인데 없으면 돌아가는것도 이상하다. 필요하겠죠..
2. JSX는 xss공격을 방지한다.
   JSX안에 들어오는 정보는 모두 문자열로 입력되기 때문에 다른 xss공격을 방지한다.

## props와 state

### props

컴포넌트는 랜더링을 하기 전에 `props`를 통해서 데이터를 받아 올 수 있다.  
 props는 몇가지 규칙이 있다.

1.  모든 components는 props라는 변수로 데이터를 받는다. 하나의 객체데이터를 받는다.

```js
// Hello.js
// ..
const Hello = (props) => {
  return <div>안녕하세요. {props.name}님!</div>;
};
// ...

// App.js
// ...
import Hello from "./Hello";
const App = () => {
  const name = "reone1";
  return <Hello name={name} />;
};
// ...
```

2.  props의 대해서 순수함수로 동작한다.
    같은 props에 대해서는 언제나 같은 결과를 출력하며, 함수 내부에서 props를 조작해서는 안된다.

### state

상태는 컴포넌트의 핵심적인 데이터이다.  
 컴포넌트의 상태 변화에따라 필요한 부분만 변경하게 된다.

예를 들면 새해맞이 카운트다운하는 페이지를 만든다고 생각해보자.  
 카운트를 세면서 매번 페이지가 새로 전부 그려진다면,  
 페이지는 매초 깜빡이게 될 것이다.

하지만 react를 통해서 구현하면, 해당 부분 초, 분, 시 단위로 필요한 부분만 변경하면서 페이지에 적용하는것이 가능하다.

- `state`의 관리
  state의 관리는 다음과 같은 규칙을 따른다.

1.  컴포넌트 생성시 초기 값을 갖는다.
    가장 처음에 랜더링 될때 어떤 값을 가지고 시작할지 명시해준다.
2.  재할당으로 변경해서는 안된다.
    `setState`라는 메서드를 통해서 변경해야지만 컴포넌트가 상태변화를 감지하고 리렌더를 시도한다.

## 라이프이클

컴포넌트는 `생명주기`라는 것을 가지고 있다.
컴포넌트가 생성되고 다시 없어지는 과정까지를 여러가지 단계로 나누고 있다.

[공식문서 라이프사이클 도표](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

위의 도표를 참고하면 이해하는데 큰 도움이 된다.
라이프 사이클은 크게 세 종류가 있고
각 종류에 따라 최대 4가지의 단계를 거친다.
세 종류는 각각 `mounting, updating, unmounting`이다.

- **Mounting** :
  해당 컴포넌트가 처음으로 그려지는 과정, 클래스를통해 새로운 객체를 만드는 과정이라고 볼 수 있다.

  1. 생성자를 통해서 컴포넌트의 state, method등을 설정한다.
  2. render메소드를 통해 해당 컴포넌트를 virtual DOM에 적용한다.
  3. virtual DOM과 real DOM의 차이점을 그려낸다.
  4. componentDidMount가 호출된다.

- **Updating** : 그려진 컴포넌트가 특정 환경에서 변경되는 경우를 생각해 볼 수 있다.

  1. render 메소드를 통해서 변경점을 virtual DOM에 그린다.
  2. virtual DOM과 real DOM의 차이점을 그려낸다.
  3. componentDidUpdate 메소드가 호출 된다.

- **Unmounting** : 페이지를 떠나거나 특정 컴포넌트를 제거할 때 발생하는 이벤트이다.

  1. **componentWillUnmount** 메소드가 호출된다.

핵심적인 흐름은 3가지 종류의 상태변화 시점이 있다는 것이다.  
그 안에서 여러가지 메소드가 호출되는 경우가 분기된다.  
브라우저의 정보를 읽어올 수 있는 단계는 메소드 호출단계라는 것을 알 수 있다.

자세한 라이프 사이클은 다른 포스팅을 통해 알아보자

## 결론

1. React는 UI용 라이브러리다.
2. state, props를 통해 부분적인 랜더링이 가능하다.
3. 선언형으로 구현해 이해하기 쉽다.
4. 라이프사이클이 사용자가 원하는 기능을 세분화하는데 유용하다.

해당 포스팅은 class Component를 위주로 다루고 있습니다.  
 이후에 hooks을 작성하면서 functional component를 포스팅할 계획입니다.
