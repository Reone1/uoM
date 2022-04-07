---
pathDir: "Job"
---

<listAnchor :list="list"></listAnchor>

<script>
  export default {
    computed: {
      list: function () {
        return this.$page.Job
      }
    }
  }
</script>
