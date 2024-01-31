(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{329:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mac에서-다중-사용자를-이용하는-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac에서-다중-사용자를-이용하는-방법"}},[a._v("#")]),a._v(" Mac에서 다중 사용자를 이용하는 방법")]),a._v(" "),t("blockquote",[t("p",[a._v("우선 모든 계정에서 github token을 발행해야지만 사용할 수 있는 방법입니다.")])]),a._v(" "),t("p",[a._v("github의 보안이 강화되면서 password를 통해 remote repository에 접근할 수 있었던 방식이 token 인증 방식을 사용하게 되었습니다.")]),a._v(" "),t("p",[a._v("이 시점에 사내계정과 개인 개정을 번갈아가면서 사용해야할 이유가 있었고 (외부에서 작업하는 경우) 해당 경우에 어떻게 하나의 PC에 여러가지 사용자를 설정하는 방법을 공유합니다.")]),a._v(" "),t("h2",{attrs:{id:"accesstoken-발급"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accesstoken-발급"}},[a._v("#")]),a._v(" accessToken 발급")]),a._v(" "),t("p",[t("code",[a._v("github")]),a._v(" > "),t("code",[a._v("Account")]),a._v(" > "),t("code",[a._v("settings")]),a._v("에서,\n위치마다 사용할 토큰을 발급받는 것이 좋습니다.")]),a._v(" "),t("p",[t("code",[a._v("personal access tokens")]),a._v(" 메뉴에서 개인이 사용할 토큰을 발급받아 내 repository의 관리 범위를 직접 정할 수 있습니다.")]),a._v(" "),t("p",[a._v("발급시에 사용한 토큰의 정보는 이후에는 조회할 수 없으니 필요한 경우는 저장할 필요가 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"credential등록하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#credential등록하기"}},[a._v("#")]),a._v(" Credential등록하기")]),a._v(" "),t("blockquote",[t("p",[a._v("해당 방식은 macBook 사용자만 해당됩니다.")])]),a._v(" "),t("ol",[t("li",[a._v("keychain에 새로운 유저를 등록하기")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("echo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://github.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("secret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" credential approve\n")])])]),t("p",[t("code",[a._v("secret")]),a._v("에 해당하는 부분에 personal token을 적용하면 해당 유저로 로그인 하여 사용할 수 있습니다.")]),a._v(" "),t("p",[a._v("이제 repository에 사용자 계정을 다시 설정해 줄 필요가 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"repository-사용자-변경하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repository-사용자-변경하기"}},[a._v("#")]),a._v(" repository 사용자 변경하기")]),a._v(" "),t("p",[t("code",[a._v("git config --local -l")]),a._v("를 통해서 현재 작업중인 repository의 사용자 정보를 알 수 있습니다.")]),a._v(" "),t("p",[a._v("새로운 사용자 정보를 설정하기 위해서는 다음과 같이 진행할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" user.name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" user.email "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("email"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" credential.username "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("code",[a._v("credential.username")]),a._v("이 중요한 부분입니다.")]),a._v(" "),t("p",[a._v("git은 global설정을 통해 "),t("code",[a._v("credential.helper=osxkeychain")]),a._v("을 사용하는 것을 알 수 있습니다. (mac)")]),a._v(" "),t("p",[a._v("이는 mac에서 사용하는 사용자 인증 방식을 가져와 사용하는 것을 표시하는데, keychain access를 통해 현재 mac에서 사용하고 있는 사용자 인증 정보를 확인할 수 있습니다.")]),a._v(" "),t("p",[a._v("먼저한 "),t("code",[a._v("echo ~")]),a._v("를 통해 keychain에 사용자 정보를 등록하고 github config 설정을 통해서 credential을 사용하게 될지 선택하게 됩니다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);