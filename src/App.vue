<template>
	<div id="app">
		<quickNav/>
		<Nav/>
		<transition name="fade">
			<router-view/>
		</transition>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

<script>
import quickNav from "./partials/quickNav.vue";
import Nav from "./partials/Nav.vue";

export default {
	name: "app",
	components: { Nav, quickNav },
	created() {
		this.$http.interceptors.response.use(undefined, function(e) {
			return new Promise(function(resolve, reject) {
				if (
					e.status === 401 &&
					e.config &&
					!e.config.__isRetryRequest
				) {
					this.$store.dispatch("logout");
				}
				throw e;
			});
		});
	}
};
</script>
