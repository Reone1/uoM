---
dirPath: "TIL"
---

# 🏋️‍♂️ TIL

배운내용을 간단하게 정리하는 글  
당일의 스택들을 정리하기 위해 작성한다.
매일 꾸준히 하는것을 기록하자

<listAnchor :list="list"></listAnchor>

<script>
  export default {
    computed: {
      list: function () {
        return this.$page.TIL
      }
    }
  }
</script>
