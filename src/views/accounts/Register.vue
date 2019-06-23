<style lang="scss" scoped>
	div.authentication-error{
		background: #e69592;
		padding: 15px;
		border-radius: 4px;
		border: 2px solid #b80f0a;
		margin-bottom: 15px;
		color: #b80f0a;
		font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono", "Droid Sans Mono", monospace, monospace;
	}
</style>
<template>
	<div class="register">
		<div class="register-page">
			<div class="register-form-body grid-wrapper">
				<div class="grid-row">
					<div class="col-xsmall-12 col-medium-5" style="background: #19253A;	">
						<div class="register-icon">
							<router-link to="/admin/edit/12">
								<icon-living icon="user" class="fa-4x"/>
							</router-link>
						</div>
					</div>
					<div class="col-xsmall-12 col-medium-7">
						<main class="register">
							<h2>Register</h2>
							<form class="register-form" @submit.prevent="handleRegisterSubmit" method="POST">
								<div
									class="authentication-error"
									v-if="validationError.email !== ''"
								>{{validationError.email}}</div>
								<div>
									<input
										type="email"
										placeholder="Enter your email here"
										v-model.trim="email"
										v-validate="'required|email'"
										name="email"
										:class="{'error': errors.has('email')}"
										required
									>
									<span class="help-block exception" v-show="errors.has('email')">
										<icon-living icon="exclamation-triangle" class="exception"/>Invalid email format
									</span>
								</div>
								<div>
									<label for=""></label>
									<select class="account-select" name="" v-model="account_type">
										<option value="regular">
											Regular
										</option>
										<option value="merchant">
											Merchant
										</option>
									</select>

									<input
											type="password"
											name="password"
											autocomplete="password"
											:min="minPasswordLength"
											placeholder="Enter your password"
											required
											v-model="password1"
											v-validate="'required|min:8'"
											:class="{'error': errors.has('password')}"
									>
									<span class="help-block exception" v-show="errors.has('password')">
										<icon-living icon="exclamation-triangle"/>Your password should be a minumum of {{minPasswordLength}} characters
									</span>
								</div>
								<div>
									<input
										type="password"
										name
										autocomplete="password"
										:min="minPasswordLength"
										placeholder="Confirm your password"
										required
										v-model="password2"
									>
									<span class="help-block exception" v-show="passwordMismatch">
										<icon-living icon="exclamation-triangle"/>Passwords don't match
									</span>
								</div>
								<div class="button-submit">
									<button type="submit" v-if="!submitting">Register</button>
									<button type="submit" v-else disabled>
										<img
											src="../../../public/images/button-loading.gif"
											alt
											:style="{position: 'relative', top: '-6.5px'}"
											id="buttonLoader"
										>
									</button>
								</div>
								<div class="no-acc">
									<span>
										Already have an account? Click
										<router-link to="/login">here</router-link> to login
									</span>
									<span>
										Want to register as a pharmacy? Click
										<router-link to="/pharmacy-register">here</router-link>
									</span>
								</div>
							</form>
						</main>
					</div>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<style lang="scss" scoped>
	$theme-color: #19253a;
	$font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

	select{
		height: 36px;
		width: 100%;
		border: 1.5px solid $theme-color;
		border-radius: 3px;
		margin-bottom: 20px;
		background: white;
		padding: 5px;
		&:focus {
			outline: none;
		}
		font: {
			family: $font-family;
			size: 0.9em;
		}
		&::placeholder {
			color: $theme-color;
		}
	}
</style>

<script>
import Footer from "../../partials/Footer";

export default {
	name: "register",
	title: "DragonVert	 - Register",
	components: { Footer },
	data() {
		return {
			email: "",
			account_type: "regular",
			password1: "",
			password2: "",
			formPassed: false,
			isAdmin: null,
			passwordMismatch: false,
			minPasswordLength: 8,
			submitting: false,
			validationError: {
				email: ""
			}
		};
	},
	updated() {
		this.password1 !== this.password2
			? (this.passwordMismatch = true)
			: (this.passwordMismatch = false);
	},
	methods: {
		handleRegisterSubmit: function() {
			if (!this.passwordMatch && this.errors.items.length === 0) {
				this.submitting = true;
				let userDetails = {
					data:{
						type: "RegisterView",
						attributes: {
							email: this.email,
							account_type: this.account_type.toLowerCase(),
							password1: this.password1,
							password2: this.password2
						}
					}
				};
				this.$store
					.dispatch("register", userDetails)
					.then(() => {
						this.submitting = false;
						let user = JSON.parse(localStorage.getItem("user"));
						this.$store.dispatch("updateUser",user)
							.then(r => {
								try{
									if(user.account_type === "merchant") {
										if(user.first_name === "") {
											this.$router.push("/admin/complete-details");
										} else {
											this.$router.push("/admin/super");
										}
									} else {
										this.$router.push('/admin/user');
									}
								} catch(e) {
									console.log(e)
								}
							}).catch(e => console.log(e));
					})
					.catch(e => {
						this.submitting = false;
						if(e.response.status === 400) {
							this.validationError.email = e.response.data.email[0];
							console.log(e)
						} else {
							this.validationError.email = "";
							console.table(e);
						}
					});
			} else {
			}
		}
	}
};
</script>