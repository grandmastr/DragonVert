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
		this.$http.interceptors.response.use(response => response, error => {
			if(error.request.status === 401) {
				console.table(error);
				console.log(`New error: `, error.request.status);
				this.$store.dispatch("logout")
						.then(() => this.$router.push("/login"));
			}
			return Promise.reject(error)
		});

		this.$store.dispatch("updateCart");


		// this.$http.interceptors.response.use(undefined, function(e) {
		// 	return new Promise(function(resolve, reject) {
		// 		if (
		// 			e.response.status === 401
		// 		) {
		// 			console.log("James Olsen");
		// 			this.$store.dispatch("logout")
		// 					.then(() => this.$router.push("/login"));
		// 		}
		// 		throw e;
		// 	});
		// });
	}
};
</script>
