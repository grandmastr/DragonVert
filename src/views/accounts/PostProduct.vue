<template>
	<div id="post">
		<productForm :model="model" @save-product="addProduct"/>
	</div>
</template>

<script>
import productForm from "./productForm";

export default {
	name: "edit",
	components: { productForm },
	data() {
		return {
			model: {}
		};
	},
	methods: {
		addProduct(model) {
			console.log("Product Added");
		}
	}
};
</script>