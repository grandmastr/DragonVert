<template id="CategoryProducts">
	<div>
		<div class="product-listing">
			<div class="grid-wrapper" id="products">
				<div class="products-main-card grid-row">
					<div
						v-for="product in products"
						class="col-xsmall-6 col-small-4 col-medium-3 product-card"
						:key="product.id * Math.random(1)"
					>
						<Product :product="product"/>
					</div>
				</div>
				<!-- <div class="view-more">
						<span>
							<router-link :to="`/drugs/page=${1}`">view all</router-link>
						</span>
				</div>-->
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
import Loader from "./Loader";
import Product from "./Product";

export default {
	name: "CategoryProducts",
	data() {
		return {
			showLoader: true
		};
	},
	props: ["products"],
	components: { Product }
};
</script>