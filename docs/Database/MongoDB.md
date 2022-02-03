# mongoDB

MongoDB는 대표적인 NoSQL 데이터 베이스이다.

NoSQL은 구조적으로 다양한 서비스에 적용하기 쉽다. 정해진 형식이 없이 데이터를 저장하고 사용할 수 있기 때문에 초기 서비스를 개발하는데 많은 선택을 받고 있다.

일반적이로 비슷한 구조의 데이터 묶음을 Document라고 하는 형식으로 저장하며,

해당 Document의 묶음을 Collection이라 부르고 collection이 데이터 베이스를 구성한다.

## MongoDB의 데이터 저장 방식

MongoDB데이터를 받아오면 일반적인 JSON 데이터 형식으로 받아 볼 수 있다.

JSON 데이터는 여러가지 장점을 가지고 있는데 개발자가 읽기에 편하고 친숙한 데이터이다.

이와 반대로 몇 가지 단점이 있는데,

1.  문자열로 구성된 데이터를 가져오기 때문에 분석에 어려움이 있고
2.  데이터 타입에 제한이 있다.
3.  공간 효율성이 떨어진다.

위와 같은 이유로 방대한 데이터를 저장하고 재사용하는데 큰 어려움이 있다.

MongoDB는 해당 문제점을 BSON 데이터로 저장하는 방법을 통해 해결하였다.

`BSON`은 **Binary JSON**으로,

데이터를 Binary형태로 저장해서 문자열 분석보다 속도, 공간 활용등에 큰 이점이 있다.

또한, BSON은 데이터 타입도 JSON보다 추가적인 데이터 타입을 지원하여, Date, Long, Float등의 타입도 저장할 수 있다.

## Document

일정한 형식의 데이를 저장하는 하나의 단위로 `Field`와 `value`의 쌍으로 이루어져 있다.

여러개의 Document는 Collection을 구성하고 있다.

```json
// Document
{
  "name": "reone",
  "job": "Developer",
  "comment": "Hello World!",
  "props": {
    "common": "good",
    "indentity": "right"
  }
}

// Collection
```

## MongoDB shell script

완벽한 Javascript interpreter이다.
