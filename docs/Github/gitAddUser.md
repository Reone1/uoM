# Mac에서 다중 사용자를 이용하는 방법

> 우선 모든 계정에서 github token을 발행해야지만 사용할 수 있는 방법입니다.

github의 보안이 강화되면서 password를 통해 remote repository에 접근할 수 있었던 방식이 token 인증 방식을 사용하게 되었습니다.

이 시점에 사내계정과 개인 개정을 번갈아가면서 사용해야할 이유가 있었고 (외부에서 작업하는 경우) 해당 경우에 어떻게 하나의 PC에 여러가지 사용자를 설정하는 방법을 공유합니다.

## accessToken 발급

`github` > `Account` > `settings`에서,
위치마다 사용할 토큰을 발급받는 것이 좋습니다.

`personal access tokens` 메뉴에서 개인이 사용할 토큰을 발급받아 내 repository의 관리 범위를 직접 정할 수 있습니다.

발급시에 사용한 토큰의 정보는 이후에는 조회할 수 없으니 필요한 경우는 저장할 필요가 있습니다.

## Credential등록하기

> 해당 방식은 macBook 사용자만 해당됩니다.

1. keychain에 새로운 유저를 등록하기

```bash
  (echo url=https://github.com; echo username=token; echo password=secret; echo ) | git credential approve
```

`secret`에 해당하는 부분에 personal token을 적용하면 해당 유저로 로그인 하여 사용할 수 있습니다.

이제 repository에 사용자 계정을 다시 설정해 줄 필요가 있습니다.

## repository 사용자 변경하기

`git config --local -l`를 통해서 현재 작업중인 repository의 사용자 정보를 알 수 있습니다.

새로운 사용자 정보를 설정하기 위해서는 다음과 같이 진행할 수 있습니다.

```bash
$ git config --local user.name <name>
$ git config --local user.email <email>
$ git config --local credential.username <name>
```

`credential.username`이 중요한 부분입니다.

git은 global설정을 통해 `credential.helper=osxkeychain`을 사용하는 것을 알 수 있습니다. (mac)

이는 mac에서 사용하는 사용자 인증 방식을 가져와 사용하는 것을 표시하는데, keychain access를 통해 현재 mac에서 사용하고 있는 사용자 인증 정보를 확인할 수 있습니다.

먼저한 `echo ~`를 통해 keychain에 사용자 정보를 등록하고 github config 설정을 통해서 credential을 사용하게 될지 선택하게 됩니다.
