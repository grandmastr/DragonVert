<template>
	<div class="checkout-page" id="checkout">
		<template v-if="!this.$store.state.showLoader">
			<main class="checkout-page-body"></main>
		</template>
		<template>
			<Loader/>
		</template>
	</div>
</template>

<script>
import Loader from "../partials/Loader";
import Footer from "../partials/Footer";

export default {
	name: "checkout",
	title: "DragonVert - Cart | Checkout",
	components: { Loader },
	data() {
		return {};
	},
	methods: {},
	mounted() {},
	created() {
		window.scrollTo(0, 0);
	}
};
</script>