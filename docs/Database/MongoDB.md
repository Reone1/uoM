# mongoDB

MongoDB는 대표적인 NoSQL 데이터 베이스이다.

NoSQL은 구조적으로 다양한 서비스에 적용하기 쉽다. 정해진 형식이 없이 데이터를 저장하고 사용할 수 있기 때문에 초기 서비스를 개발하는데 많은 선택을 받고 있다.

일반적이로 비슷한 구조의 데이터 묶음을 Document라고 하는 형식으로 저장하며,

해당 Document의 묶음을 Collection이라 부르고 collection이 데이터 베이스를 구성한다.

> ::mongodb university basc course를 수강하며 정리한 블로그입니다.

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
[
  {
    "name": "reone",
    "job": "Developer",
    "comment": "Hello World!",
    "props": {
      "common": "good",
      "indentity": "right"
    }
  },
  {
    "name": "clouser",
    "job": "UX designer",
    "comment": "Wellcome to My world!",
    "props": {
      "common": "nice",
      "indentity": "unique"
    }
  },
  // ...
]
```

## MongoDB shell script

완벽한 Javascript interpreter이다.

## insert

```js
db.collection.insert([{ item: 1 }, { item: 2 }, { item: 3 }], {
  ordered: false,
});
```

기본적으로 PK를 생성하는 방식 (\_id 가 기본값)으로 collection을 document에 추가하기 때문에 데이터가 중복되더라도 무조건 insert가 가능하다.
\_id를 통해 PK를 임의로 할당하는경우 어떤 문제가 발생하는지 알아볼 필요가 있다.

2인자를 통해 ordered라는 boolean 값을 주게되면 실패한 collection입력 이외의 모든 데이터를 입력 시도하게 된다. 기본적으로 true로 설정되어 순서데로 데이터를 입력하고 입력이 실패한 순간에 query를 종료하게 된다.

데이터 타입이 자유롭다.
같은 field의 value도 다르게 구성할 수 있다. array를 직접 삽입해 데이터를 구성할 수 있다.

## shell query

findone, updateone 먼저 찾은것을 반환 하거나 업데이트 한다.
find, update 찾은 모든 것을 반환하거나 업데이트 한다.

## $inc, $set, $push

2인자의 키를 해당 값을 주어서 데이터를 업데이트 할 수 있다.

```js
db.collections.udpateOne(
  { key: "value" },
  { $inc: { field: "increase value" } }
);
db.collections.udpateOne(
  { key: "value" },
  { $set: { field: "increase value" } }
);
db.collections.udpateOne(
  { key: "value" },
  { $push: { field: "increase value" } }
);
```

## delete

collection을 삭제한다. deleteMany, deleteOne이 있다. updateOne, updateMany와 동작은 같다.

## drop

document를 삭제한다.

## query에서 조건 사용하가.

### 비교 연산

| operator | description          |
| -------- | -------------------- |
| "$eq"    | "Equal to"           |
| "$ne"    | "Not Equal"          |
| "$gt"    | "Greater Then"       |
| "$lt"    | "Less Then"          |
| "$gte"   | "Greater Then Equal" |
| "$lte"   | "Less Then Equal"    |

```json
{ "field": { "operator": "value" } }
```

### qwe

`$and`
`$or`
`$nor`

operator: [ statement1 , statement2, statement3, ...]
`$not`
operator: statement

`$expr`
collections안의 값을 직접 비교하여 데이터를 가져올 때 사용한다.

dot notation을 허용한다.

### aggregation Framework

mongoDB query를 모두 알아보았고 이제 찾은 데이터를 정제하는 방법에 대한 내용을 알아본다.
Aggregation Framework을 통해서 데이터를 정제할 수 있다. 그룹으로 묶거나 다른 document를 생성할 수 있다.

`$project`를 통해 내가 원하는 field의 값을 찾아 낼 수 있다.
`$group`을 통해 새로운 document의 구조를 생성할 수 있다.

`$sum`을 사용하여 해당 데이터의 수를 추려 낼 수 있다.

```js
db.collections.aggregate([
  { $project: { address: 1, _id: 0 } },
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);
```

`$address.country`를 기준으로 count의 값을 계속 더하는 방식으로 `$address.country`의 데이터가 얼마나 있는지 찾아 낼 수 있다.

Mysql workbench를 사용하면서 query sheet를 저장해두고 실행하는 것과 비슷한 방식으로 aggregation framwork을 사용할 수 있다.

## cursor method

실제 데이터에 영향을 주는게 아니라 출력 결과를 변경하기 위한 메서드
`count()`, `pretty()`, `limit()`, `sort()`가 있다.

`count()`는 해당되는 document의 수를 세어준다.

`pretty()`는 terminal에서 사람이 보기 쉽게 정렬해준다.

`limit()`은 인자로 받은 값 만큼만 document를 출력한다.

`sort()`는 인자 조건에 따라서 정렬한다.

`sort()`는 인자로 `{ 'fieldname' : 1 or -1}`을 받는다.
**1이면 오름차순**, **-1이면 내림차순**이 된다. 각 필드의 내림차순과 오름차순 정렬를 복수로 설정할 수 있다.
먼저 설정한 기준을 따라서 정렬하며 해당 정렬 기준으로 다름 필드의 정렬을 따라 간다.

해당 메서드는 실행 순서가 굉장히 유의미 할 수 있다.
sort이후에 limit을 하는것이 원하는 데이터를 찾아내는데 가장 적합한 순서라고 볼 수 있다.
limit을 통해 데이터의 갯수가 한정되면 이후의 정렬과정은 크게 의미가 없을 수 있기 때문이다.

하지만, mongodb에서 사용할 때는 항상 sort를 먼저 실행해주기 때문에 순서에는 큰 영향을 받지 않는다.

## indexing

몇가지 필드를 기준으로 색인을 생성하는 것 해당 색인은 관련 필드값으로 데이터를 조회할 때 탐색 범위를 설정하는데 큰 도움을 준다.
이를통해 탐색 시간 및 효율을 증대할 수 있다.

`createIndex({"field1": 1, "field2": -1})` 내림차순과 오름차순으로 색인을 생성하기

이후에는 데이터 조회를 할때 색인에 index가 생성된 field1, field2에 대한 조회를 할 때 indexing정보를 사용한다.

## upsert

있으면 update, 없으면 insert 하는 방식
업데이트를 하는 방법과 같으며 해당 데이터가 존재하지 않으면 insert를 업데이트의 내용에따라서 insert를 하게 된다.

해당 방식은 크게 데이터의 문제가 없다면 error를 발생시키지 않는 경우가 많이 발생한다.
때문에, 사용시에 반드시 오류가 발생해야 하는 부분 user정보 변경, user생성등의 기능에서는 사용을 피하는게 유지보수에 도움이 될 수 있다.

## transaction

transaction은 일렬의 과정이 모두 정상적으로 처리되었을 때, 데이터베이스에 최종적으로 변경사항을 저장하기 위한 방법이다.
단일, 혹은 복수의 데이터를 저장하는데 사용할 수 있다.

예를 들어, 유저를 저장하고 해당 유저의 마케팅용 성향 정보가 서로 다른 collection에 저장되어야 한다고 생각해보면,
유저 정보를 생성하고 해당 유저정보의 foreign key를 통해 새로운 collection에 document를 추가해주어야 한다.

이 과정에서 유저 정보가 정상적으로 생성되지 않으면 성향정보를 저장해서는 안되는 일이 발생한다.
반대로, 성향정보 저장이 정상적이지 않는경우 유저를 회원가입 시켜서는 안되는 경우도 발생할 수 있다.

이처럼 두 가지 이상의 복수 데이터를 저장하는 과정에서 서로의 데이터 관계가 영향이 있는경우를 trasaction을 통해서 처리할 수 있다.

```js
const session = client.startSession();
try {
  // ... save 1 document at collection A with { session } option

  // .. save any documents at collection B with { session } option
  session.commitTransaction();
} catch (e) {
  // handle error
  session.abortTransaction();
}
```
