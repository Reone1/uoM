---
dirPath: "Database"
---

> 데이터베이스를 처음 사용부터 앞으로 데이터베이스 사용을 해보면서 정리하는 내용들을 구성해본다.

# Database는 무엇인가

데이터베이스는 데이터를 저장하고 사용하는 구조화된 방법의 하나로 반영구적 데이터 구조를 일컫는다.

우리는 하나의 어플리케이션을 개발 할 때, 데이터 베이스를 메모리 저장소와 다르게 생각하듯이 비활성 반영구 데이터를 저장한다.

데이터베이스는 데이터 구조에 따라 크게 두 가지로 구분되는데, SQL, NoSQL 두 가지를 대표적으로 볼 수 있다.

SQL은 Structured Query Language의 약자로 관계형 데이터 베이스를 말한다. 이와 반대인 NoSQL은 데이터의 연관성이 없이 데이터를 저장하는 방식이다.

# database의 종류

- RDB

# Contents list

<listAnchor :list="list"></listAnchor>

<script>
  export default {
    computed: {
      list: function () {
        return this.$page.Database
      }
    }
  }
</script>
