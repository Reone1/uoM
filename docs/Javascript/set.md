# Set Data 다루기

## JS set data

> Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 하나의 Set 내 값은 한 번만 나타날 수 있습니다. 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.

Set은 JS에서 배열을 다루는 것과 비슷한 방식으로 다룰 수 있습니다.
내부의 요소를 순회하며 처리하는 map, forEach사용할 수 있다. 다만, filter, sort, reduce등의 고차함수는 사용이 불가능 하다.

## method

Set은 다음과 같은 메서드를 가지고 있다.

### `add`

해당 요소를 set에 추가하는 메서드

```js
let set = new Set([1, 2, 3, 4]);

set.add(5); // set {1, 2, 3, 4, 5}
```

### `has`

해당 요소가 set안에 존재하는지 확인하는 메서드

```js
let set = new Set([1,2,3,4)

set.has(2) // true
set.has(5) // false
```

### `clear`

Set data를 비우는 메서드

```js
let set = new Set([1, 2, 3, 4]);

set.clear(); // set {}
```

### `size`

메서드가 아닌 property이지만 Array와 다르게 Set에 존재하는 property로 여기에 추가 했습니다.
해당 property는 Set Data의 크기를 알 수 있다.

```js
let set = new Set([1, 2, 3, 4]);

set.size; // 4
```

## Set Data handles

Set을 이용한 데이터 만들기 예제

집합의 형식을 하고있는 Set을 이용해 중복데이터나 교차 데이터를 처리하는데 사용할 수 있다.

## 교집합

두 집합의 공통된 원소를 찾아내는 방법

```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4, 5]);

function interSectionSet(setA, setB) {
  const interSet = new Set();
  setB.forEach((el) => {
    if (setA.has(el)) interSet.add(el);
  });
  return interSet;
}

console.log(interSectionSet(A, B));
```

## 합집합

두 집합의 모든 원소를 가지고 있는 집합

```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4, 5]);

function unionSet(setA, setB) {
  const union = new Set(setA);
  setB.forEach((el) => {
    union.add(el);
  });
  return union;
}

console.log(unionSet(A, B));
```

## 차집합

기준 집합에서의 두 집합의 공통된 원소를 제외한 원소의 집합

```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4, 5]);

function diffSet(setA, setB) {
  const diff = new Set(setA);
  setB.forEach((el) => {
    diff.delete(el);
  });
  return diff;
}

console.log(diffSet(A, B));
```

## 부분집합

기준 집합에 완전한 부분집합인지 확인하는 경우

```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4, 5]);
const C = new Set([1, 2]);
function isSubSet(setA, setB) {
  let flag = true;
  setB.forEach((el) => {
    if (!setA.has(el)) flag = false;
  });
  return flag;
}

console.log(isSubSet(A, B)); // false
console.log(isSubSet(A, C)); // true
```
