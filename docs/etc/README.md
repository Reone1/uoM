---
dirPath: etc
---

# etc

따로 묶기에 애매한 것들을 모아두는 곳
<listAnchor :list="list"></listAnchor>

<script>
  export default {
    computed: {
      list: function () {
        return this.$page.etc
      }
    }
  }
</script>
