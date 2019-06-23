<template>
	<div id="productDetail">
		<template v-if="Object.entries(product).length === 0">
			<Loader/>
		</template>
		<template v-else>
			<div class="product-detail-page" :key="product.id">
				<main class="product-detail-body">
<!--					<h2 class="product-name">{{product.attributes.name}}</h2>-->
					<div class="grid-wrapper">
						<div class="grid-row">
							<div class="col-xsmall-12 col-small-6">
								<div class="show-for-desktop" style="width: 500px">
									<vue-h-zoom class="image-thumbnail"
												style="background-size: cover"
												:image="activeImageThumbnail || product.attributes.image"
												:image-full="activeImageThumbnail || product.attributes.image"
												:zoom-window-size="1"
												:zoom-level="1.8"
												:zoom-window-x="620"
												:zoom-window-y="70"
												:width="480"
												:height="330"
									/>
									<div>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[0]})`}" :class="`img-thumbnail ${activeImageThumbnail === product.attributes.equipment_images[0] ? 'active' : ''}`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[0])"></span>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[1]})`}" :class="`img-thumbnail ${activeImageThumbnail === product.attributes.equipment_images[1] ? 'active' : ''}`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[1])"></span>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[2]})`}" :class="`img-thumbnail ${activeImageThumbnail === product.attributes.equipment_images[2] ? 'active' : ''} last`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[2])"></span>
									</div>
								</div>
								<div class="show-for-mobile">
									<vue-h-zoom class="image-thumbnail"
												style="background-size: cover"
												:image="product.attributes.image"
												:image-full="product.attributes.image"
												:zoom-window-size="1"
												:zoom-level="1.8"
												:zoom-window-x="620"
												:zoom-window-y="70"
												:width="290"
												:height="330"
									/>
									<div>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[0]})`}" :class="`img-thumbnail-mobile ${activeImageThumbnail === product.attributes.equipment_images[0] ? 'active' : ''}`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[0])"></span>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[1]})`}" :class="`img-thumbnail-mobile ${activeImageThumbnail === product.attributes.equipment_images[1] ? 'active' : ''}`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[1])"></span>
										<span :style="{backgroundImage: `url(${product.attributes.equipment_images[2]})`}" :class="`img-thumbnail-mobile ${activeImageThumbnail === product.attributes.equipment_images[2] ? 'active' : ''} last`" @click="changeActiveImageThumbnail(product.attributes.equipment_images[2])"></span>
									</div>
								</div>
							</div>
							<div class="space-for-mobile"></div>
							<div class="col-xsmall-12 col-small-6">
								<div class="jumbo">
									<div class="jumbo">
										<ul class="details-list">
											<li>
												<span>Name</span>
												<span>{{product.attributes.name}}</span>
											</li>
											<li>
												<span>Model</span>
												<span>{{product.attributes.model}}</span>
											</li>
											<li>
												<span>Manufacturer</span>
												<span>{{product.attributes.manufacturer}}</span>
											</li>
											<li>
												<span>Category</span>
												<span>{{product.attributes.main_category.split("-").join(" ")}}</span>
											</li>
											<li>
												<span>Year</span>
												<span>{{product.attributes.year}}</span>
											</li>
											<li>
												<span>Location</span>
												<span>{{product.attributes.country}}</span>
											</li>
											<li>
												<span>Condition</span>
												<span>{{product.attributes.condition.split("_").join(" ")}}</span>
											</li>
											<li>
												<span>Quantity</span>
												<span>{{product.attributes.quantity}}</span>
											</li>
											<li>
												<span>Used</span>
												<span>{{product.attributes.used === true ? 'Yes' : 'No'}}</span>
											</li>
										</ul>
									</div>
									<div>
										<!-- <select name="quantity" class="quantity" v-model="productQuantity">
											<option v-for="i in Number(this.product.data.stock.quantity)" :value="i" :key="i">{{i}}</option>
										</select>-->
									</div>
									<p class="product-price">{{money(parseInt(Number(product.attributes.price)))}}</p>
									<div class="detail-buttons">
										<button type="submit" @click="buyNow" class="buy-now-button">Buy Now</button>
										<button
											v-if="!$store.state.cart.includes(product)"
											type="submit"
											@click.prevent="addToCart"
											class="add-to-cart-button"
										>
											Add to cart
											<icon-living icon="plus"/>
										</button>
										<button
											v-else
											type="submit"
											@click.prevent="removeFromCart"
											class="remove-from-cart-button"
										>Remove from cart</button>
									</div>
								</div>

								<div class="jumbo mt-20">
									<h3 style="font-size: 1.2em" class="sub-t">Delivery Information</h3>
									<br>
									<ul class="details-list">
										<li>
											<span>Local Delivery</span>
											<span>{{product.attributes.region_delivery_price === 0 ? 'Not Available' : product.attributes.region_delivery_price}}</span>
										</li>
										<li>
											<span>International Delivery</span>
											<span>{{product.attributes.outside_region_delivery_price === 0 ? 'Not Available' : product.attributes.outside_region_delivery_price}}</span>
										</li>
									</ul>
									<br>
									<p>

									</p>
								</div>
								<br>
								<h3 class="sub-t">Description</h3>
								<p v-html="product.attributes.description" class="description"></p>
							</div>
						</div>
					</div>
				</main>
			</div>
		</template>
		<Footer/>
	</div>
