---
meta:
  - name: keywords
    content: http,cookie,session
---

# cookie와 세션 :cookie:

## cookie란 무엇인가

쿠키는 서버에서 전달된 정보를 저장하기위한 하나의 수단으로 출발하였다.
실제로 서버에서 해당 파일을 설정하여 보내주면 매 요청시에 쿠키를 전송하는 방식으로 해당 사이트에서 저장된 정보를 확인 할 수 있게 된다.

## cookie를 장점

클라이언트에 데이터를 저장하기 때문에, 서버측에서 부하를 부담할 필요가 없다.
간단한 값들을 저장한다면, 효율적으로 사용할 수 있다. (테마, 개인적인 웹사이트 디자인)

## cookie의 단점

보안에 취약할 수 있다.

- 쿠키는 클라이언트단에 저장되기 때문에, 해킹에 취약합니다.
  누군가 악의적인 목적으로 cookie를 탈취헤 요청을 보내거나 데이터를 수집할 수 있습니다.

## https에서의 cookie

`secure`속성을 통해서 항상 https통신에서만 작동하도록 할 수 있다.
이 때 연관된 속성으로는 `sameSite`가 있다.

### `sameSite`속성

- `lax`: cross-origin이 아닌 경우 get요청에 대해서만 cookie를 사용할 수 있다.
- `strict`: cross-origin인 경우에는 쿠키를 사용할 수 없다.
- `none`: 모든 요청에 대해서 쿠키를 사용할 수 있다. 단, `secure`가 `true`이어야만 한다.

## Session 이란

쿠키를 통해 Session ID를 생성하고 해당 Session ID를 통해 서버에 저장된 Session Data를 사용하는 방식이다.
Session ID는 Cookie를 통해 저장되며, 해당 쿠키는 클라이언트가 종료되거나 새로고침 되는 순간에 사라지는 메모리에 저장되는 Cookie를 사용한다.

## express를 통한 Session의 사용

먼저 express-session library를 설치하여 도움을 받을 수 있습니다.

```bash
$ npm i express-session
```

해당 라이브러리를 통해 express server에서 session을 생성하고 저장할 수 있게 됩니다.

```js
const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
```
