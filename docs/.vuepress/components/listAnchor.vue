<template>
  <div>
    <ul v-if="list">
      <li v-for="listItem in list" :key="listItem">
        <a :href="listItem + '.html'">{{ listItem }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listAnchor",
  props: ["list"],
};
</script>