</template>

<style scoped lang="scss">
	span.img-thumbnail{
		display: inline-block;
		height: 100px;
		width: 100px;
		border-radius: 3px;
		&:not(.last) {
			margin-right: 15px;
		}
		&.active{
			border: 2px solid #FAB000;
		}
		background: {
			position: 50% 50%;
			size: contain !important;
			origin: content-box;
			repeat: no-repeat;
		}
	}
	span.img-thumbnail-mobile{
		display: inline-block;
		height: 80px;
		width: 80px;
		border-radius: 3px;
		&:not(.last) {
			margin-right: 10px;
		}
		&.active{
			border: 2px solid #FAB000;
		}
		background: {
			position: 50% 50%;
			size: contain !important;
			origin: content-box;
			repeat: no-repeat;
		}
	}
	$small-screens: 576px;
	$medium-screens: 768px;
	.image-thumbnail{
		@media(max-width: $small-screens) {
			width: 300px #{!important};
		}
	}
div.thumbnail-area {
	height: 1000px !important;
}
.show-for-desktop{
	@media(max-width: $medium-screens) {
		display: none #{!important};
	}
}

.space-for-mobile{
	height: 200px;
}
.show-for-mobile,.space-for-mobile{
	@media(min-width: $medium-screens + 1) {
		display: none #{!important};
	}
}
	ul.details-list{
		list-style-type: none;
		li{
			span{
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
				&:not(:nth-child(2)) {
					font:{
						weight: bold;
						size: 0.9em;
					}
				}
				&:nth-child(2) {
					float: right;
					font:{
						weight: normal;
						size: 0.7em;
					}
					text-transform: capitalize;
				}
			}
		}
	}
</style>


<script>
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/mutation-types.js";
import Loader from "../partials/Loader";
import Footer from "../partials/Footer";
import VueHZoom from "vue-h-zoom";
import axios from "axios";
import Vue from "vue";

Vue.use(VueHZoom);

export default {
	name: "productDetail",
	title() {
		return this.title;
	},
	components: { Loader, Footer, VueHZoom },
	data() {
		return {
			detailsLoaded: false,
			pricePerUnit: 0,
			productQuantity: 1,
			cart: this.$store.state.cart,
			product: {},
			title: `DragonVert - ${this.product}`,
			activeImageThumbnail: ""
		};
	},
	created() {
		window.scrollTo(0, 0);
		axios
			.get(
				`https://dragonvert.joppa.ng/equipments/${
					this.$route.params.id
				}`
			)
			.then(response => {
				this.product = response.data.data;
				this.activeImageThumbnail = response.data.data.attributes.equipment_images[0];
				this.title = `DragonVert - ${this.attributes.name}`;
			})
			.catch(e => {
				console.log(e);
			});
	},
	mounted() {},
	computed: {
		money: () => require("../mixins/helpers").money
	},
	methods: {
		changeActiveImageThumbnail(newImage) {
			this.activeImageThumbnail = newImage;
		},
		addToCart() {
			this.$store.commit(ADD_TO_CART, this.product);
		},
		removeFromCart() {
			this.$store.commit(REMOVE_FROM_CART, this.product.id);
		},
		buyNow() {
			this.$store.commit(ADD_TO_CART, this.product);
			this.$router.push("/cart");
		}
	},
	watch: {
		$route: function() {
			this.product = {};
			axios
				.get(
					`https://api.drugstore.ng/get/drug/info/${
						this.$route.params.id
					}`
				)
				.then(response => {
					this.product = response.data.data.stock;
					this.title = `DragonVert - ${this.product.name}`;
				})
				.catch(e => {
					console.log(e);
				});
		}
	}
};
</script>