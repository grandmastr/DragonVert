<template>
	<div id="manageOrders">
		<!-- <p v-for="order in orders" :key="order.stock_id">{{order}}</p> -->
		<table class="orders">
			<tr>
				<th>#</th>
				<th>Order ID</th>
				<th>Product Name</th>
				<th>Brand</th>
				<th>Price</th>
				<th>Quantity</th>
				<th>Total Price</th>
				<th>Delivery Address</th>
				<th>Phone Number</th>
				<th>Email</th>
				<th>Time of order</th>
			</tr>
			<tr v-for="(order, index) in orders" :key="order.id">
				<td>{{index + 1}}</td>
				<td>
					<router-link to style="text-decoration: none">{{order.order_id}}</router-link>
				</td>
				<td>{{order.stock.name}}</td>
				<td>{{order.stock.brand}}</td>
				<td>{{money(parseInt(order.stock.price))}}</td>
				<td>{{parseInt(order.quantity)}}</td>
				<td>{{money(parseInt(order.quantity * order.stock.price))}}</td>
				<td>{{order.order.address}}</td>
				<td>{{order.order.user.phone}}</td>
				<td>{{order.order.user.email}}</td>
				<td>{{order.order.created_at}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "manageOrders",
	props: ["orders"],
	computed: {
		money: () => require("../../mixins/helpers").money
	}
};
</script>
