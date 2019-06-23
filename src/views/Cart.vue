<template>
	<div id="cart">
		<div class="cart-page">
			<h2 class="cart-header">Your Cart</h2>
			<div class="cart-body">
				<template v-if="cart.length > 0 && !loading">
					<div class="table-container">
						<table id="cartTable">
							<tr>
								<th>Equipment Name</th>
								<th>Unit Price</th>
								<th>Equipment Quantity</th>
								<th>Total Price</th>
								<th>Action</th>
							</tr>
							<tr v-for="product in cart" :key="product.id">
								<td>{{product.attributes.name}}</td>
								<td>{{money(product.attributes.price)}}</td>
								<td>{{product.attributes.quantity}}</td>
								<td>{{money(product.attributes.quantity * product.attributes.price)}}</td>
								<td>
									<icon-living icon="trash" @click="removeFromCart(product.attributes.id)"/>
								</td>
							</tr>
						</table>
					</div>
					<button>
						Proceed to checkout
					</button>
				</template>
				<template v-else>
					<div class="cart-empty">There are no items in your cart</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import Footer from "../partials/Footer";
import cartProduct from "../partials/cartProduct";
import axios from "axios";

export default {
	name: "cart",
	// components: { Footer },
	title: "DragonVert - Cart",
	data() {
		return {
			itemQty: 1,
			cart: [],
			loading: false
		};
	},
	// components: { cartProduct },
	created() {
		window.scrollTo(0, 0);
		axios.get("https://dragonvert.joppa.ng/cart/")
				.then(response => {
					if(response.status === 200) {
						console.log(response.data.data)
					}
				})
				.catch(e => console.log(e))
	},
	mounted() {
		// console.log(this.$store.state.cart)
	},
	computed:{
		money: () => require("../mixins/helpers").money
	},
	methods: {
		updateQty: function(qty, index) {},
		// clearAll() {
		// 	this.$store, (state.cart = []);
		// }
	}
};
</script>