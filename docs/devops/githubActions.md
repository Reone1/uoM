# Github Actions으로 배포 자동화 하기

> github actions는 public repository는 actions를 더 자유롭게 사용할 수 있습니다. 무료로 제공하고, private repository는 2000분/월 무료 시간을 주고, 추가 분에 대해 0.008\$를 분단 추가 과금하게 되어있습니다. 회사 계정에서 큰 요금제의 회원을 사용한다면 달라질 수 있습니다.

git repository에서 `actions`라는 탭을 이용해 간단한게, actions를 이용해 볼 수 있습니다.

`yml`형식의 파일을 작성해 workflow를 작성할 수 있고,  
여러 workflow를 작성해 pipeline형식으로 실행하는 것도 가능합니다.

## Actions initialize

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

**배포 전략에 따른 테스트 진행**

- dev => unit test (component test)
- release => e2e test (with server)

## github actions Setting

github에서 repository를 생성하고 actions 탭으로 workflow를 생성할 수 있다.
market place에서 이미 생성된 많은 workflow를 참조해 사용할 수 있다.

**actions을 통해 cypress test를 진행하기**

```yml
name: PR Test

on:
  pull_request:
    branches: [dev]

jobs:
  cypress_run:
    runs-on: ubuntu-latest
    steps:
      # checkout
      - name: checkout
        uses: actions/checkout@v2
      # cypress run
      - name: Cypress Components test
        uses: cypress-io/github-action@v2
        with:
          command: npm run test:cypress-ct -- ${{ secrets.CYPRESS_RECORD_KEY }} -t ${{ github.event_name }}
          # package.json script => "test:cypress-ct": cypress run-ct -b chrome --record -k
        env:
          COMMIT_INFO_MESSAGE: ${{ github.event.pull_request.title }}
```

다음과 같은 workflow를 통해서 cypress 테스트를 진행할 수 있다.

checkout을 통해 브랜치 접근권한을 변경하고,  
cypress 테스트를 통해서 전체 테스트 코드중 comopnent 테스트를 실행하게 된다.  
copmonent테스트에는 사전에 준비해야하는게 두 가지가 있다.

record 기능은 사용하지 않는다면 한 가지로 줄일 수 있다.  
레코드 기능을 사용한다면 dashboard를 통해 테스트 기록을 확인하고 해당 테스트가 어떻게 실패한지를 gui 기반으로 볼 수 있다.

`CYPRESS_RECORD_KEY`는 record기능을 사용하는데 필요한 기능으로써 `--record -k <record_key>`를 제거해서 record기능을 비활성화 할 수 있다.  
dashboard는 무료로 사용할 경우 최대 3명이 사용가능하다.

[cypress설정과 관련된 정리글](./cypress.md)

다음 설정해야 하는것은 cypress.json파일을 수정해주어야 한다.  
component테스트를 위한 별도의 설정이 필요하고 unit(component) 테스트 파일의 경로나 spec 파일의 확장자 등을 설정할 수 있다.

`cypress.json`에 정상적인 테스트 경로를 구성했다면, 해당 workflow를 통해서 통합 테스트를 진행한 결과를 볼 수 있다.

## actions를 Docker build 구성

github action은 PR 발생시에 두 가지 정보를 가지고 동작하게 된다.

- 현재 PR을 요청한 commit
- PR을 요청 받은 branch

요청 받은 branch에 workflow가 있거나 요청한 commit에 workflow가 있다면 실행되는 것을 통해 알 수 있다.  
push를 하게 되면, push된 code, 이전 branch의 상태를 기준으로 동작한다.

`ations`안에서의 `.` 경로는 현재 commit의 root directory인 것이다.  
build를 하기위한 `Dockerfile`을 `root directory`에 생성한다.

```docker
FROM node:16 AS Builder

RUN npm install -g npm@8.1.3

# Create Directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY . /usr/src/app
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
```

빌드하는데 사용하는 npm버전이 달라 `error가` 발생해 `npm` 버전을 변경하는 `script를` 가장 먼저 실행해 주었다.
이후 작업할 `directory를` 생성하고 `cd`와 같은 역할을 하는 `WORKDIR`로 작업 경로를 변경한다.

이후, `package*.json`을 COPY해 docker의 작업 dir로 복사한다.
현재 root dir에 있는 모든 작업 파일을 docker의 작업 경로에 복사한다.

`npm i`, `npm run build`를 통해서 패키지를 설치하고, 빌드를 진행한다.

`이제 docker build . -t <tagname>`을 root directory에서 실행하면 docker image를 생성할 수 있다.

생성된 docker image를 docker hub에 올려 deploy에 사용할 수 있다.

## docker hub image로 배포 진행하기

해당 과정은 github-actions를 이용해 진행할 수 있다.
CI/CD 전략에 따른 배포 단계는 dev / release로 나눌 수 있다.

PR이 dev에 Merge될 때,  
dev를 빌드하고, 배포하도록 되어있다.

이 단계를 구성해보면,
pr이 merge되는 event에 대한 workflow를 생성한다.

```yml
- name: dev server deployment

- jobs:
    build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      # Install NPM dependencies, cache them correctly
      # and run all Cypress tests
      - name: Set up Docker Buildx
        id: buildx
        uses: docker/setup-buildx-action@v1

      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_ACCESS_TOKEN }}

      - name: Docker build & Push
        id: docker_build
        uses: docker/build-push-action@v2
        with:
          context: ./
          file: ./Dockerfile
          push: true
          tags: ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGE }}:${{ github.run_id }}, ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGE }}:latest

      - name: Image digest
        run: echo ${{ steps.docker_build.outputs.digest }}

  deployment:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    needs: build
    steps:
      # Steps represent a sequence of tasks that will be executed as part of the job
      - name: executing remote ssh commands using password
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSHKEY }}
          passphrase: ${{ secrets.PASSPHRASES }}
          script: |
            docker pull ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGE}}:latest
            docker stop nextjs
            docker run --rm --name nextjs -dp 80:3000 ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGE}}:latest
```

> `secrets`은 repository setting에서 설정할 수 있습니다.

현재는 단순히 docker image를 받아아와 외부 포트 80과 연결해주는 방식을 사용하도록 구성했습니다.

각각의 jobs은 서로 다른 computing환경을 가지고 있어 docker에 push, pull 권한이 필요한 이미지인 경우 login을 꼭 진행해야 합니다.

`docker/login-action@v1`을 통해 docker hub에 접속할 수 있는 login을 할 수 있습니다.

이후, deploy과정은 직접 cloud computer에 ssh로 접속해 docker image를 내려받고 container를 교체하는 방식으로 구성되어 있습니다.

container를 교체하는 순간에는 서비스 장애가 발생할 수 있는 여지가 있어, 이후 개발서버를 nginx와 함께 배포하여 무중단 배포를 적용할 계획입니다.
