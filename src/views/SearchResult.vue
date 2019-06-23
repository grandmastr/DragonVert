<template name="searchPage">
	<div class="search-page">
		<div class="search-page-body">
			<div class="search-section"></div>
			<h2 class="search-result-header">Search results for '{{$route.params.query}}'</h2>
			<div class="grid-wrapper">
				<div class="grid-row">
					<div class="col-xsmall-12 col-small-3 col-medium-2">
						<div class="search-filter">
							<h2 class="filter-header" @click="catFilter = !catFilter">
								Category
								<span style="float: right;">
									<icon-living :icon="catFilter ? 'minus' : 'plus'"/>
								</span>
							</h2>
							<div v-show="catFilter">
								<ul class="categories">
									<li class="active first">{{category}}</li>
									<li
										v-for="c in categories"
										:class="{'active': category === c.name}"
										:key="c.name"
										@click="category = c.name"
									>{{c.name}}</li>
								</ul>
							</div>

							<h2 class="filter-header" @click="priceFilter = !priceFilter">
								Price
								<span style="float: right">
									<icon-living :icon="priceFilter ? 'minus' : 'plus'"/>
								</span>
							</h2>
							<div class="filter" v-show="priceFilter">
								<ul>
									<li class="range">
										<label for="minPriceValue">{{minPriceValue}}</label>
										<input
											type="range"
											name
											min="12"
											v-model="minPriceValue"
											max="10000"
											ref="range"
											step="5"
											id
										>
										<label for="maxPriceValue">{{maxPriceValue}}</label>
										<input
											type="range"
											name
											min="12"
											v-model="maxPriceValue"
											max="10000"
											ref="range"
											step="5"
											id
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xsmall-12 col-small-9 col-medium-10">
						<div class="search-result">
							<h3 class="found">{{resultLength}} product{{resultLength > 1 ? 's' : ''}} found</h3>
							<!-- <div class="products-section">{{filterAnswer}}</div> -->
							<div class="products-section">
								<ProductListing :number="resultLength" all="true"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br>
		<br>
		<br>
		<br>
		<Footer/>
	</div>
</template>

<script>
import Footer from "../partials/Footer";
import ProductListing from "../partials/ProductListing";
export default {
	name: "searchPage",
	title() {
		return `DragonVert - Search Result for ${this.$route.params.query}`;
	},
	data() {
		return {
			category: "General",
			catFilter: false,
			priceFilter: false,
			minPriceValue: 0,
			maxPriceValue: 0,
			resultLength: 24,
			searchQuery: this.$route.params.query
		};
	},
	components: { Footer, ProductListing },
	computed: {
		categories: function() {
			return this.$store.getters.allCategories.filter(
				c => c !== this.category
			);
		},
		filterAnswer: function() {
			this.$store.dispatch("allProducts").then(() => {
				console.log(
					this.$store.getters.allProducts.filter(
						p => p.name.toLowerCase().indexOf("omron") > 0
					)
				);
			});
			console.log(
				this.$store.getters.allProducts
					.filter(p => p.name.toLowerCase().indexOf("omron") > 0)
					.map(c => `<li> ${c} </li>`)
			);
		}
	},
	watch: {
		$route: function(from, to) {
			this.searchQuery = to.params.query;
		}
	}
};
</script>