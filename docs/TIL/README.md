---
dirPath: "TIL"
---

# ποΈββοΈ TIL

λ°°μ΄λ΄μ©μ κ°λ¨νκ² μ λ¦¬νλ κΈ  
λΉμΌμ μ€νλ€μ μ λ¦¬νκΈ° μν΄ μμ±νλ€.
λ§€μΌ κΎΈμ€ν νλκ²μ κΈ°λ‘νμ

# list

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
