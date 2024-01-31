(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{378:function(t,r,o){"use strict";o.r(r);var e=o(14),n=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"til-20210613"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#til-20210613"}},[t._v("#")]),t._v(" TIL-20210613")]),t._v(" "),r("h1",{attrs:{id:"today"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#today"}},[t._v("#")]),t._v(" Today")]),t._v(" "),r("ul",[r("li",[t._v("project bugfix")]),t._v(" "),r("li",[t._v("cloudfront error")])]),t._v(" "),r("h1",{attrs:{id:"content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content")]),t._v(" "),r("p",[t._v("-"),r("strong",[t._v("마지막 프로젝트 에러수정")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("To Top action\n전체 스크롤이 아닌 특정 element의 scroll을 위치를 변경해야 해서,"),r("br"),t._v(" "),r("code",[t._v("querySelector")]),t._v("를 통해서 특정 main Feature section에서 "),r("code",[t._v("scrollTo")]),t._v("를 이용해 스크롤 변경")])]),t._v(" "),r("li",[r("p",[t._v("컨텐츠 작성 이후 다시 컨텐츠 작성 페이지에 들어가면 컨텐츠 조회 페이지로 넘어가는 오류"),r("br"),t._v("\n컨텐츠 작성 이후 제출 과정에 대한 storage가 초기화 하지 않았던 문제로 다시 페이지에 접근하면 이미 제출이 완료된 상태를 인지하게 된다.")])])]),t._v(" "),r("p",[t._v("해결방식 => unMount과정에서 제출 storage를 초기화하는 action을 실행하도록 추가")]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("지도 API 관련 pin 데이터에 따른 화면 변환 구현"),r("br"),t._v("\nKakao map API 사용중에 Pin에 화면이 이동하도록하는 method를 추가하여 해결")])]),t._v(" "),r("p",[t._v("-"),r("strong",[t._v("cloudFront Error")]),t._v("-\nnextJs를 통해 정적파일을 배포한 경우 페이지를 새로고침 하게 되면 페이지 요청을 찾을수 없는(403 Error)가 발생하는 오류 발견\nnextJS를 통해 정적파일을 배포하면 "),r("code",[t._v("_next")]),t._v("안에 있는 Bundle파일을 통해 html파일을 랜더하는 과정이 들어가는데,")]),t._v(" "),r("p",[t._v("특정 URL에서는 새로고침을 하는경우 html파일을 불러 올 수 없는 에러가 발생하게 됩니다.\nCloudFront를 사용해 SPA형식의 앱을 배포하게 되면 refresh나 Redirect과정에서 403에러를 응답하게 되고,")]),t._v(" "),r("p",[t._v("해당 페이지를 어떻게 처리할지에 대해 설정해야 합니다.")])])}),[],!1,null,null,null);r.default=n.exports}}]);