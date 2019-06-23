<style lang="scss" scoped>
$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
	Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
label {
	color: #57585d;
	font: {
		weight: bold;
		size: 0.8em;
		family: $font-family;
	}
}
</style>

<template>
	<div class="grid-wrapper">
		<DashNav :navClosed="!sideNavOpened"/>
		<div class="grid-wrapper">
			<div class="grid-row">
				<div :class="`col-xsmall-0 col-large-${sideNavOpened ? '2' : '0'} desktop-side-nav`">
					<ul>
						<li>
							<router-link to="/">
								<icon-living icon="home"/>Go Home
							</router-link>
						</li>
						<li :class="activeTab === 'Dashboard' ? 'active' : ''" @click="switchTab('Dashboard')">
							<icon-living icon="tachometer-alt"/>Dashboard
						</li>
						<li :class="activeTab === 'Order' ? 'active' : ''" @click="switchTab('Order')">
							<icon-living icon="cart-plus"/>Order History
						</li>
						<li :class="activeTab === 'Settings' ? 'active' : ''" @click="switchTab('Settings')">
							<icon-living icon="users-cog"/>Settings
						</li>
						<li @click.prevent="logout">
							<icon-living icon="sign-out-alt"/>Logout
						</li>
					</ul>
				</div>
				<div :class="`col-xsmall-12 col-large-${sideNavOpened ? '10' : '12'}`">
					<div id="dashboard">
						<main class="dashboard">
							<h2>Patient dashboard</h2>
							<div class="grid-wrapper">
								<div class="grid-row">
									<div class="col-xsmall-12 col-small-6 col-medium-4">
										<div class="details-card b1">
											<div class="grid-wrapper">
												<div class="grid-row">
													<div class="col-xsmall-9 card-name">
														<router-link to="/">
															<span>Pending Orders</span>
															<span class="card-number">23</span>
														</router-link>
													</div>
													<div class="col-xsmall-3 card-icon">
														<icon-living icon="clock" class="fa-3x"/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xsmall-12 col-small-6 col-medium-4">
										<div class="details-card b2">
											<div class="grid-wrapper">
												<div class="grid-row">
													<div class="col-xsmall-9 card-name">
														<router-link to="/">
															<span>Processed Orders</span>
															<span class="card-number">12</span>
														</router-link>
													</div>
													<div class="col-xsmall-3 card-icon">
														<icon-living icon="tasks" class="fa-3x"/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xsmall-12 col-small-6 col-medium-4">
										<div class="details-card b3">
											<div class="grid-wrapper">
												<div class="grid-row">
													<div class="col-xsmall-9 card-name">
														<router-link to="/">
															<span>Delivered Orders</span>
															<span class="card-number">2</span>
														</router-link>
													</div>
													<div class="col-xsmall-3 card-icon">
														<icon-living icon="check" class="fa-2x"/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="grid-row other-body">
									<div class="col-xsmall-12 col-medium-6 first-card">
										<div class="card">
											<h2>Latest Updates</h2>
											<div class="grid-wrapper">
												<div class="grid-row">
													<div class="updates">
														<ul class="updates-list">
															<DashLoader/>
															<!-- <li>
																<span>James Olsen</span>
															</li>
															<li>
																<span>James Olsen</span>
															</li>
															<li>
																<span>James Olsen</span>
															</li>
															<li>James Olsen</li>-->
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xsmall-12 col-medium-6 second-card">
										<div class="card">
											<h2>Personal Information</h2>
											<div class="grid-wrapper">
												<div class="grid-row">
													<div class="col-xsmall-12">
														<form action>
															<div class="form-group">
																<label for="firstName">First Name</label>
																<input
																	type="text"
																	name
																	placeholder="First Name"
																	id
																	ref="firstNameInput"
																	:disabled="!editActivated"
																	v-model="user.firstName"
																>
															</div>
															<div class="form-group">
																<label for="lastName">last Name</label>
																<input
																	type="text"
																	name
																	placeholder="Last Name"
																	id
																	:disabled="!editActivated"
																	v-model="user.lastName"
																>
															</div>
															<div class="form-group">
																<label for="emailAddress">Email Address</label>
																<input
																	type="email"
																	name
																	placeholder="Email Adress"
																	id
																	:disabled="!editActivated"
																	v-model="user.email"
																>
															</div>
															<div class="form-group">
																<label for="deliveryAddress">Delivery Address</label>
																<input
																	type="adress"
																	name
																	placeholder="Delivery Address"
																	id
																	:disabled="!editActivated"
																	v-model="user.deliveryAddress"
																>
															</div>
															<!-- <div class="form-group">
																<input
																	type="text"
																	name
																	placeholder="City"
																	id
																	:disabled="!editActivated"
																	v-model="user.city"
																>
															</div>-->
															<div class="form-group">
																<label for="state">State</label>
																<input
																	type="text"
																	name
																	placeholder="State"
																	id
																	:disabled="!editActivated"
																	v-model="user.state"
																>
															</div>
															<div class="form-group">
																<button
																	v-if="!editActivated"
																	type="submit"
																	@click.prevent="activate"
																	title="Click to Edit"
																>Edit Profile</button>
																<button
																	v-else
																	type="submit"
																	@click.prevent="handleUpdate"
																	title="Click to save changes"
																>
																	<template v-if="!updatingProfile">Save Changes</template>
																	<template v-else>
																		<img
																			src="../../../public/images/button-loading.gif"
																			alt
																			:style="{position: 'relative', top: '-6px'}"
																		>
																	</template>
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DashNav from "../../partials/DashNav";
import DashLoader from "../../partials/DashLoader";
import axios from "axios";

export default {
	name: "dashboard",
	data() {
		return {
			sideNavOpened: true,
			editActivated: false,
			updatingProfile: false,
			activeTab: "Dashboard",
			user: {
				firstName: "",
				lastName: "",
				email: "",
				deliveryAddress: "",
				country: "",
				state: "",
				orders: [],
				country: ""
			}
		};
	},
	components: { DashNav, DashLoader },
	computed: {
		activate() {
			this.editActivated = true;
			this.$refs.firstNameInput.focus();
		},
		handleUpdate() {
			this.updatingProfile = true;
		}
	},
	methods: {
		logout: function() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
				console.log("You are logged out");
			});
		},
		switchTab(newTab) {
			this.activeTab = newTab;
		}
	},
	mounted() {
		if (this.$store.getters.getUser.id === 1) {
			this.$router.push("/diagnozed");
		}
		axios
			.get("https://api.drugstore.ng/user")
			.then(r => {
				let {
					email,
					created_at: createdAt,
					updated_at: updatedAt,
					first_name: firstName,
					last_name: lastName,
					orders,
					payment_mode: paymentMode,
					country,
					state,
					phone,
					delivery_address: deliveryAddress
				} = r.data.data.uses;

				this.user.firstName = firstName;
				this.user.lastName = lastName;
				this.user.email = email;
				this.user.phone = phone;
				this.user.createdAt = createdAt;
				this.user.updatedAt = updatedAt;
				this.user.paymentMode = paymentMode;
				this.user.deliveryAddress = deliveryAddress || "Not yet field";
				this.user.orders = orders;
				this.user.country = country || "Not yet field";
				this.user.state = state || "Not yet field";
				console.log(this.user);
			})
			.catch(e => {
				// console.log(e);
			});
	},
	title() {
		return "DrugStore - Patient Dashboard";
	}
};
</script>