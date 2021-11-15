<template>
  <li>
    <h2>{{ career.company }}</h2>
    <div>{{ career.term }}</div>
    <div>{{ career.description }}</div>
    <ul>
      <li v-bind:key="project.title" v-for="project in projects">
        <career-project v-bind:project="project" />
      </li>
    </ul>
  </li>
</template>

<script>
import CareerProject from "./CareerProject.vue";
export default {
  props: ["career", "projects"],
  components: { CareerProject },
};
</script>
