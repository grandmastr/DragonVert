<template>
	<div class="f-e">
		<div class="login" id="login">
			<main class="login">
				<h2>reset password</h2>
				<div class="f-p">
					<span>
						Already have an account? Click
						<router-link to="/login">here</router-link>
					</span>
				</div>
				<form action class="login-form" @submit.prevent="handleLoginSubmit">
					<div>
						<input
							type="email"
							placeholder="Enter your email here (Be sure to double check for correctness)"
							v-model="email"
							v-validate="'required|email'"
							name="email"
							:class="{'error': errors.has('email')}"
							autofocus
						>
						<span class="help-block exception" v-show="errors.has('email')">
							<icon-living icon="exclamation-triangle" class="exception"/>Invalid email format
						</span>
					</div>
					<div class="button-submit">
						<button type="submit" :disabled="!formPassed">
                            Reset Password
                        </button>
					</div>
					<div class="no-acc">
						<span>
							Or click
							<router-link to="/register">here</router-link> to register
						</span>
					</div>
				</form>
			</main>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Footer from "../../partials/Footer";

export default {
	name: "login",
	title: "DrugStore - Forgot Password",
	components: { Footer },
	props: ["isEditing"],
	data() {
		return {
			email: "",
			formPassed: false
		};
	},
	methods: {
		handleLoginSubmit() {}
    },
    mounted() {
        this.formPassed = false
    },
	updated() {
        this.formPassed = this.errors.items.length > 0 ? false : true
        console.log(this.errors)
    }
};
</script>