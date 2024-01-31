(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{355:function(t,s,e){"use strict";e.r(s);var a=e(14),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"til-20210321"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#til-20210321"}},[t._v("#")]),t._v(" TIL-20210321")]),t._v(" "),s("p",[t._v("vuepress로 정적 페이지를 배포하는 방법을 알아보고 나서,\n이제 github page에 어떻게 정적 페이지를 배포할 수 있을지 알아보자")]),t._v(" "),s("h2",{attrs:{id:"github-page에-적용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-page에-적용하기"}},[t._v("#")]),t._v(" github page에 적용하기")]),t._v(" "),s("p",[t._v("우리가 빌드한 파일은 "),s("code",[t._v("dist")]),t._v(" 폴더를 root directory로 하여 배포파일이 빌드된다."),s("br"),t._v("\n설정을 변경하면 다른 곳에 빌드 할 수도 있다.")]),t._v(" "),s("p",[t._v("먼저 빌드를 해서 빌드 파일이 어떻게 생성되는지 확인해보자")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("p",[t._v("지난번에 스크립트를 구성해 뒀기때문에 빌드 스크립트를 사용했다.\n빌드에 성공하면 "),s("code",[t._v(".vuepress")]),t._v("에 "),s("code",[t._v("dist")]),t._v("라고 하는 디렉토리가 생성된다.")]),t._v(" "),s("p",[t._v("그렇다면 빌드 된 폴더"),s("code",[t._v("dist")]),t._v("을 github page의 root directory로 설정해 주어야 한다.\ngithub repository settings에서 어떤 폴더를 설정할지 정해줄 수 있다.")]),t._v(" "),s("p",[t._v("찾아보면 보통은 새로운 브랜치를 생성하여 "),s("code",[t._v("dist")]),t._v(" 폴더만 커밋해 배포하는 방식을 많이 사용했다.\n배포 파일을 따로 분리해 관리하는 방식이라 이 방법을 선택하기로 했다.")]),t._v(" "),s("p",[t._v("여러가지 방식이 있지만 다음과 같은 절차를 통해 배포본을 push하기로 했다.")]),t._v(" "),s("p",[t._v("[x] 1. 빌드를 한다.\n[] 2."),s("code",[t._v("dist")]),t._v("에서 새로운 local repo를 생성한다.\n[] 3. 다시 원래 remote repo와 연결한다.\n[] 4. remote repo에 배포할 브랜치에 dist를 push 한다.")]),t._v(" "),s("p",[t._v("[x] "),s("code",[t._v("dist")]),t._v("에서 새로운 local repo를 생성한다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),s("p",[t._v("빌드한 파일에서 새로운 깃을 local repository를 생성한다.")]),t._v(" "),s("p",[t._v("[x] 원래 원격 repo와 연결한다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github page로 설정한 remote reop")]),t._v("\n")])])]),s("p",[t._v("원격 레포지토리를 연결한다.")]),t._v(" "),s("p",[t._v("[x] remote repo에서 배포할 브랜치에 현재 git repo를 push 한다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git push origin master:gh-pages\n")])])]),s("p",[t._v("현재 레포의 master 브랜치 (dist 폴더)를,"),s("br"),t._v("\n원격 레포지토리 (github pages repo)에서 gh-pages 브랜치에 푸시한다.")]),t._v(" "),s("p",[t._v("이제 github settings에서 디렉토리 설정을 해주면 배포 된다.")]),t._v(" "),s("h1",{attrs:{id:"마치며"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#마치며"}},[t._v("#")]),t._v(" 마치며")]),t._v(" "),s("p",[t._v("다음에는 github action에서 자동으로 배포본을 적용할 수 있는 방법을 알아보자\n내가 만드는 페이지, sidebar등을 적용하는 방법을 알아보자")])])}),[],!1,null,null,null);s.default=r.exports}}]);