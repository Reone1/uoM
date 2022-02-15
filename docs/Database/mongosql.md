# mongodb for SQL

> 해당 컨텐츠는 mongodb university에서 교육하는 자료를 토대로 작성하였습니다.

## mongodb schema를 구성하는 방법

database를 구성하는 3가지 요소를 알아보고 해당 요소를 구성하는데 꼭 필요한 사항들을 정리한다.

database model은 여러가지 방법이 있다. conceptual model, logical model, physical model등이 있다. RDBMS의 경우 ER

mongo database는 workload, relationships, patterns의 3가지 요소를 가지고 schema를 구성한다.

**workload**는 size data, quantity ops, quality ops등으로 이루어져 있으며, 실제 어떠한 기능에 필요한 데이터인지를 기준으로 생성한다고 볼 수 있다.
현재 데이터가 어떤 기능을 기준으로 사용되며 읽고 쓰는데 어떻게 이용되는지를 정한다.

**relationships**은 데이터 간의 관계 one-to-one, one-to-many, many-to-many등의 데이터간 관계에 따른 정리를 하고, embed document, reference document등의 document연결관계를 설정한다.

**pattern**은 데이터 모델의 패턴을 결정하며, 효과적인 검색과 입력을 위한 효율적인 pattern을 구성하는 역할을 한다.

## workload

workload는 기능에 대한 database의 역할을 정하는 방법이며, workload는 크게 세가지 지표를 통해 나타내게 된다.

`query`, `quantification`, `qualitification`으로 나타나며,

`query`는 실제 서비서에서의 어떤 기능을 하게되는지를 나타낸다.

`quantification`은 해당 query를 실행하는데 사용하는 cost를 지표화 한다. 1/sec , 115 write/sec 등의 시간당 처리량을 나타낸다.

`quanlification`은 해당 query를 처리하는데 걸리는 시간을 나타내며 추가로 처리 우선순위를 정하여 조금 더 효율적으로 처리할 수 있도록 추가한다. <1s, <60s등으로 나타낸다.

이외의 추가적인 지표는 size, life/duration등이 있다.

## schema validation

json Schema를 통해서 validation설정을 해줄 수 있다.

```json
{
  "$jsonSchema": {
    "bsonType": "object",
    "properties": {
      "username": { "bsonType": "string" },
      "fullname": { "bsonType": "string" },
      "email": {
        "bsonType": "string",
        "pattern": "^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+.[a-zA-Z0-9-.]+$"
      },
      "password": { "bsonType": "string" },
      "age": { "bsonType": "init", "minimum": 0, "maximum": 150 }
    },
    "required": ["username", "fullname", "password", "emai", "age"]
  }
}
```

## sharding

데이터 베이스를 일정한 기준에 따라서 나누어 indexing을 하는 방식, 매우 많은 데이터를 관리해야하는 경우 조회하는데 오랜 시간이 걸릴 수 있으니, sharding을 통해서 조회 효율을 높이는게 가능하다.

## data integrity

데이터 무결성을 보장하는 방법, document를 embed 방식으로 data를 연결하여 무결성을 확보할 수 있다.
