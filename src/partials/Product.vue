<template>
	<router-link :to="`/equipments/${product.id}`">
		<figure :style="{backgroundImage: `url(${product.attributes.image})`}">
			<p v-if="!this.$store.state.cart.map(p => Number(p.attributes.equipment_info.id)).includes(Number(this.product.id))" class="add-to-cart-button">
				<button @click.prevent="addToCart(product.id)">Add To Cart</button>
			</p>
			<p v-else class="remove-from-cart-button">
				<button @click.prevent="removeFromCart(product.id)">Remove From Cart</button>
			</p>
		</figure>
		<figcaption>
			<span class="product-name">{{product.attributes.name}}</span>
			<p class="product-price">{{money(parseInt(product.attributes.price))}}</p>
		</figcaption>
	</router-link>
</template>

<script>
export default {
	name: "product",
	data() {
		return {
			cart: this.$store.state.cart,
			addingToCart: false
		};
	},
	props: ["product"],
	created() {
	},
	computed: {
		money: () => {
			return require("../mixins/helpers").money;
		},
		isAdding() {
			return this.cart.indexOf(this.product) < 0;
		}
	},
	methods: {
		addToCart(id) {
			const productDetails = {
				data: {
					type: 'Cart',
					attributes: {
						equipment: {
							type: 'Equipment',
							id
						},
						quantity: 1
					}
				}
			};

			this.$store.dispatch("addToCart", productDetails);
		},
		removeFromCart(id) {
			this.$store.dispatch("removeFromCart", id);
		}
	}
};
</script>
