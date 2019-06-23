<template id="DashNav">
	<div>
		<nav class="dashnav">
			<div class="content">
				<svg class="dashNavController" @click="navClosed = !navClosed">
					<g v-if="navClosed" stroke="#000" stroke-width="4" stroke-linecap="round">
						<line x1="8" y1="12" x2="24" y2="12"></line>
						<line x1="8" y1="2" x2="24" y2="2"></line>
					</g>
					<g v-else stroke="#000" stroke-width="2.8" stroke-linecap="round">
						<line x1="8" y1="1" x2="20" y2="14"></line>
						<line x1="8" y1="14" x2="20" y2="1"></line>
					</g>
				</svg>
				<div>
					<ul>
						<li></li>
						<li></li>
						<li class="show-for-mobile">
							<router-link to="/cart" v-show="!superAdmin">
								<icon-living icon="shopping-cart" title="Go to cart"/>
								<span class="cart-badge" v-if="$store.state.cart.length > 0">{{$store.state.cart.length}}</span>
								<span class="cart-badge" v-else>{{0}}</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "DashNav",
	data() {
		return {};
	},
	props: ["navClosed", "superAdmin"]
};
</script>