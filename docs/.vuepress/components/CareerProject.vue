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
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	flex-grow: 3;
	gap: 20px;
}
.project-skill > li {
	list-style-type: none;
}
.project-skill > li > span {
	background-color: red;
}
</style>
