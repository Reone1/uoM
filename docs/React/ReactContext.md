---
refernce: https://devtrium.com/posts/how-use-react-context-pro
---

## context란 무엇인가

> 깊은 곳까지 들어가면 끝이 없다.

context는 프로그래밍에서 많은 의미를 갖는다. 이 글에서는 React context API에 대한 설명을 위한 간단한 내용만 다룹니다.
context는 사전적 의미로 문맥을 뜻하며, 코드가 실행되는 상태라고 생각 할 수 있습니다.

React context API는 컴포넌트의 렌더링에서 해당 context의 상태를 참조하여 사용하는 것으로, 실행 상황에서의 필요한 값을 참조하는 용도로 많이 사용됩니다.

## Context API

State의 통합 관리를 생각하다보면 Redux같은 store 형태의 global State를 설정할 수 있지만, React 공식문서에서 설명하는 Context API를 통해서도 구현이 가능하다.
간단한 형태의 Context API 사용을 기록하고, 가장 보편적인 형태를 알아본다.

## Why Context API

**왜 Context API를 사용하는 것인가?**  
Store를 왜 사용하게 되는지 생각해보면, State의 Component간 전달을 위해 우리는 Store를 사용하게 된다.
Component에게 Props형태로 State를 전달하게 되면, Props drilling으로 인한 코드 가독성이 저하된다.

**왜 상태관리 라이브러리가 아니고 Context를 사용할까?**  
Redux, mobx등의 상태관리 library를 사용하면 되는데 꼭 Context API를 사용해야하는가?  
외부 상태관리 Library는 일정한 규칙을 가지고 동작한다. 대부분 React의 상태관리 전략과 다른 방식을 많이 사용하며 Hooks을 이용한 Recoil정도만 비슷하게 동작한다.  
이러한 이유로, React에 상태관리 라이브러리를 추가하여 사용하는 일은 단순하게 생각할 일이 아니다.

서비스의 규모가 작고 관리해야하는 상태가 그렇게 복잡한 경우가 아니라면 Context API를 사용하는 것이 유리할 수 있다.

## Context API

> Context API는 어떻게 동작할까?

기본적으로 Context는 문맥이라는 뜻으로 현재 코드가 실행되는 scope의 개념을 가지고 있는 객체이다. Context API는 특정 Component의 스코프안에 접근할 수 있는 변수를 설정하여 해당 컴포넌트 하위에 있는 node에서 모두 해당 Context에 접근할 수 있는 방식으로 동작한다.

1. Context 생성
2. Context 설정
3. Context 호출

이와 같은 3단계 과정을 거쳐서 Context API를 사용할 수 있으며, 각 단계는 다음과 같이 구현한다.
간단한 Login Form을 통해 작성해보면

```js
// Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const submitAction = ({ email, password }) => {
    // 서버에 로그인 요청 함수
  };
  const submitHandler = (e) => {
    e.preventDefault();
    SubmitAction(auth);
  };
  const onChangeTextField = (e) => {
    const { value, name } = e.target;
    setAuth((state) => ({ ...state, [name]: value }));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeTextField}
        />
        <input
          type="passwrod"
          name="pw"
          value={password}
          onChange={onChangeTextField}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
```

이처럼 전부 한곳에서 처리할 수 있다면 Context를 사용할 필요가 없지만, 값이 변경되는 부분과 제출하는 부분이 다른 Component가 된다면 Context를 이용해야 할 것이다.
먼저 3개의 Component로 분리하면

- `Login.js`
- `InputEmail.js`
- `InputPassword.js`

이렇게 나눠 볼 수 있다.

```js
// Login.jsx
import React, { useState } from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // submit request to Server
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <InputEamil />
        <InputPassword />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
```

```js
// InputEmail.jsx
import React, { useState } from "react";

const InputEmail = () => {
  const [value, setValue] = useState();
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return <input type="text" value={value} onChange={onChangeHandler} />;
};
export default InputEmail;
```

```js
// InputPassword.jsx
import React, { useState } from "react";

const InputPassword = () => {
  const [value, setValue] = useState();
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return <input type="text" value={value} onChange={onChangeHandler} />;
};
export default InputPassword;
```

이 처럼 Field의 값을 각 `component`에서 관리하게하고 그 값을 한번에 제출하는 방식을 취할 때,  
`Login` Component에서 Context를 제공하고 Email, Password를 각각 받아서 사용할 수 있게 해준다.

```js
// Login.jsx
import React from "react";

export const LoginContext = React.createContext();

const Login = () => {
  return (
    <LoginContext.Provider value={{ email: "email", password: "password" }}>
      <form onSubmit={submitHandler}>
        <InputEamil />
        <InputPassword />
        <button type="submit">submit</button>
      </form>
    </LoginContext.Provider>
  );
};
export default Login;
```

이처럼 Login Component에서 `creaetContext`를 통해서 Context를 생성하고, Context의 method인 `Provider`를 이용해 하위 Component에 그 값을 주입 할 수 있다.  
각각의 하위 컴포넌트는 값을 읽어오기 위해 별도의 조치를 `consumer`를 설정해야 한다.

```js
import React, { useState, useContext } from "react";
import LoginContext from "../Login";

const InputPassword = () => {
  const { email } = useContext(LoginContext);
  const onChangeHandler = (e) => {
    const { value } = e.target;
    // context를 변경하기
  };
  return <input type="text" value={value} onChange={onChangeHandler} />;
};
export default InputPassword;
```

아직 컨텍스트에 직접 접근하여 변경하지는 못하지만 context를 불러와 적용하는데 성공 했다. 컨텍스트를 직접 변경하도록 해본다.

```js
// Login.jsx
import React, { useState, createContext } from "react";
import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";

export const LoginContext = createContext();

const Login = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const submitAction = ({ email, password }) => {
    // 서버에 로그인 요청 함수
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitAction(auth);
  };

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      <form onSubmit={submitHandler}>
        <InputEmail />
        <InputPassword />
        <button type="submit">submit</button>
      </form>
    </LoginContext.Provider>
  );
};

export default Login;
```

로그인 컴포넌트에 `State`를 설정하고, `Dispatch`를 context에 설정하여 하위 컴포넌트에서 접근할 수 있도록 한다.

```js
// InputEmail.jsx
import React, { useContext } from "react";+
import { LoginContext } from "../Login";

const InputEmail = () => {
  const { auth, setAuth } = useContext(LoginContext);
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setAuth((state) => ({ ...state, email: value }));
  };
  return <input type="text" value={auth.email} onChange={onChangeHandler} />;
};
export default InputEmail;
```

하위 컴포넌트에서 불러온 Context를 통해 Context에 직접적인 변경을 반영하도록 한다.

## 이렇게만 하면 잘 하는 걸까?

이 방법이면 우리는 Context를 잘 사용하고 있다고 할 수 있을까?  
코드를 잘 살펴보면 Component 파일에서 Context를 선언하고 export 해주는 과정이 Login Component에 존재하는 것을 알 수 있다.

이러한 코드는 Context의 위치를 찾는 과정 부터 시작해서 참조부터 복잡하게 할 가능성이 생긴다.  
Context를 한군데서 관리하고 Provider와 Consumer를 Context가 생성된 곳에서 정의해서 Component에서 사용할 수 있는 방법이 필요하다.
