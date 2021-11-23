# NextJs에서 middleware 사용하기

## NextJS에서 middleware란?

> Middleware enables you to use code over configuration. This gives you full flexibility in Next.js, because you can run code before a request is completed. Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers, or even streaming HTML. - _공식문서_

client에서 routing을 요청하여 front app (next)가 response를 내보내는 단계에 조작이 가능한 middleware를 설정할 수 있다.

해당 기능은 web networking을 기반으로 동작하여 client의 요청을 변조하는게 가능하다.

이러한 변조를 통해 사용자 인증기능을 넣거나 param filter를 넣는게 가능합니다.

## 사용자 인증 middleware 만들기

nextJS의 middleware는 `/page` directory에 `_middleware.{ts,js}`를 생성해 구성할 수 있습니다.

해당 middleware는 redux, recoil등 client 레벨에서 돌아가는 기능을 사용할 수 없습니다.

왜냐하면 request단계의 처리를 진행하기 때문에, client에 javascript를 통해 구동하는 redux, recoil등 상태관리 라이브러리에 접근할 수 없기 때문입니다.

이러한 이유로 cookie, 또는 param을 통해서 middleware 동작을 처리할 수 있습니다.

사용하고자 하는 전략은 다음과 같습니다.

1. 사용자가 로그인을 진행합니다.
2. 로그인의 결과로 얻어온 auth정보를 cookie에 저장합니다.
3. 해당 쿠키를 통해 페이지 routing이 변경되는 순간 정책을 적용합니다.
4. 정책에 따라 redirect되거나 특정한 요청을 page에 parameter로 보내줍니다
