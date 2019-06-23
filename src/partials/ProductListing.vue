<template>
	<div>
		<div class="product-listing" v-if="productsLoaded && products !== undefined">
			<div class="grid-wrapper" id="products">
				<h2 v-show="header" class="category-header">{{header}}</h2>
				<template v-if="Array.isArray(products) && products.length > 0">
					<div class="products-main-card grid-row">
						<template>
							<div
								v-for="product in products"
								class="col-xsmall-6 col-small-4 col-medium-3 product-card"
								:key="product.id"
							>
								<Product :product="product"/>
							</div>
						</template>
					</div>
					<div class="view-more">
						<span v-show="!products.length !== 0">
							<router-link :to="url">view all</router-link>
						</span>
					</div>
				</template>
				<template v-else>
					<Loader/>
				</template>
				<div class="clearfix"></div>
			</div>
		</div>
		<template v-else-if="!!!products"></template>
		<template v-else>
			<Loader/>
		</template>
	</div>
</template>


<script>
import Product from "../partials/Product";
import Loader from "../partials/Loader";
import axios from "axios";

export default {
	name: "products",
	components: { Product, Loader },
	props: ["number", "header", "all", "category"],
	data() {
		return {
			productsLoaded: false,
			products: [],
			url:
				this.header !== "Recently Added"
					? `/categories/${this.category}`
					: "/equipments/"
		};
	},
	methods: {},
	created() {
		if (Array.isArray(this.products) && this.products.length === 0) {
			let fetchUrl = !this.category
				? "https://dragonvert.joppa.ng/equipments/"
				: `https://dragonvert.joppa.ng/equipments/?main_category=${this.category}`;

			axios.get(fetchUrl).then(response => {
				this.products =
					response.data.data &&
					response.data.data.slice(
						0,
						this.number
							? this.number
							: response.data.data.length + 1
					);
				this.productsLoaded = true;
			});
		}
	}
};
</script>