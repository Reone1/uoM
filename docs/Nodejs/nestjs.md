# NestJS

nodejs를 통해 WAS를 구성할 때 가장 쉽게 접할 수 있는 express가 있습니다.
express를 조금 더 구조화하여 사용 할 수 있는 프레임워크 입니다.

## 기본 구조

module inject의 방식으로 프로젝트 전체 구조를 가져가게 되어있으며, php, java등 기존에 많이 사용하는 백엔드 framework의 구조를 차용해서 js에 적용한 것이 많이 있다.
cotroller, resolver등으로 restAPI, graphql을 구성하는 기본 골자가 정해져 있으며, middleware를 설정하는 기능이 내제되어 필요한 경우 middleware를 통해 proxy, caching, batch등 다양한 업무를 처라하는게 가능하다.

module은 하나의 기능 단위로 설정되며, 해당 module은 서버 내부의 데이터 처리 및 end-point의 기능을 정의하여 다른 곳에서 사용하게 된다.
직접 작업할 때, 하나의 domain기준으로 module을 구성하여 entity및 controller, provider, resolver등을 설정하여 관리하는게 용이하다.

entity를 참조하여 사용할 때, 먼저 만들어진 module을 다른 도메인의 module로 injection하는 방식으로 사용할 수 있다.
module을 외부에서 사용하려면 해당 모듈, controller등 사용하고자 하는 클래스(파일 단위)를 꼭 provider에 설정해야 다른 module에서 사용 가능하다.

module을 provider에 설정한다고 module에 설정된 모든 class가 외부로 제공되지 않으니 꼭 외부에서 사용하는 class들을 모두 provider에 설정해야 한다.

## 사담

java의 injection 방식보다 불편하다고 하셨던 시니어분이 계시는데 아직 이유는 정확하게 알 수 없었다.
java에서 사용하는 injection은 nestjs의 방식과 어떤 차이점이 있는지 알아볼 필요가 있는데, 잠깐 찾아본 결과로는 사용 방식의 큰 차이점은 알지 못했다.
