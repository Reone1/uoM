(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{288:function(s,t,a){s.exports=a.p+"assets/img/1.dcb48065.png"},289:function(s,t,a){s.exports=a.p+"assets/img/2.12a5a01e.png"},352:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"til-20210320"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#til-20210320"}},[s._v("#")]),s._v(" TIL-20210320")]),s._v(" "),t("h2",{attrs:{id:"github-page로-블로그-만들기-📚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-page로-블로그-만들기-📚"}},[s._v("#")]),s._v(" github page로 블로그 만들기 📚")]),s._v(" "),t("p",[s._v("여태까지 벨로그(velog)를 통해서 블로그를 작성했었다.\n원래 그때그때 알아본 내용을 Notion에 모아 뒀다가 blog에 옮기는 방식으로 TIL을 많이 작성했는데,\n두 가지 모두 markdown을 사용하기 때문에 쉽게 내용을 변형 할 수 있어서 편리했다.")]),s._v(" "),t("p",[s._v("그래서, markdown을 사용하는 블로그를 사용하면서 내가 페이지를 자유롭게 만들어 볼 수 없을까?"),t("br"),s._v("\n라는 생각에 이곳 저곳을 찾아봤다.")]),s._v(" "),t("p",[s._v("마침 "),t("strong",[s._v("github page")]),s._v("가 가장 적절해 보였다.")]),s._v(" "),t("ol",[t("li",[s._v("github repo를 사용하기 때문에 쉽게 글을 작성할 수 있다.")]),s._v(" "),t("li",[s._v("별도의 도메인 세팅 없이도 페이지를 쉽게 배포 할 수 있다.")]),s._v(" "),t("li",[s._v("마크다운을 사용한다.")]),s._v(" "),t("li",[s._v("내 마음데로 컴포넌트를 사용한다.")])]),s._v(" "),t("p",[s._v("그러면 어떻게 github page를 원하는 방식에 맞게 변형 시킬 수 있을까?"),t("br"),s._v(" "),t("strong",[s._v("vuepress")]),s._v("라는 framework를 알게 되었다.")]),s._v(" "),t("p",[t("code",[s._v("*.md")]),s._v(" 파일을 기반으로 정적사이트를 빌드하여 배포하기 때문에,"),t("br"),s._v("\ngithub에서 사용하던 markdown을 그대로 옮겨와 파일로 작성하는게 편해 보였다.")]),s._v(" "),t("p",[s._v("vuejs를 한번도 다뤄본적은 없지만,"),t("br"),s._v("\n이번기회에 간단하게만 사용해보는것도 재미있을 것 같아 시도해보았다.")]),s._v(" "),t("h2",{attrs:{id:"github-page-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-page-설정"}},[s._v("#")]),s._v(" github page 설정 📘")]),s._v(" "),t("p",[s._v("github repository는 settings 설정을 통해서 해당 페이지의 브랜치, 폴더 등을 정적파일로 배포할 수 있다.\n이 곳에서 브랜치를 정하고 어떤 경로를 root directory로 설정할 것인지 정하면 된다.")]),s._v(" "),t("p",[t("img",{attrs:{src:a(288),alt:"210320-1"}})]),s._v(" "),t("h2",{attrs:{id:"vuepress로-정적-페이지-배포하기-🍎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress로-정적-페이지-배포하기-🍎"}},[s._v("#")]),s._v(" vuepress로 정적 페이지 배포하기 🍎")]),s._v(" "),t("p",[s._v("먼저 내가 블로그의 내용을 채울 레포를 만든다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" *내가 만들 레포 이름*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" *내가 만든 레포 이름*\n")])])]),t("p",[s._v("nodejs 프로젝트로 초기화 한다."),t("br"),s._v("\nvuepress를 설치한다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dev")]),s._v(" vuepress\n")])])]),t("p",[s._v("이제부터는 vuepress의 공식 문서를 매우 주의깊게 찾아보면 쉽게 따라 갈 수 있다."),t("br"),s._v("\nvuepress의 파일을 담아줄 docs 폴더를 만든다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n")])])]),t("p",[s._v("먼저 "),t("code",[s._v(".vuepress")]),s._v(" 폴더(directory)를 만든다.")]),s._v(" "),t("p",[s._v("그리고, "),t("code",[s._v("vuepress")]),s._v("에서 사용할 "),t("code",[s._v("config.js")]),s._v("을 생성한다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .vuepress\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" config.js\n")])])]),t("p",[s._v("vuepress documents에 있는 기본 설정을 일단 붙여 넣어 보았다.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello VuePress"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Just playing around"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("그리고, root dir에 README.md를 작성한다.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// README.md")]),s._v("\n# Hello World\n")])])]),t("p",[s._v("이제 docs에 생성되는 "),t("code",[s._v("*.md")]),s._v("파일 들을 "),t("code",[s._v(".vuepress")]),s._v("에 빌드해서 사이트를 확인 할 준비가 끝났다.")]),s._v(" "),t("p",[t("code",[s._v("package.json")]),s._v("에서 script를 작성해 nodepress를 실행 해보자")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... other props */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... other props */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("build")]),s._v("는 배포를 위해서 정적 파일을 생성하기 위한 script이다.\n"),t("code",[s._v("dev")]),s._v("를 실행하게 되면, 로컬에서 정적파일 배포 페이지가 어떻게 나오게 될지 확인 해 볼 수 있다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])])]),t("p",[s._v("다음과 같은 페이지가 배포 되었음을 확인 할 수 있다. "),t("code",[s._v("localhost:8080")]),s._v(" "),t("img",{attrs:{src:a(289),alt:"210320-2"}})]),s._v(" "),t("h1",{attrs:{id:"마무리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[s._v("#")]),s._v(" 마무리")]),s._v(" "),t("p",[s._v("간단한 배포 과정을 알아볼 수 있었다."),t("br"),s._v("\n다음에는 내가 빌드한 파일을 어떻게 github page에 배포할 수 있는지 알아보자")])])}),[],!1,null,null,null);t.default=r.exports}}]);