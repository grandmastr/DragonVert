<template>
	<div>
		<div class="contact" id="contact">
			<main class="contact-form-body">
				<form action class="contact-form">
					<h2>Contact Us</h2>
					<div class="grid-wrapper">
						<div class="grid-row">
							<div class="col-xsmall-12">
								<input
									type="text"
									name="fName"
									id
									placeholder="Enter your full name"
									v-validate="'required'"
									v-model="fullName"
									:class="{'error': errors.has('fName')}"
								>
								<span class="help-block email-help" v-show="errors.has('fName')">
									<icon-living icon="exclamation-triangle"/>Field cannot be left empty
								</span>
							</div>
							<div class="contact-split col-xsmall-12 col-medium-6">
								<div>
									<input
										type="email"
										name="email"
										id
										placeholder="Enter your email address"
										v-validate="'required|email'"
										v-model="email"
										:class="{'error': errors.has('email')}"
									>
								</div>
							</div>
							<div class="col-xsmall-12 col-medium-6">
								<div>
									<input
										type="text"
										name="subject"
										id
										placeholder="Enter message subject"
										v-model="subject"
										:class="{'error': errors.has('subject')}"
									>
								</div>
							</div>
							<span class="help-block exception" v-show="errors.has('email')">
								<icon-living icon="exclamation-triangle"/>Invalid email format
							</span>
							<div class="col-xsmall-12">
								<div>
									<textarea
										name="message"
										id
										cols="30"
										rows="5"
										placeholder="Enter your message here"
										v-validate="'required'"
										v-model="message"
										:class="{'error': errors.has('message')}"
									></textarea>
									<span class="help-block exception" v-show="errors.has('message')">
										<icon-living icon="exclamation-triangle"/>Field cannot be left empty
									</span>
								</div>
							</div>
						</div>
						<div class="button-submit">
							<button type="submit" disabled>Login</button>
						</div>
					</div>
				</form>
			</main>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Footer from "../partials/Footer";
export default {
	name: "contact",
	title: "DragonVert - Contact Us",
	components: { Footer },
	created() {
		window.scrollTo(0, 0);
	},
	data() {
		return {
			fullName: "",
			email: "",
			message: "",
			subject: ""
		};
	}
};
</script>