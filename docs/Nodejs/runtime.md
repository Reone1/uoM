# NodeJS Runtime

NodeJS는 웹 브라우저를 벗어난 환경에서 javascript를 실행할 수 있게 해주는 Javascript 런타임 환경의 하나이다.

Javascript를 통한 소프트웨어 개발에 큰 영향을 주었으며 소프트웨어 개발에 사용하는 Electron이나 웹 서비스 개발에 사용하는 Express등은 모두 nodejs를 기반으로 만들어졌다.

NodeJS는 어떠한 방식으로 javascript를 실행하게 되는지 알아보자.

javascript `논-블로킹(Non-blocking)`, `싱글 스레드` 입니다.
스레드는 사람으로 생각하면 하나의 손이라고 생각할 수 있습니다.

스레드는 프로세스 안에서 작업을 처리하는 하나의 기준으로 하나의 프로세스는 여러개의 스레드를 가질 수 있습니다.
자바스크립트는 하나의 프로세스(node proccess) 안에서 하나의 스레드를 가지고 작업을 진행합니다.

Non-blocking은 각 작업의 처리가 완료되기 전에 다음 작업을 할수 없는 상태로 하나의 작업에서 lack이 발생하면 앱을 실행할 수 없게 되어있습니다.

Javascript는 web에서의 Runtime을 고려할 때도 event loop를 중접으로 살펴보아야 한다.

일반적인 동기적 실행만 고려한다면 eventloop가 큰 의미가 없지만, 비동기 (await/async, Promise)를 처리하는 과정에서 event-Loop에 따른 js의 처리 과정을 잘 확인해야 한다.

## Non-blocking vs Blocking

block의 사전적 의미는 흐름을 막는 것을 말한다.
이처럼 처리 과정에서 다른 일을 막는가와 막지 않는가의 차이가 있다.

블로킹은 사람이 이해하기 쉬운 방식의 일처리 과정이다.
한가지 일을하는 동안(작업대를 사용하는 동안) 다른 일을 처리하지 못한다.

`그럼 막지 않고 처리를 하는 과정은 어떻게 진행될까?`
실제 node는 싱글 스레드가 아니다. 다만 javascript 코드를 실행하는단계에서는 single thread 처럼 동작한다.
하지만

## Reference

https://medium.com/@vdongbin/node-js-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC-single-thread-event-driven-non-blocking-i-o-event-loop-ce97e58a8e21
