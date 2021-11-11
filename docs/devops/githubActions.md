# Github Actions으로 배포 자동화 하기

> github actions는 public repository는 actions를 더 자유롭게 사용할 수 있습니다. 무료로 제공하고, private repository는 2000분/월 무료 시간을 주고, 추가 분에 대해 0.008$를 분단 추가 과금하게 되어있습니다. 회사 계정에서 큰 요금제의 회원을 사용한다면 달라질 수 있습니다.

git repository에서 `actions`라는 탭을 이용해 간단한게, actions를 이용해 볼 수 있습니다.

`yml`형식의 파일을 작성해 workflow를 작성할 수 있고,  
여러 workflow를 작성해 pipeline형식으로 실행하는 것도 가능합니다.

## actions initialize

초기 세팅되어 있는 actions를 살펴보면, 현재 레포지토리에 push 되었을 때, actions log에 `hello world`를 출력하는 기능을 하고 있습니다.
여기서 살펴볼 수 있는점은, `job`의 형태로 각 로직을 분리하고 구동 환경을 설정할 수 있습니다. 현재는 ubuntu-latest를 사용하고, `name`을 기준으로한 `step`을 사용하여 각 jobs에서 순차적으로 이루어져야 할 일을 나눌 수 있습니다.

> workflow > yml file > job > step의 형식으로 되어있다고 볼 수 있습니다.

## CI/CD 적용하기

일단 docker를 이용해 build파일을 image로 생성 server에 접속해 docker cotainer를 변경하는 방식으로 지속적인 배포를 하기로 기획했다.

가정

1. pull request가 생성되는 경우 cypress를 통해 테스트를 진행한다. (unit test)
2. 테스트가 성공하면 해당 pr의 issue number를 가지고 docker를 빌드 한다.
3. pull request가 dev에 merge되면 서버에 배포한다.
4. release를 위해 dev에서 release branch에 pull request를 요청한다.
5. e2e 테스트를 진행한다. 테스트가 통과하면 merge를 허가한다.
6. release branch에 merge되는 경우에는 production 환경의 image를 배포 서버에 올린다.

위와 같은 설정을 진행하기 위한 단계벌 실행을 해볼 계획이다.

일단 첫 번째인 pull Request가 발생하면 cypress통해 테스트를 진행한다.

## Cypress는 무엇인가?

front end에서 e2e테스트를 위해 사용하는 라이브러리로 react-testing-library에 확장 모듈로도 사용할 수 있고 단독으로도 사용할 수 있다.
기본적으로 e2e (end-to-end)테스트를 위해 만들어진 라이브러리이기 때문에, 라이브 서버를 대상으로 테스트를 진행하는게 추천 방식이다.

하지만, 개발 과정에서 실제 라이브서버를 통해 테스트를 하는 경우는 많지 않고 local환경에서의 테스트를 진행해야 하기 때문에, component단위 테스틀 진행해야 한다.
유닛 테스트는 component-test를 통해 구현할 수 있으며, enzyme등을 사용해 component를 mocking하는 것과 같은 방식으로 cypress를 사용할 수 있다.

테스트용 dev server 없이도 구동이 가능하며, record 기능을 통해 해당 컴포넌트를 웹상에서 어떻게 작동하는지도 확인해 볼수 있다.

cypress는 `cypress-io/github-actions@v2`를 통해 github workflow에서 모듈 형태로 불러와 사용할 수 있으며,
현재 배포 전략에서는 dev버전 테스트와 release 버전 테스트를 다르게 구성해야 한다.

dev => unit test (component test)
release => e2e test (with server)
