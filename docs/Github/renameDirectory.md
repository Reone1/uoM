# GitHub reopsitory Directroy 이름 변경

git에서 작업을 하다 보면 repository에 있는 directory(folder)명을 변경해야 하는 경우가 생긴다.

해당 방법을 간단하게 공유 한다.

```bash
$ git mv beforeName afterName

```

**해당 명령어는 command를 입력하는 위치가 파일이 있는 경로여야 합니다.**

이름을 변경하는 방법은 쉬우나 같은 파일이름(대소문자 변경)을 가지고 있다면 다른 방법을 사용해야 합니다.

## 파일의 이름을 대소문자만 변경하는 경우

깃에 저장된 파일은 대소문자 구별을 하지 않기 때문에 대소문자 변경을 하게되면 정상적인 directory를 찾지 못한다.

이러한 경우 action에서 경로를 사용하려 할 때 문제가 발생한다.

때문에, 다른 이름으로 변경한 후 다시 변경하여 이름을 적용할 필요가 있다.

```bash
$ git mv beforeName temp # 아무 이름으로 변경
$ git mv temp afterName # 내가 원하는 이름으로 변경
$ git commit -m "message" # commit !
$ git push origin master # push remote repo
```
