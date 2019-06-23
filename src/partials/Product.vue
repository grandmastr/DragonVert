<template>
	<router-link :to="`/equipments/${product.id}`">
		<figure :style="{backgroundImage: `url(${product.attributes.image})`}">
			<p v-if="this.$store.state.cart.indexOf(product) < 0" class="add-to-cart-button">
				<button @click.prevent="addToCart(product.id)">Add To Cart</button>
			</p>
			<p v-else class="remove-from-cart-button">
				<button @click.prevent="removeFromCart(id)">Remove From Cart</button>
			</p>
		</figure>
		<figcaption>
			<span class="product-name">{{product.attributes.name}}</span>
			<p class="product-price">{{money(parseInt(product.attributes.price))}}</p>
		</figcaption>
	</router-link>
</template>

<script>
import axios from "axios";

export default {
	name: "product",
	data() {
		return {
			cart: this.$store.state.cart,
			addingToCart: false
		};
	},
	props: ["product"],
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
			axios(`https://dragonvert.joppa.ng/cart/`, {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/vnd.api+json'
				},
				data: productDetails
			})
					.then(response => {
						console.log(response)
					})
					.catch(e => console.log(e))
		},
		removeFromCart(id) {
			this.$store.commit(REMOVE_FROM_CART, id);
		},
		convertToCash(price) {
			if (typeof price !== "string") price = String(price);
			price = price.split("").reverse();

			for (let i in price) if ((i - 3) % 3 === 0 && i != 0) price[i] = `${price[i]},`;

			const result = price.reverse().join("");

			return result;
		}
	},
	updated() {}
};
</script>
