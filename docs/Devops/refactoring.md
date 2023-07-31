# refactoring

## front-end refactoring 후기

기존 서비스를 재구성하여 여러 버전의 서비스를 생성하기 위한 전초작업으로, 기존 소스는 적은 인원으로 빠른 개발을 위해 정리가 되지 않은 소스가 많이 있습니다.
해당 소스 개발시기에 히스토리는 알지 못하고, 이후 정리과정에 투입되어 작업하게 되었습니다.

## Legacy 프로젝트 구조

먼저 다음과 같은 stack을 사용중인 서비스 입니다.

-  CRA(Create-React-app with typescript)
-  tailwind
-  websocket
-  recoil (과도기)
-  react-query (과도기)

몇몇 상태 및 기능등이 recoil에 올라간 경우도 있고 state-drilling을 통해 주입되는 경우도 있었으며, axios를 통해 localstate를 설정하여 사용하는 데이터와 react-query를 사용하는 경우가 혼재되어 있습니다.

## 개선 사항

[toc]

### routing의 통일

기존에는 page라고 하는 directory안에서 모든 component의 관리가 이루어지고 있었는데, 이 부분을 작게 나누어 unit-component와 page, routing으로 분리하여 구성합니다.
page는 데이터 패치(API 호출 `with react-query`)및 recoil state handling을 하도록 하며, callback function등을 관리하여 결과 값을 처리하는 방식만을 구성합니다.

단일 컴포넌트 form, input등은 해당 컴포넌트에서 validate값을 조절하여 결과값의 T/F를 반환하여 처리기에 전달하는 역할만 구성합니다.
이러한 방식은 하나의 Input이 어떠한 역할을 하는지 이해하기 편리하지만, 전체 데이터의 validation체크를 어렵게하는 문제가 있습니다.

다만, 해당 서비스는 이후 비슷한 컴포넌트로 다양한 서비스에 다른 기능으로 추가할 계획을 가지고 있어 단일 컴포넌트의 custom이 더 쉬운 방식을 선택해 위와 같은 전략을 선택했습니다.

### type 관리 통일성

현재 타입이 여러가지 디렉토리에 기준 없이 선언된 경우가 많아, 크게 두 가지로 나누어 분리하였습니다.
common, api통신에 사용되는 type
