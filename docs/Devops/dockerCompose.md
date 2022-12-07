---
meta:
  - name: content
    content: docker-compose
  - name: keywords
    content: docker-compose docker devops github-actions storybook
---

# Docker Compose를 이용해 Storybook, dev Server 배포기

## 목적

> 프로젝트를 진행하면서 dev Server를 운용하고 해당 서버에서 직접적으로 storybook을 document를 확인할 수 있는 domain이 필요하다.

## docker-compose는 어떤 역할을 하는가

이 글은 docker의 사용법에서는 다루지 않고 docker-compose의 역할과 사용기에 대해서만 기술합니다.

### 공식문서 기술

[docker-compose 공식문서](https://docs.docker.com/compose/)

> Compose is a tool for defining and running multi-container Docker applications.
> docker-compose는 멀티 컨테이너 도커 어플리케이션을 정의하고 실행하는 도구 입니다.

설명과 같이 docker는 여러개의 컨테이너 환경을 독립적으로 실행하고 전체 환경을 어플리케이션으로 구성할 수 있도록 정의하고 실행해주는 docker command입니다.

때문에, 독립적인 Container가 연관이 없다면 따로 Dockerfile을 생성하고 각각 빌드하여 어플리케이션을 실행할 수도 있습니다.

**하지만 서로 의존성이 있는 서비스라면 (redis, DB, 등)실행 환경등을 한군데서 관리하고 실행시에 일괄적으로 관리할 수 있다는 점이 큰 이점입니다.**

### compose 예시

다음은 공식문서에 있는 `docker-compose.yml`파일의 예시 코드입니다.

```yml
version: "3.9" # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis # 의존성 서비스 연결
  redis:
    image: redis
volumes:
  logvolume01: {}
```

위 코드처럼 내가 만든 서비스에 대한 실행환경을 인자로 념겨 실행하고, `links`를 통해 의존성 서비스 연결을 시도할 수 있습니다.

이후 `services`의 `redis`를 통해서 다음 컨테이너 실행을 정의 합니다.

`redis service`에서 볼 수 있듯이 특정 `image`를 실행하는 방식으로도 docker-compose sevice를 생성할 수 있습니다.

## 코드

제가 구현한 방식을 간단하게 설명하고 마무리 하도록 하겠습니다.
저는 Dockerfile을 다음과 같이 구성하였습니다.

1. dependency 설치
2. service app build
3. storybook build
4. Copy directory

```docker
# Dockerfile

FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install next@canary # nextjs swc에러로 인한 canery version 설치
RUN npm install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN export NODE_OPTIONS=--openssl-legacy-provider; NODE_OPTIONS=--max-old-space-size=2000 npm run build && npm install --ignore-scripts --prefer-offline ## 메모리 부족으로 build가 실패하는 경우가 있어 memory사용을 늘려 줌
RUN export NODE_OPTIONS=--openssl-legacy-provider; npm run build-storybook # storybook build

# Production image, copy all the files and run next
FROM node:alpine AS runner # 배포 환경 구성
RUN mkdir -p storybook
COPY --from=builder /app/storybook-static/ /storybook/
COPY --from=builder /app/next.config.js ./app/
COPY --from=builder /app/public ./app/public/
COPY --from=builder /app/.next ./app/.next
COPY --from=builder /app/node_modules ./app/node_modules
COPY --from=builder /app/package.json ./app/

# 이후 ENV등의 docker 환경 설정

ENV PORT 3000
```

Dockerfile에서는 `CMD`를 작성하지 않는 방식으로 외부에서 Command를 주입하도록 설정했습니다.
`docker-compose.yml`을 통해 command를 주입하며, `working-dir`을 변경하는 방식으로 두 개의 프로젝트 폴더 root를 분리하여 구성하였습니다.

이후 docker-compose를 통한 deploy를 진행합니다.

```yml
version: "3"
services:
  app:
    image: mydockerid/mydockerimage
    working_dir: /app
    command: sh -c "npm run start"
  storybook:
    image: mydockerid/mydockerimage
    working_dir: /storybook
    command: sh -c "npx http-start .
```

이처럼 볼륨 없이 구성하였으며, 외부 볼륨은 현재 개발 버전에서는 사용하지 않을 예정입니다.
Dockerfile을 통한 prebuild만을 진행하고 compose를 통한 통합 배포를 하도록 설정하였으며,

Dockerfile을 통한 build구성은 github-actions를 통해 test를 통과하면 일괄적으로 할 수 있도록 설정했습니다.

## 결론

compose는 이밖에도 up,down을 통한 자동 container 재생성을 지원하고 있습니다. down으로 현재 compose를 종료하는 경우 live된 conatainer를 종료하고 바로 제거합니다.

이후 up을 통해 다시 생성하는 경우 build를 진행하고 run하는 과정까지 일괄적으로 진행합니다.

docker-compose.yml을 잘 활요할 수 있다면, github-actions를 통해 자동화 하는 것도 하나의 방법이 될 수 있을것 같습니다.

- github-actions를 통해 secret으로 값을 전달 -> `docker-compose.yml` 파일을 생성 -> 생성된 yml파일을 통한 compose build 및 배포

이러한 순서의 배포를 취하는 것이 보안상 가장 안전해 보입니다.
