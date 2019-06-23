<template>
	<div id="home" class="home">
		<template>
			<div class="home-section">
				<!-- <h2 class="category-header">Recently Added</h2> -->
				<template v-if="!productsLoaded">
					<ProductListing
						:number="4"
						v-for="category in $store.getters.allCategories.slice(0,4)"
						:key="category.attributes.name"
						:header="category.attributes.name"
						:category="category.attributes.slug"
					/>
				</template>
				<template v-else>
					<Loader/>
				</template>
				<div class="home-content"></div>
			</div>

			<!-- <Footer/> -->
		</template>
	</div>
</template>

<style lang="scss" scoped>
div.home-section {
	max-width: 1250px;
	margin: auto;
	padding: 30px 15px;
	min-height: 50vh;
}
</style>


<script>
import Categories from "../partials/Categories";
import ProductListing from "../partials/ProductListing";
import Loader from "../partials/Loader";
import Footer from "../partials/Footer";

export default {
	name: "home",
	title: "Dragon Vert - Home",
	components: {
		Categories,
		ProductListing,
		Footer,
		Loader
	},
	data() {
		return {
			productsLoaded: false
		};
	},
	created() {
		window.scrollTo(0, 0);
	}
};
</script>