<style lang="scss" scoped>
$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
	Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
div.no-product {
	display: flex;
	position: relative;
	top: 100px;
	background: #e69592;
	padding: 15px;
	border-radius: 4px;
	border: 2px solid #b80f0a;
	margin-bottom: 15px;
	color: #b80f0a;
	font: {
		weight: bold;
		size: 0.8em;
		family: $font-family;
	}
	list-style-type: none;
	svg {
		margin-right: 5px;
	}
}
</style>

<template>
	<div>
		<main id="category">
			<div class>
				<main class="category-page-body">
					<h2 style="text-transform: capitalize" class="category-header">{{ category.split("-").join(" ") }}</h2>
					<template v-if="this.$store.state.category.length === 0">
						<Loader/>
					</template>
					<template v-else>
						<template v-if="Array.isArray(products)">
							<div class="category-products">
								<CategoryProducts :products="products"/>
							</div>
						</template>
						<template v-else>
							<div class="no-product">
								<icon-living icon="frown-open"/>
								{{products}}
							</div>
						</template>
					</template>
				</main>
			</div>
		</main>
	</div>
</template>

<script>
import CategoryProducts from "../partials/CategoryProducts";
import Loader from "../partials/Loader";
import Footer from "../partials/Footer";

export default {
	name: "category",
	data() {
		return {
			category: this.$route.params.category
		};
	},
	components: { CategoryProducts, Footer, Loader },
	title() {
		return `DragonVert - ${this.$route.params.category}`;
	},
	created() {
		this.$store.dispatch("category", this.$route.params.category);
		window.scrollTo(0, 0);
	},
	computed: {
		products() {
			return this.$store.getters.getCategory;
		}
	},
	watch: {
		$route(to, from) {
			this.category = this.$route.params.category;
			this.$store.dispatch("category", this.$route.params.category);
		}
	}
};
</script>