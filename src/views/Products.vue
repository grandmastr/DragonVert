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
.category-header {
	max-width: 1240px;
	margin: auto;
	position: relative;
	top: 120px;
	padding: 12px;
}
</style>

<template>
	<div>
		<main id="allProducts">
			<div class>
				<main class="category-page-body">
					<h2 class="category-header">Recently Added</h2>
					<template v-if="products.length === 0">
						<Loader/>
					</template>
					<template v-else>
						<div class="category-products">
							<CategoryProducts :products="products"/>
						</div>
						<div v-show="loadingMore">
							<Loader/>
						</div>
					</template>
				</main>
			</div>
		</main>
	</div>
</template>

<script>
import axios from "axios";
import CategoryProducts from "../partials/CategoryProducts";
import Loader from "../partials/Loader";
import Footer from "../partials/Footer";

export default {
	name: "allProducts",
	data() {
		return {
			bottom: false,
			products: [],
			currentPage: 1,
			loadingMore: true,
			totalNumberOfPages: 0
		};
	},
	components: { CategoryProducts, Footer, Loader },
	title() {
		return `DragonVert - Recently Added`;
	},
	created() {
		window.scrollTo(0, 0);
		window.addEventListener(
			"scroll",
			() => (this.bottom = this.bottomVisible())
		);
		this.loadMoreProducts();
	},
	methods: {
		bottomVisible() {
			const scrollY = window.scrollY;
			const visible = document.documentElement.clientHeight;
			const pageHeight = document.documentElement.scrollHeight;
			const bottomOfPage = visible + scrollY >= pageHeight;

			return bottomOfPage || pageHeight < visible;
		},
		loadMoreProducts() {
			axios
				.get(
					`https://dragonvert.joppa.ng/equipments/?pagenumber=${
						this.currentPage
					}`
				)
				.then(response => {
					let {
						meta,data: productsArray
					} = response.data;
					let totalPages = meta.pagination.count;

					this.totalNumberOfPages = meta.pagination.pages;
					if (this.currentPage < totalPages) {
						this.currentPage += 1;
						this.loadingMore = true;
					}

					if (this.bottomVisible()) {
						if (this.currentPage < totalPages - 1) {
							this.loadMoreProducts();
						} else {
							this.loadingMore = false;
						}
					}

					for (let product of productsArray) {
						this.products.push(product);
					}

				})
				.catch(e => console.log(e));
		}
	},
	watch: {
		bottom(bottom) {
			if (bottom && this.currentPage <= this.totalNumberOfPages) {
				this.loadMoreProducts();
			} else this.loadingMore = false;
		}
	}
};
</script>