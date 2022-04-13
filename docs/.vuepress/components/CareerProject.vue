<template>
  <div>
    <h3>{{ project.title }}</h3>
    <div>{{ project.duration }}</div>
    <hr />
    <div>{{ project.description }}</div>
    <ul class="career project-skill">
      <li v-bind:key="skill" v-for="skill in project.stack">
        <Badge> {{ skill }}</Badge>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
.project-skill {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}
.project-skill > li {
  list-style-type: none;
}
</style>
