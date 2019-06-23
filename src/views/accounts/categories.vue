<template>
	<div id="categories">
		<table class="pharmacies">
			<tr>
				<th>#</th>
				<th>Category Name</th>
				<th>Category Description</th>
				<th>Action</th>
			</tr>
			<tr v-for="(category,index) in categories" :key="category.name">
				<td>{{index + 1}}</td>
				<td>{{category.name}}</td>
				<td>{{category.description}}</td>
				<td>{{}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "categories",
	props: ["categories"]
};
</script>