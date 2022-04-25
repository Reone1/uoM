---
title: Throttle & Debounce
---

# Throttle & Debounce

토이 프로젝트를 진행하며 이용하게된 Infinite scroll(무한 스크롤)에서 Throttle과 Debounce를 사용하게 되면서 해당 내용을 정리합니다.

## Throttle, Debounce를 사용하는 이유

Javascript에서 Dom Event를 사용하면, 반복된 DOM event가 발생하며, 해당 이벤트 콜백이 매우 빈번히 실행될 가능성이 높아진다. 때문에, 이벤트에 따른 콜백 요청을 원하는 시기에 적절히 할 수 있도록 조치를 취해야 한다. 이 때, Throttle과 Debounce를 이용할 수 있다.

## Throttle

throttle은 반복된 요청해서 일정 시간 이후의 요청만 처리하는 방식이다. 예를 들어 마우스 이벤트를 통해 콜백을 실행하며 3초에 한번만 실행하는 방식으로 설정해주는 방식은 Throttle을 이용하여 구현 할 수 있다.

### js 구현

```js
function Throttle(callback, time = 1000) {
  let isWaiting = true;

  return () => {
    if (isWaiting) {
      callback();
      isWaiting = false;
      setTimeout(() => {
        isWating = true;
      }, time);
    }
  };
}
```

## Debounce

debounce는 지속적으로 발생하는 event callback을 일괄적으로 처리하는 방식 중 하나로, 모든 요청이 종료된 이후에 한번만 처리하는 방식을 사용한다. Throttle과 다르게 주기적인 요청을 하지 않으며, Event가 종료되면 처리하게 된다.

### js 구현

```js
function Debounce(callback, time = 1000) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, time);
  };
}
```
