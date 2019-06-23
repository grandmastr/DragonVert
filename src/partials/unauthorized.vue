<template>
	<div id="unauthorized">
		<main class="unauthorized">
			<div class="unauthBox">
				<h2>
					You are not authorized to be here. If this message persists,
					<router-link to="/contact">contact</router-link>
					<b></b>
					our support center, you will being redirected to the home page in {{countDown}}s
				</h2>
			</div>
		</main>
	</div>
</template>
<script>
export default {
	name: "unauthorized",
	data() {
		return {
			countDown: 5
		};
	},
	created() {
		console.log(this.$router);
	},
	destroyed() {
		window.clearInterval(this.interval);
	},
	mounted() {
		this.interval = setInterval(() => {
			if (this.countDown > 0) this.countDown--;
			else this.$router.push("/");
		}, 1000);
	}
};
</script>