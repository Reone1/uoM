(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{350:function(e,r,t){"use strict";t.r(r);var a=t(14),i=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nextjs에서-middleware-사용하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nextjs에서-middleware-사용하기"}},[e._v("#")]),e._v(" NextJs에서 middleware 사용하기")]),e._v(" "),r("h2",{attrs:{id:"nextjs에서-middleware란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nextjs에서-middleware란"}},[e._v("#")]),e._v(" NextJS에서 middleware란?")]),e._v(" "),r("blockquote",[r("p",[e._v("Middleware enables you to use code over configuration. This gives you full flexibility in Next.js, because you can run code before a request is completed. Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers, or even streaming HTML. - "),r("em",[e._v("공식문서")])])]),e._v(" "),r("p",[e._v("client에서 routing을 요청하여 front app (next)가 response를 내보내는 단계에 조작이 가능한 middleware를 설정할 수 있다.")]),e._v(" "),r("p",[e._v("해당 기능은 web networking을 기반으로 동작하여 client의 요청을 변조하는게 가능하다.")]),e._v(" "),r("p",[e._v("이러한 변조를 통해 사용자 인증기능을 넣거나 param filter를 넣는게 가능합니다.")]),e._v(" "),r("h2",{attrs:{id:"사용자-인증-middleware-만들기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용자-인증-middleware-만들기"}},[e._v("#")]),e._v(" 사용자 인증 middleware 만들기")]),e._v(" "),r("p",[e._v("nextJS의 middleware는 "),r("code",[e._v("/page")]),e._v(" directory에 "),r("code",[e._v("_middleware.{ts,js}")]),e._v("를 생성해 구성할 수 있습니다.")]),e._v(" "),r("p",[e._v("해당 middleware는 redux, recoil등 client 레벨에서 돌아가는 기능을 사용할 수 없습니다.")]),e._v(" "),r("p",[e._v("왜냐하면 request단계의 처리를 진행하기 때문에, client에 javascript를 통해 구동하는 redux, recoil등 상태관리 라이브러리에 접근할 수 없기 때문입니다.")]),e._v(" "),r("p",[e._v("이러한 이유로 cookie, 또는 param을 통해서 middleware 동작을 처리할 수 있습니다.")]),e._v(" "),r("p",[e._v("사용하고자 하는 전략은 다음과 같습니다.")]),e._v(" "),r("ol",[r("li",[e._v("사용자가 로그인을 진행합니다.")]),e._v(" "),r("li",[e._v("로그인의 결과로 얻어온 auth정보를 cookie에 저장합니다.")]),e._v(" "),r("li",[e._v("해당 쿠키를 통해 페이지 routing이 변경되는 순간 정책을 적용합니다.")]),e._v(" "),r("li",[e._v("정책에 따라 redirect되거나 특정한 요청을 page에 parameter로 보내줍니다")])])])}),[],!1,null,null,null);r.default=i.exports}}]);