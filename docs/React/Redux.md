# Redux

## Redux란

> javascript 앱을 위한 상태 컨테이너

javascript 기반의 프로젝트에서 redux를 사용해 **전역 상태**를 설정하여,  
component가 직접 전역상태에 접근 할 수 있게 된다.

react를 위한 document가 잘 정리되어 있어 react에서의 사용율이 높고,  
다른 뷰 라이브러리(angular, vue)에서도 사용할 수는 있지만 각 라이브러리 마다의 상태관리 reducer를 사용한다.

## redux가 왜 필요한가?

redux를 통해 전역에서 사용할 수 있는 `state store`(상태 저장소)를 생성하여 접근이 가능하다.
component는 해당 store의 state를 구독하여 component의 상태를 업데이트 할 수 있고
component에서 dipatch를 통해 store를 업데이트 할 수 있게 된다.

- **store가 없는 것과 어떤 차이가 있을까?**

  state와 setState의 위치가 다른 경우에는 state lifting, state drilling이 일어나게 된다.
  ![no redux](../src/React/Redux/1.png)
  이 상태는 관련이 없는 component가 props를 통해서 state의 변화를 전달해야하고,  
  공통 부모 컴포넌트에서 state를 설정하여 관리해야하는 불편함이 있다.

  이런 경우에는 redux를 이용해 개선할 수 있다.
  ![with redux](../src/React/Redux/2.png)
  스토어는 앱에서 하나만 존재하며, 해당 공간은 어떠한 컴포넌트에서도 접근할 수 있다.

## redux의 조건

1. 단일 스토어

- store가 하나만 존재하며, 상태 변화를 계속 같은곳에서만 발생하도록 한다.

2. immutable state

- store는 Read only로 사용하며, 값을 변화하기 위한 방법은 action을 통해서만 할 수 있다.

3. pure function (순수함수)

- reducer는 반드시 pure function(순수함수)로 작성하여, store의 변화를 프로그램이 항상 예측할 수 있어야 한다.

- **Flux structure**  
  플럭스 구조는 데이터의 단방향 흐름을 나타낸다.  
  데이터의 변화는 반드시 action을 통해 이루어지며,  
  변화된 데이터를 store에 저장하여 view가 해당 store를 구독해 변화를 인지하고 UI를 변경하는 형태로 구현된다.
