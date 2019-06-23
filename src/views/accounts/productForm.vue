<template>
	<div id="productForm" class="product-form">
		<main class="product-form-page">
			<h2 class="category-header accounts">{{isEditing ? "Edit Product" : "Post Product"}}</h2>
			<form action method="post" class="product-form" @submit.prevent="saveProduct">
				<div>
					<label for="price">Product Name</label>
					<input
						type="text"
						placeholder="Enter product name here"
						v-validate="'required'"
						name="name"
						id
						v-model="product.name"
						:class="{'error': errors.has('name')}"
						autofocus
					>
					<span class="help-block email-help" v-show="errors.has('name')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty
					</span>
				</div>
				<div>
					<label for="price">Price</label>
					<input
						type="number"
						placeholder="Enter product price here"
						min="0"
						name="price"
						id
						v-model="product.price"
						v-validate="'required'"
						:class="{'error': errors.has('price')}"
					>
					<span class="help-block" v-show="errors.has('price')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty and can only contain numbers
					</span>
				</div>
				<div>
					<label for="image">Image</label>
					<input
						type="url"
						placeholder="Image"
						name="image"
						id
						v-model="product.image"
						v-validate="'required|url'"
						:class="{'error': errors.has('image')}"
					>
					<span class="help-block" v-show="errors.has('image')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty
					</span>
				</div>
				<div>
					<label for="quantity">Quantity Available</label>
					<input
						type="number"
						placeholder="Enter product price here"
						min="0"
						name="quantity"
						id
						v-model="product.quantity"
						v-validate="'required'"
						:class="{'error': errors.has('quantity')}"
					>
					<span class="help-block" v-show="errors.has('quantity')">
						<icon-living icon="exclamation-triangle"/>This field cannot be empty
					</span>
				</div>
				<div>
					<label for="description">Description</label>
					<textarea
						name="description"
						id
						cols="30"
						minlength="50"
						maxlength="300"
						rows="10"
						placeholder="Not less than 30 words"
						v-model="product.description"
						v-validate="'required'"
						:class="{'error': errors.has('description')}"
					></textarea>
					<span class="help-block" v-show="errors.has('description')">
						<icon-living icon="exclamation-triangle"/>
						This field cannot be left empty and must not contain less than 50 characters ({{product.description.length}}/30)
					</span>
					<span class="help-block-max" v-show="product.description.length >= 300">
						<icon-living icon="text-width"/>
						Maximum length reached ({{product.description.length}})
					</span>
				</div>
				<div class="button-submit">
					<button type="submit" :disabled="!formPassed" v-if="isEditing">Update</button>
					<button type="submit" :disabled="!formPassed" v-else>Submit</button>
				</div>
			</form>
		</main>
	</div>
</template>

<script>
export default {
	name: "productForm",
	props: ["isEditing", "model"],
	data() {
		return {
			product: {
				name: "",
				price: "",
				description: "",
				image: "",
				quantity: ""
			},
			formPassed: true
		};
	},
	methods: {
		saveProduct() {
			this.$emit("save-product", this.model);
		}
	}
};
</script>