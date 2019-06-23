<template>
	<div id="edit">
		<productForm isEditing="true" :model="model" @save-product="updateProduct"/>
	</div>
</template>

<script>
import productForm from "./productForm";

export default {
	name: "edit",
	data() {
		return {
			model: {}
		};
	},
	components: { productForm },
	methods: {
		updateProduct(model) {
			console.log("Product Updated");
		}
	}
};
</script>