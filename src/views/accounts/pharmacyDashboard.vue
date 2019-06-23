<template id="superAdminDashboard">
	<div class="grid-wrapper">
		<DashNav :navClosed="!sideNavOpened" :superAdmin="true"/>
		<div class="grid-wrapper">
			<div class="grid-row">
				<div :class="`col-xsmall-0 col-large-${sideNavOpened ? '2' : '0'} desktop-side-nav`">
					<ul>
						<li>
							<router-link to="/">
								<icon-living icon="home"/>Go Home
							</router-link>
						</li>
						<li>
							<icon-living icon="tachometer-alt"/>Dashboard
						</li>
						<li>
							<icon-living icon="shopping-basket"/>Stock
						</li>
						<li>
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
							<h2>Pharmacy dashboard</h2>
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
															<li>
																<span>James Olsen</span>
																<span>James Olsen</span>
															</li>
															<li>
																<span>James Olsen</span>
																<span>James Olsen</span>
															</li>
															<li>
																<span>James Olsen</span>
																<span>James Olsen</span>
															</li>
															<li>James Olsen</li>
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
																<input
																	type="adress"
																	name
																	placeholder="Street Adress"
																	id
																	:disabled="!editActivated"
																	v-model="user.adress"
																>
															</div>
															<div class="form-group">
																<input
																	type="text"
																	name
																	placeholder="City"
																	id
																	:disabled="!editActivated"
																	v-model="user.city"
																>
															</div>
															<div class="form-group">
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
import axios from "axios";

export default {
	name: "superAdminDashboard",
	data() {
		return {
			sideNavOpened: true,
			editActivated: false,
			updatingProfile: false,
			user: {
				firstName: "",
				lastName: "",
				email: "",
				streetAdress: "",
				city: "",
				state: ""
			}
		};
	},
	components: { DashNav },
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
		}
	},
	mounted() {
		axios
			.get("https://api.drugstore.ng/user")
			.then(r => {
				console.table(r);
			})
			.catch(e => {
				console.log(e);
			});
		if (this.$store.getters.getUser.id === 1) {
			this.$router.push("/diagnozed");
		}
	},
	title() {
		return `DrugStore - ${this.$store.state.user.first_name} ${
			this.$store.state.user.last_name
		}'s Dashboard`;
	}
};
</script>