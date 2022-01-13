# React lifeCycle

## React와 생명주기

**React는 어떻게 화면을 만들어 내는가?**

React를 통해서 많은 일을 할 수 있다. 단순한 UI 개발을 위한 framework처럼 사용할 수도 있으며, 서비스 전체를 관리하는 app으로 상용할 수도 있다. 우리가 thirdparty를 어떻게 이용하는가에 따라서 무궁무진한 가능성을 가진 도구가 된 것이다.

그렇다면 React는 어떻게 화면을 그리는지 알아보고 조금 더 손 쉽게 React를 다루는 방법을 알아본다.

React는 virtual DOM이라는 html document DOM과 비슷한 형태의 객체를 가지고 화면을 구성한다.

virtual DOM은 element tree object와 비슷한 구조를 가지고 있으며, 하위 element를 chlidren의 키에 담아 해당 객체를 가지고 화면을 구성하는 방식이다.

생성한 virtual DOM을 현재 element Tree DOM에 있는 데이터와 비교하여 변경된 부분을 다시 바꿔서 web render가 element Tree의 변경점을 가지고 화면을 다시 구성하도록 되어있다.

이런한 이점으로 인해 화면 전체를 다시 구성하는일이 없으며, 항상 변경된 노드만 바꾸는 방식으로 화면을 생성한다.

> JS를 통해 DOM element를 update하는 것보다 코드가 간결하고 특정 node element를 교체할 수 있기 때문에 성능이 뛰어나다.

**생명주기**

이러한 update방식이 가능한 이유중 하나가 component의 생명주기이다.  
React Component model 에서 Props, State의 값이 변화 하면 해당 변화를 인지하고 component node를 교체하는 방식을 가진다.

component는 생명주기에 따라 initializing, mount, update, unmount 등의 과정을 거친다.

각 과정에서의 단계별 class component method를 살펴보면,

1. component 생성
2. component update
3. component unmount

**생성 단계**

> 컴포넌트를 최초로 호출하여 화면에 표시하는 경우에 발생합니다.

1. constructor
2. getDerivedStateFromProps
3. render
4. DOM에 반영
5. componentDidMount

해당 메서드는 Class component에서 override하여 각 단계에서 component를 조작할 수 있도록 합니다.

function component를 사용하는 경우에는 hook을 통하여 해당 기능을 사용할 수 있으며, 2. getDerivedStateFromProps의 현재 버전()에서는 hook을 통해서 접근이 불가능 하다.
해당 기능을 비슷하게 구현하려면 useRef, useMemo를 통한 memoization을 통해 구현 할 수 있다.

**1. Constructor**

JS Class에서 인스턴스 생성시 최초로 실행되는 메서드로 단 1회만 실행된다.
constructor에서는 component 내부에서 사용할 State, variable등을 설정하며 eventHandler등을 component에 묶어주는 역할을 하게 된다.

해당 기능을 hook을 통해 구현하기 위해서는 `useEffect`의 2인자 배열을 비워 최초 랜더링시에 하고자 하는 행동을 제어 할 수 있다.
다만 State의 할당은 `useState`를 통해 초기 값 설정이 바로 가능하기 때문에 `useEffect`에서 구현할 필요는 없다.

**2. getDerivedStateFromProps (only Class Component)**

해당 메서드는 function Component에서는 hook을 통해 지원하지 않으며 props에 의존하는 State가 있는경우 해당 method를 통해서 State를 업데이트 하도록 지원하고 있다.
다만, React공식 문서상 Props와 State를 직접적인 연관있는 값으로 묶는 것을 지양하며, 내부에서 계산된 값을 사용하는 경우에는 `useMemo`를 통해서 계산 값을 저장 변경된 값을 갱신하여 component에 반영할 수 있다.

**3. render**

해당 method는 생성, update 두 가지 component 상태에서 공통으로 호출 되며, 단순히 DOM에 component를 그리는 역할을 한다.
method를 통해 return되는 값은 React Element, boolean, null, string, number type을 가질 수 있다.

render에서 State를 변경하거나 하는일은 component를 무한 루프에 빠지게할 수 있으니 props, State값을 변경하지 않고 이용하기만 해야한다.

**4. componentDidMount**

컴포넌트가 모두 그려지고난 마지막에 호출되는 method 화면에 반영된 결과에 따라 다른 변화를 주어야 하는경우 해당 method에서 구현 할 수 있다.
화면에 element가 모두 배치되어야지만 생성할 수 있는 기능들이 여기에 들어간다.

DOM Mouse Event handler를 가장 큰 예이고, 화면이 구성된 이후에 작용하기 때문에, CSS Transition을 적용하기도 한다.
