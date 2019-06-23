<template id="cartProduct">
	<div>
		<td>{{product.name}}</td>
		<td>{{convertToCash(parseInt(product.price))}}</td>
		<td>
			<input
				type="number"
				@change="updateQty(product.id,product.quantity)"
				:min="1"
				:max="product.quantity"
				:value="productName"
			>
		</td>
		<td>{{convertToCash(parseInt(productPrice * quantityToPurchase))}}</td>
		<td>
			<icon-living icon="times" @click="removeFromCart(productID)" class="fa1-times"/>
		</td>
	</div>
</template>

<script>
export default {
	name: "cartProduct",
	props: [
		"productName",
		"productID",
		"productPrice",
		"availableQty",
		"quantityToPurchase"
	],
	methods: {
		removeFromCart(id) {
			this.$store.commit(REMOVE_FROM_CART, id);
		},
		convertToCash(price) {
			if (typeof price !== "string") price = String(price);
			price = price.split("").reverse();

			for (let i in price)
				if ((i - 3) % 3 === 0 && i != 0) price[i] = `${price[i]},`;
			const result = price.reverse().join("");

			return result;
		}
	}
};
</script>