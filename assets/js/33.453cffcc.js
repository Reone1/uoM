(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{330:function(a,t,r){"use strict";r.r(t);var e=r(14),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"github-fetching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-fetching"}},[a._v("#")]),a._v(" Github fetching")]),a._v(" "),t("h2",{attrs:{id:"local-branch와-remote-branch를-동기화-하는-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-branch와-remote-branch를-동기화-하는-방법"}},[a._v("#")]),a._v(" Local branch와 remote branch를 동기화 하는 방법")]),a._v(" "),t("p",[a._v("remote branch list를 정리하고 나면 local에 남아있는 remote branch list를 제거해주기 위한 방법입니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch origin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch update prune\n")])])]),t("p",[a._v("두 가지 명령어를 통해서 github remote branch를 local branch에 동기화 할 수 있습니다.")]),a._v(" "),t("p",[a._v("반대로 local branch에서 삭제된 branch를 remote에 동기화 하는 방법은 따로 없습니다.\nlocal branch를 기준으로 remote branch를 동기화 하기 위해서는 하나하나 삭제를 해줘야 합니다.")]),a._v(" "),t("h2",{attrs:{id:"local에서-github-remote-branch를-삭제하는-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local에서-github-remote-branch를-삭제하는-방법"}},[a._v("#")]),a._v(" local에서 github remote branch를 삭제하는 방법")]),a._v(" "),t("p",[a._v("local branch에서 cli를 통해서 remote branch를 삭제하는 방법은 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# :을 통해서 삭제")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" :"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 로컬에서 브랜치를 삭제하고 push 하기")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("두 가지 방법을 통해서 remote branch를 삭제 할 수 있습니다.")]),a._v(" "),t("p",[a._v("github webpage에서 branch를 정리하고 "),t("code",[a._v("git fetch origin -p")]),a._v("를 통해서 local branch를 정리하는게 가장 편하고 빨랐습니다.\n다만, branch를 아주 쉽게 삭제할 수 있기 때문에, 버전관리를 잘 하는게 중요합니다.")])])}),[],!1,null,null,null);t.default=s.exports}}]);