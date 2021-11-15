<template>
  <div>
    <h3>{{ project.title }}</h3>
    <div>{{ project.duration }}</div>
    <hr />
    <div>{{ project.description }}</div>
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>
