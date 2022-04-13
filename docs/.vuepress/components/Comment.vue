<template>
  <div class="theme-default-content content__default comment">
    <div id="comment"></div>
  </div>
</template>

<script>
export default {
  watch: {
    "$page.path": function () {
      window.document.querySelector(".comment").innerHTML =
        '<div id="comment"></div>';
      this.init();
    },
  },
  methods: {
    init() {
      const utterances = document.createElement("script");
      utterances.setAttribute("issue-term", "pathname");
      utterances.setAttribute("theme", "github-light");
      utterances.setAttribute("repo", `Reone1/uoM`);
      utterances.type = "text/javascript";
      utterances.async = true;
      utterances.crossorigin = "anonymous";
      utterances.src = "https://utteranc.es/client.js";
      window.document.querySelector("#comment").appendChild(utterances);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
