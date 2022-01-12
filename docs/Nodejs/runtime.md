# NodeJS Runtime

NodeJS는 웹 브라우저를 벗어난 환경에서 javascript를 실행할 수 있게 해주는 Javascript 런타임 환경의 하나이다.

Javascript를 통한 소프트웨어 개발에 큰 영향을 주었으며 소프트웨어 개발에 사용하는 Electron이나 웹 서비스 개발에 사용하는 Express등은 모두 nodejs를 기반으로 만들어졌다.

NodeJS는 어떠한 방식으로 javascript를 실행하게 되는지 알아보자.

javascript 논 블로킹 싱글 스레드 입니다.

Non-blocking은 각 작업의 처리가 완료되기 전에 다음 작업을 할수 없는 상태로 하나의 작업에서 lack이 발생하면 앱을 실행할 수 없게 되어있습니다.
