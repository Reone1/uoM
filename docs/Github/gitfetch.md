# Github fetching

## Local branch와 remote branch를 동기화 하는 방법

remote branch list를 정리하고 나면 local에 남아있는 remote branch list를 제거해주기 위한 방법입니다.

```bash
$ git fetch origin -p
$ git fetch update prune
```

두 가지 명령어를 통해서 github remote branch를 local branch에 동기화 할 수 있습니다.

반대로 local branch에서 삭제된 branch를 remote에 동기화 하는 방법은 따로 없습니다.
local branch를 기준으로 remote branch를 동기화 하기 위해서는 하나하나 삭제를 해줘야 합니다.

## local에서 github remote branch를 삭제하는 방법

local branch에서 cli를 통해서 remote branch를 삭제하는 방법은 다음과 같습니다.

```bash
# :을 통해서 삭제
$ git push <remote-name> :<branch-name>

# 로컬에서 브랜치를 삭제하고 push 하기
$ git branch -d <branch-name>
$ git push <remote-name> <branch-name>
```

두 가지 방법을 통해서 remote branch를 삭제 할 수 있습니다.

github webpage에서 branch를 정리하고 `git fetch origin -p`를 통해서 local branch를 정리하는게 가장 편하고 빨랐습니다.
다만, branch를 아주 쉽게 삭제할 수 있기 때문에, 버전관리를 잘 하는게 중요합니다.
