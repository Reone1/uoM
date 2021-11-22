# cypress Actions Typescript Path error

## 문제 상황

Docker로 next app을 배포하는 상황에서,  
`tsconfig.json`을 통해서 path alias를 사용한 경우에 따라 next build가 정상적으로 되지 않는 경우 발생

- **error**
  ```bash
  Type error: Cannot find module 'path/module/name' or its corresponding type declarations.
  ```

1. 해당 모듈 전부 제거하고 빌드 테스트 => node memory issue발생
   ```bash
   $ NODE_OPTIONS=--max-old-space-size=1000 npm run <script>
   ```
   를 통해 memory 크기 변경 후 다시 build
2. webpack issue발생

   ```bash
    HookWebpackError: error:0308010C:digital envelope routines::unsupported
   ```

   이 단계에서 이상한 의문이 생겼습니다. 다른 node버전으로 인한 build에러일 가능성이 높은 것 같았는데,  
    그렇다면 메모리 문제나 path문제는 별개로 발생할 수 있는 것 같았고, webpack error는 관련 레퍼런스에서 node version에 따른 webpack문제라는 걸 알게 되었습니다.
   dockerignore에 해당 경로의 파일이 빠져있는 것을 확인해서 문제를 해결 했습니다.

   dockerignore는 docker image를 build하는 과정에서 사용하는 파일과 사용하지 않는 파일을 구분하는 설정 파일로, 이전에 development 관련 dockerignore를 설정해놓은 파일이 개발서버 배포 과정에 같은 설정으로 추가되어 testing관련 파일을 포함하지 않게 되었습니다.

   이로 인해서, module import error가 발생하게 되었습니다.
   module import error를 해결하고 memory도 부족하지 않게 되었습니다.

   그래서 다시 처음상태로 돌아가 `Dockerfile`을 구성할 수 있었습니다.

   하지만, webpack issue는 계속해서 발생했고, docker에서 사용하고 있는 `node:alpine`이 현재 설정과 다른 것같아 `NODE_OPTIONS`를 추가해 script 실행시 webpack 사용할 수 있게 변경하였습니다.

3. `NODE_OPTIONS` 설정 추가 후 해결
   ```bash
   NODE_OPTIONS=--openssl-legacy-provider
   ```

Dockerfile을 여러가지 방법으로 수정해가면서 방법을 찾는걸 진행했다.
dockerignore에서 작성한 실수 때문에 발생한 일이지만, import 구문을 제거하고 build test하는 과정에서 여러가지 상황을 많이 찾게 되었다.

next를 사용하게 되면서 docker, local의 환경 차이를 세밀하게 잡아두지 않고 docker image build를 진행하다 보니 생기는 문제 였던것 같다.
