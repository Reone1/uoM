<template>
	<div class="career-box container">
		<div class="career company-info">
			<h3>{{ career.company }}</h3>
			<div>{{ career.term }}</div>
			<div>{{ career.description }}</div>
		</div>
		<div class="career project-info">
			<ul>
				<li v-bind:key="project.title" v-for="project in career.projects">
					<career-project v-bind:project="project" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import CareerProject from "./CareerProject.vue";
export default {
	props: ["career"],
	components: { CareerProject },
};
</script>
<style scoped>
.career-box {
	display: flex;
	margin-bottom: 15px;
}
.career-box:first-child {
	margin-top: 15px;
}
.company-info {
	flex: 1;
}
.project-info {
	flex: 2;
}
</style>
