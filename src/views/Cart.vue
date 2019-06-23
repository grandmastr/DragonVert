<template>
	<div id="cart">
		<div class="cart-page">
			<h2 class="cart-header">Your Cart</h2>
			<div class="cart-body">
				<template v-if="$store.state.cart">
					<template v-if="$store.state.cart.length > 0">
						<div class="table-container">
							<table id="cartTable">
								<tr>
									<th>Equipment Name</th>
									<th>Unit Price</th>
									<th>Equipment Quantity</th>
									<th>Total Price</th>
									<th>Action</th>
								</tr>
								<tr v-for="product in $store.state.cart" :key="product.id">
									<td>{{product.attributes.equipment_info.name}}</td>
									<td>{{money(product.attributes.equipment_info.price)}}</td>
									<td>{{product.attributes.quantity}}</td>
									<td>{{money(product.attributes.quantity * product.attributes.equipment_info.price)}}</td>
									<td>
										<icon-living class="remove-from-cart" style="text-align: center" icon="trash" @click="removeFromCart(product.id)"/>
									</td>
								</tr>
							</table>
							<button class="checkout-button">
								Proceed to checkout
							</button>
						</div>
					</template>
					<template v-else>
						<div class="cart-empty">There are no items in your cart</div>
					</template>
				</template>
				<template v-else>
					<Loader/>
				</template>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.remove-from-cart{
		color: #FAB000;
		cursor: pointer;
		font-size: 1.3em;
	}
	button.checkout-button{
		display: flex;
		float: right;
		position: relative;
		top: 40px;
		height: 38px;
		&:active{
			outline: 1px dashed #19253A;
		}
	}
</style>

<script>
import Loader from  "../partials/Loader";
import axios from "axios";

export default {
	name: "cart",
	components: { Loader },
	title: "DragonVert - Cart",
	data() {
		return {
			cart: this.$store.getters.cart
		};
	},
	created() {
		if(this.$store.state.token === null || this.$store.state.token === "") {
			this.$router.push({
				path: 'login',
				query: {
					redirectTo: 'cart'
				}
			});
		}

		window.scrollTo(0, 0);
	},
	computed:{
		money: () => require("../mixins/helpers").money
	},
	methods: {
		updateQty(qty, index) {},
		removeFromCart(id) {
			axios(`https://dragonvert.joppa.ng/cart/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/vnd.api+json'
				}
			}).then(response => {
				this.$store.dispatch("updateCart");
				console.table(response)
			}).catch(e => console.log(e))
		}
	}
};
</script>