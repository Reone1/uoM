---
title: "Express는 무엇인가"
meta:
  - name: keywords
    content: nodejs, express, web-server
---

# Express

## express란 ?

> nodejs기반의 웹 어플리케이션 구축을 쉽게 만들어 주는 웹 서버 구축 프레임 워크

nodeJS에서 제공하는 기본적인 모듈을 통해 web server를 간단하게 구축할 수 있도록, 기능을 강화한 프레임워크이다.
thirdparty를 통한 기능 강화가 간단하고 서비스 구조를 간단하게 생성할 수 있다.

Service에서 Database와의 Interface는 중요한 부분으로 Express를 통해 해당 API를 구성할 수 있다.

## express Web server 생성

빈 프로젝트 폴더에 다음과 같이 노드 프로젝트를 생성한다.

```bash
$ npm init
```

initialize를 위한 값을 추가하고 프로젝트를 생성한다.

`index.js` 파일을 root Dir에 생성하고 다음과 같은 코드를 작성한다.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.litsen(3000, () => {
  console.log("live http:localhost:3000");
});
```

이렇게 간단한 코드를 가지고 서비스가 실행되는 것을 확인할 수 있다.
package.json에서 script를 수정한다.

```json
{
  "script": {
    "start": "node index.js"
  }
}
```

이제 `npm start`를 해당 디렉토리의 터미널에서 입력하면 web server를 사용할 수 있게 된다.
실 서버를 배포하여 사용하기 위해선 추가적인 설정이 필요하지만, 현재 local test를 위한 최소한의 조건으로 서버를 실행할 수 있다.

터미널에서 node process를 종료하면 해당 서버를 종료할 수 있다. (cmd + c)

express는 이와 같은 방식으로 간단히 WAS를 구성할 수 있다.

nodejs만을 가지고 http 서버를 구축하려면 다음과 같은 방식으로 구현할 수 있다.

```js
const http = require("http");
const fs = require("fs");

const app = http.createServer(function (request, response) {
  let url = request.url;

  if (request.url == "/") {
    url = "/index.html";
  }

  if (request.url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000, () => {
  console.log("listen sever 3000 port");
});
```

순수 nodejs 모듈을 사용하여 web server를 구축할 때와 큰 차이점은 없지만,
