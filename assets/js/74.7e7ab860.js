(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{370:function(t,e,v){"use strict";v.r(e);var a=v(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"til-20210416"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#til-20210416"}},[t._v("#")]),t._v(" TIL-20210416")]),t._v(" "),e("h1",{attrs:{id:"today"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#today"}},[t._v("#")]),t._v(" Today")]),t._v(" "),e("ul",[e("li",[t._v("OAuth")])]),t._v(" "),e("h1",{attrs:{id:"content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content")]),t._v(" "),e("h2",{attrs:{id:"oauth란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth란"}},[t._v("#")]),t._v(" OAuth란")]),t._v(" "),e("p",[t._v("OAuth는 인증을 위한 오픈 스탠더드 프로토콜로, 특정 인증기관을 통해 사용자를 인증하고, 사용자 정보의 접근권한을 부여 받는 형태의 인증 방식이다.\n많이 들어본 OAuth인증 서비스로는 구글, 페이스북, 트위터, 카카오, 네이버등이 있다.")]),t._v(" "),e("p",[t._v("우리가 일종의 서비스를 만들면서 facebook, twitter의 기능이나 데이터를 받아와 사용할 수 있게 하는 방식이다.\n인증(authentication)로직을 통해 접근 권한(authorization)을 취득하는 방식이라고 볼 수 있다.")]),t._v(" "),e("h2",{attrs:{id:"인증과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인증과정"}},[t._v("#")]),t._v(" 인증과정")]),t._v(" "),e("ol",[e("li",[t._v("사용자(client)가 우리 서비스(A)에서 페이스북으로 로그인(가입), 카카오로 로그인(가입)을 시도 하게 된다.")]),t._v(" "),e("li",[t._v("사용자(client)에게 페이스북, 카카오에서 서비스(A)에서 정보 및 기능 제공에 대한 요청을 한다.")]),t._v(" "),e("li",[t._v("사용자(client)가 허용한다면 request token(code)를 서비스(A)에 제공한다.")]),t._v(" "),e("li",[t._v("request token(code)를 제공 받은 서비스(A)는 페이스북, 카카오에 request token(code)를 이용해 access token을 제공 받는다.")]),t._v(" "),e("li",[t._v("access Token을 사용자(client)에 전달한다.")]),t._v(" "),e("li",[t._v("사용자(client)는 전달 받은 access token을 이용해서 서비스(A)를 사용할 수 있는 사용자로 인증 받는다.")])]),t._v(" "),e("h2",{attrs:{id:"oauth-인증의-중요-용어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth-인증의-중요-용어"}},[t._v("#")]),t._v(" OAuth 인증의 중요 용어")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("용어")]),t._v(" "),e("th",[t._v("설명")]),t._v(" "),e("th",[t._v("예")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("User")]),t._v(" "),e("td",[t._v("Service Provider에 계정을 가지고 있으면서, Consumer를 이용하려는 사용자")]),t._v(" "),e("td",[t._v("client(사용자)")])]),t._v(" "),e("tr",[e("td",[t._v("Service")]),t._v(" "),e("td",[t._v("Provider OAuth를 사용하는 Open API를 제공하는 서비스")]),t._v(" "),e("td",[t._v("페이스북, 카카오")])]),t._v(" "),e("tr",[e("td",[t._v("Consumer")]),t._v(" "),e("td",[t._v("OAuth 인증을 사용해 Service Provider의 기능을 사용하려는 애플리케이션이나 웹 서비스")]),t._v(" "),e("td",[t._v("서비스(A)")])]),t._v(" "),e("tr",[e("td",[t._v("Request")]),t._v(" "),e("td",[t._v("Token Consumer가 Service Provider에게 접근 권한을 인증받기 위해 사용하는 값. 인증이 완료된 후에는 Access Token으로 교환한다.")]),t._v(" "),e("td",[t._v("카카오, 페이스북 -> A")])]),t._v(" "),e("tr",[e("td",[t._v("Access")]),t._v(" "),e("td",[t._v("Token 인증 후 Consumer가 Service Provider의 자원에 접근하기 위한 키를 포함한 값")]),t._v(" "),e("td",[t._v("A -> 카카오 -> A -> client")])])])]),t._v(" "),e("h2",{attrs:{id:"인증과-인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인증과-인가"}},[t._v("#")]),t._v(" 인증과 인가")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("authentication (인증)"),e("br"),t._v("\naccess token을 발급 받는 것"),e("br"),t._v("\n실제 유효한 사용자인지 아닌지를 판별하는 행위를 말한다. 이 과정이 완료는 OAuth에서는 access token을 발급 받게 된다.")])]),t._v(" "),e("li",[e("p",[t._v("authorization (인가)"),e("br"),t._v("\naccess token을 통해 정보를 요청하는 것"),e("br"),t._v("\n사용자가 발급받은 access token을 이용해 데이터 및 기능에 접근하여 특정 요청이 가능한지를 아는 것이 "),e("code",[t._v("인가")]),t._v("라고 생각 할 수 있다.\naccesstoken은 실제 사용자의 권한이 달려있거나, accesstoken을 통해 서버에 저장된 접근권한을 조회, 이용기 가능하다.")])])]),t._v(" "),e("h2",{attrs:{id:"oauth-에서의-인가와-인증"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth-에서의-인가와-인증"}},[t._v("#")]),t._v(" OAuth 에서의 인가와 인증")]),t._v(" "),e("p",[t._v("OAuth에서 'Auth'는 'Authentication'(인증)뿐만 아니라 'Authorization'(인가) 또한 포함하고 있는 것이다.\n그렇기 때문에 OAuth 인증을 진행할 때 해당 서비스 제공자는 '제 3자가 어떤 정보나 서비스에 사용자의 권한으로 접근하려 하는데 허용하겠느냐'라는 안내 메시지를 보여 주는 것이다."),e("br"),t._v("\n이러한 메시지를 통해서 우리가 접근할 수 있는 데이터의 범위(인가)를 정하게 된다.\n"),e("a",{attrs:{href:"https://d2.naver.com/helloworld/24942",target:"_blank",rel:"noopener noreferrer"}},[t._v("naverD2 OAuth"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);