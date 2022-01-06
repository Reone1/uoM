# cypress

## cypress

jest, mocha, react-testing-library를 사용하여 주로 테스트를 진행하였다.
react app을 테스트 하는데는 많은 노력이 필요한 라이브러입니다. bundle부터 시작해서 여러가지 설정을 해두어야 테스트 코드를 작성할 수 있습니다.

하지만, cypress를 이용한다면 첫 테스트를 쉽게 구성할 수 있습니다.
아니 사이프레스 설명 잘 못적겠는데 일단 뭐가 다른지 부터 설명하고 거꾸로 다시 올라와서 장점만 추려 적어야 겠다.

## cypress는 E2E 테스트를 지원합니다.

정확히는 E2E 테스트를 핵심 컨셉으로 하고 있습니다.
Front의 E2E 테스트는 그 동안의 테스트 라이브러리를 사용할 때에는 사용하기 쉽지 않았습니다.

현재 서비스나 client의 상태를 test코드에 적용해야 했지만, cypress는 dev서버 자체에 action, networking 등을 확인하여 테스트 결과를 받아 볼 수 있습니다.

localStorage, cookie등의 변화를 브라우저환경에 적용되어 있기 때문에, 사용자 입장에서의 테스트가 가능합니다.
실제 개발 단계에서는 Component Test를 통한 unit test를 사용하여 의존성이 낮은 컴포넌트 개발에 도움이 됩니다.

## cypress는 직관적입니다.

물론 E2E테스트에서의 장점일 수 있습니다. E2E Test는 사용자 경험을 테스트하는 방식으로 진행되어, 화면의 변화, 값의 입력등 사용자 상호작용을 위주로 테스트 하게 됩니다.

이 과정에서 테스트 코드를 조금더 직관적으로 이해할 수 있습니다. 사용자가 어떠한 변화를 시도 했을 때, 어떠한 결과가 나타나는지 테스트 코드가 유기적으로 연결되어 있어 테스트 케이스를 이해하는데 도움이 됩니다.

이러한 테스트를 구성하는데 큰 도움을 주는 몇 가지 요소를 살펴보면

1. JQuery와 같은 방식의 query selector
2. chain command: Cypress의 method는 chain command를 통해 사용할 수 있습니다.
3. mocha, react-testing-library, jest를 사용할 수 있습니다. cypress 내장 method 중 jest, chai, mocha와 같은 기능의 method가 있으며 react-testing-library에가 cypress를 지원하고 있습니다.

계속해서 사용하던 jest, mocha등의 문법을 쉽게 사용할 수 있으며, stub, spy와 같은 mocking method를 지원하며 이외의 request와 같은 api mocking method 또한 지원하고 있습니다.

## dashboard를 지원합니다.

github actions, jenkins등의 CI/CD를 구성할 때, 테스트를 사용하여 현재 테스트 상태나 테스트 결과에 대한 dashboard를 기본으로 제공하고 있습니다.
다만 무료 버전에서는 dashboard를 테스트 로깅 횟수를 제한해 지원하고 있으니 서비스 개발에서 사용하려면 결제가 필요해 보입니다.

## 보기 편한 문서

프론트 테스트 케이스에 대한 예시나, 각 api에 대한 설명을 찾기에 쉽습니다.
커스텀 method를 등록하는 방식이나 typescript 지원을 위한 설정이라던지 프로젝트에 필요한 스택을 살펴보는게 쉬웠습니다.

현재 진행중인 프로젝트의 특성상 nextjs를 지원할 필요가 있었으며, webpack설정이나 NODE_ENV 설정 방식등을 쉽게 찾아볼 수 있었습니다.
이외에도 설정하는 방식이나 테스트 코드를 작성하기 위한 method 검색이 쉽게 가능하고, referrence를 찾기 쉽습니다.

## component test를 별도로 사용합니다.

이 부분은 장점이라기 보단 프로젝트에 적용하면서 편하게 사용한 경험을 적었습니다.
github actions을 통해서 CI/CD 과정에 cypress를 통한 테스트를 진행했으며, github actions에서 사용하기 쉽도록 market에도 cypress workflow를 찾아 쉽게 사용할 수 있었습니다.
해당 과정에서 comoponent 테스트와 E2E 테스트 script를 구별하여 구성하고 Dev branch를 구성하는 과정에서는 component test를 진행하고,

release 과정에서는 E2E 테스트를 진행하도록 구성했습니다. E2E 테스트는 실제 테스트 서버 도메인에 접근해 테스트 할 수 있도록 구성했으며, Dev branch를 실시간으로 업데이트해 배포한 내용을 가지고 test를 진행할 수 있도록 구성했습니다.

## 사용기

테스트를 두 가지 방식으로 진행했는데 두 가지의 차이는 다음과 같습니다.

E2E, component test의 큰 차이점은 실제 서비스에 적용된 component에 대한 테스트인가, 단일로 mount된 component인가의 차이이다.

이로 인해서 context가 다르게 설정되어 context를 인위적으로 component에 제공할 수 있는 처리를 해줘야 한다.

현재 서비스에서는 Apollo client와 Recoil State를 사용하고 있기 때문에, 최소 두 개의 context를 심어주어야 했다.

해당 과정은 모든 테스트 코드에서 사용할 수 있는 Testing module을 HOC 형태로 구성하여 context를 심어서 comopnent를 생성할 수 있도록 구성했다.

## 결론

실제 mocha enzyme을 통해서 unit test를 구성 할 때 보다 편하게 구성할 수 있었다.
한 가지 library를 통해서 모든 테스트 케이스를 구성할 수 있는게 무엇보다 편하게 다가 왔다.

이러한 이점은 typescript, SSR을 사용하는 현재 서비스에서 크게 이점으로 다가왔는데 역시 webpack이나 babel관련 설정 및 type 설정들이 test에서는 큰 영향 없이 구현할 수 있다는 이점있다.

기존에 사용하던 jest, mocha가 익숙하다면 한번쯤 cypress를 통해서 테스트를 구성하는 것도 좋아 보인다.
