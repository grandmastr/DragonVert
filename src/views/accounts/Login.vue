<template>
	<div class="f-e">
		<div class="login" id="login">
			<main class="login">
				<h2>login</h2>
				<div class="f-p">
					<span>
						Forgot password? Click
						<router-link to="/forgot-password">here</router-link>
					</span>
				</div>
				<form action class="login-form" @submit.prevent="handleLoginSubmit">
					<div>
						<input
							type="email"
							placeholder="Enter your email here"
							v-model.trim="email"
							v-validate="'required|email'"
							name="email"
							:class="{'error': errors.has('email')}"
							required
							autofocus
							autocomplete="email"
						>
						<span class="help-block exception" v-show="errors.has('email')">
							<icon-living icon="exclamation-triangle" class="exception"/>Invalid email format
						</span>
					</div>
					<div>
						<input
							type="password"
							placeholder="Enter your password here"
							v-model.trim="password"
							v-validate="'required|min:6'"
							name="password"
							:class="{'error': errors.has('password')}"
							required
							autocomplete="current-password"
						>
						<span class="help-block exception" v-show="errors.has('password')">
							<icon-living icon="exclamation-triangle"/>Your password should not be lesser than 6 characters
						</span>
					</div>
					<ul class="error-list" v-show="authenticationErrors.length > 0">
						<li v-for="error in authenticationErrors" :key="error">
							<icon-living icon="exclamation-triangle"/>
							{{error}}
						</li>
					</ul>
					<div class="button-submit" v-if="!submitting">
						<button type="submit">Login</button>
					</div>
					<div class="button-submit" v-else>
						<button type="submit" disabled="true">
							<img
								src="../../../public/images/button-loading.gif"
								alt
								:style="{position: 'relative', top: '-6px'}"
							>
						</button>
					</div>
					<div class="no-acc">
						<span>
							Don't have account yet? Click
							<router-link to="/register">here</router-link>
							<span></span> to register
						</span>
					</div>
				</form>
			</main>
		</div>
		<Footer/>
	</div>
</template>

<style lang="scss" scoped>
$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
	Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
ul.error-list {
	background: #e69592;
	padding: 15px;
	border-radius: 4px;
	border: 2px solid #b80f0a;
	margin-bottom: 15px;
	color: #b80f0a;
	font: {
		weight: normal;
		size: 0.8em;
		family: $font-family;
	}
	list-style-type: none;
	li {
		svg {
			margin-right: 5px;
		}
		&:not(:last-child) {
			margin-bottom: 5px;
		}
	}
}
</style>


<script>
import Footer from "../../partials/Footer";

export default {
	name: "login",
	title: "DragonVert - Login",
	components: { Footer },
	props: ["isEditing"],
	data() {
		return {
			email: this.$store.state.user.email || "",
			password: "",
			formPassed: false,
			submitting: false,
			authenticationErrors: []
		};
	},
	created() {
		if(this.$store.state.token !== "") {
			if(this.$store.state.user.account_type === "merchant") {
				this.$router.push("/admin/merchant");
			} else this.$router.push("/admin/user");
		}
	},
	methods: {
		handleLoginSubmit: function() {
			this.submitting = true;
			let userData = {
				data: {
					type: "LoginView",
					attributes: {
						email: this.email,
						password: this.password
					}
				}
			};
			this.$store
				.dispatch("login", userData)
				.then(r => {
					this.submitting = false;
					try{
						if (Object.keys(this.$route.query).length > 0) {
							this.$router.push(this.$route.query.redirectTo);
						} else {
							const { account_type } = this.$store.getters.getUser;

							if (account_type === "merchant") this.$router.push("/admin/merchant");
							else this.$router.push("/admin/user");
						}
					} catch(e) {
						// console.log()
					}
				})
				.catch(e => {
					this.submitting = false;
				});
		}
	},
	mounted() {
		this.formPassed = false;
	},
	updated() {
		this.authenticationErrors = this.$store.state.authErrors;
	},
	watch: {
		$route: function(to, from) {
			console.log(to);
		}
	}
};
</script>