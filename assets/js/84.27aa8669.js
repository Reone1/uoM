(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{380:function(v,_,t){"use strict";t.r(_);var s=t(14),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"til-20210617"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#til-20210617"}},[v._v("#")]),v._v(" TIL-20210617")]),v._v(" "),_("h1",{attrs:{id:"today"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#today"}},[v._v("#")]),v._v(" Today")]),v._v(" "),_("ul",[_("li",[v._v("면접 설문 서류 작성")]),v._v(" "),_("li",[v._v("코딩 테스트")])]),v._v(" "),_("h1",{attrs:{id:"content"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[v._v("#")]),v._v(" Content")]),v._v(" "),_("ul",[_("li",[v._v("1차 서류 통과 이후 개인 면접 질문에 대한 답변 작성"),_("br"),v._v("\n입사 동기, 앞으로의 목표, 퇴사이유 등...\n작성을 하면서 느낀점은 회사에 지원할 때, 회사마다의 특징에 맞추어 입사 동기와 앞으로의 목표를 연관지어 작성하는 방식이 비슷하게 되는 것 같다.")])]),v._v(" "),_("p",[v._v("데이터에 집중된 프론트 업무를 하고 싶기 때문에, 서류마다의 큰 차이점은 없지만 비슷한 내용을 하나의 글로 정리해 두는게 좋을 것 같다.")]),v._v(" "),_("ul",[_("li",[v._v("코딩 테스트\n코딩 테스트가 있다. dfs와 DP를 사용해 문제를 풀었다.")])]),v._v(" "),_("ol",[_("li",[v._v("첫 번째 문제 (dfs)"),_("br"),v._v("\n깊이 우선 탐색이 필요한 문제였다. 2차원 배열에서 같은 값을 선으로 연결 할 때, 가장 길게 연결되는 선의 길이를 찾는 문제이다.\n선은 상하좌우로만 연결이 가능하며, 2차원 배열의 값은 1~4까지 존재한다.")])]),v._v(" "),_("p",[v._v("처음에는 길이를 찾는 문제가 아니라, 같은 값을 연결해서 나오는 덩어리의 갯수를 찾는 문제인것으로 잘못 확인해서 bfs를 이용해 풀려고 시도했었다.")]),v._v(" "),_("p",[v._v("한참 bfs 기본구조를 만들어 놓고, 이후에 제한사항을 추가하려고 할 때, dfs를 이용해 풀어야한다는 사실을 알게 되었다.\n그래서, 재귀를 통해 dfs를 구현해서 문제를 해결했다.")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("두 번째 문제 (DP)\n처음과 끝이 연결된 띠에서 숫자를 골라 가장 큰 수를 만들어야 한다. 다만, 선택한 수 양 옆의 수는 선택할 수 없다. 고리형태의 띠이기 때문에 배열의 첫 번째 숫자를 고른다면, 배열의 마지막 숫자는 선택할 수 없다.")])]),v._v(" "),_("p",[v._v("문제를 간단하게 나누는게 어려웠다.\n아무것도 선택하지 않은 초기단계에서 한 칸 건너 선택하는 경우와 두 칸을 건너서 선택하는 두 가지 경우로 나누어서 선택하였다."),_("br"),v._v("\n이렇게 구성하면 마지막 숫자를 선택할 때, 첫 번째 고른 숫자가 현재의 합에 영향을 미치는지 파악하기 어려웠다.")]),v._v(" "),_("p",[v._v("예를 들면,")]),v._v(" "),_("p",[v._v("배열의 "),_("code",[v._v("3")]),v._v("번 값을 선택한 경우, 이전 선택에서 "),_("code",[v._v("0")]),v._v("번을 선택했을 수도 있고, "),_("code",[v._v("1")]),v._v(" 을 선택 했을 수도 있다. 때문에, 현재 "),_("code",[v._v("3")]),v._v("번 값을 선택했을 때, 가장 큰 경우는 "),_("code",[v._v("0번 값")]),v._v(" + "),_("code",[v._v("3번 값")]),v._v(" 또는, "),_("code",[v._v("1번 값")]),v._v(" + "),_("code",[v._v("3번 값")]),v._v("이 된다. 그중 가장 큰 수를 선택해서 이러한 과정을 끝까지 반복하는 방식으로 구현했다.")]),v._v(" "),_("p",[v._v("이 과정에서 처음 값의 선택여부를 알 수 없어서, 처음 값을 선택하는 경우와 두 번째 값부터 선택하는 경우로 나누어 풀었다."),_("br"),v._v("\n하지만, 하나의 테스트케이스를 통과하지 못 했다.")]),v._v(" "),_("p",[v._v("내일 다시 공부하면서 이유를 찾아봐야 겠다.")])])}),[],!1,null,null,null);_.default=a.exports}}]);