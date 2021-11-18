---
dirPath: "storybook"
---

# Storybook

<listAnchor :list="list"></listAnchor>

<script>
  export default {
    computed: {
      list: function () {
        return this.$page.storybook
      }
    }
  }
</script>
