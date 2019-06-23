<template>
	<div id="superAdminNav" v-click-outside="onOutsideClick" >
		<nav class="super-admin-nav" style="z-index: 9990">
			<svg class="dropdown-button" @click="navClosed = !navClosed">
				<g v-if="navClosed" stroke="#42B983" stroke-width="2" stroke-linecap="round">
					<line x1="8" y1="2" x2="24" y2="2"></line>
					<line x1="8" y1="8" x2="24" y2="8"></line>
				</g>
				<g v-else stroke="#42B983" stroke-width="4" stroke-linecap="round">
					<line x1="8" y1="2" x2="24" y2="2"></line>
					<line x1="8" y1="8" x2="24" y2="8"></line>
				</g>
			</svg>
			<div class="loader" v-if="!contentsLoaded">
				<img src="../../public/images/Rolling-1s-200px.gif" alt height="50px" style="user-select: none">
			</div>
			<div class="brand-address" v-else>
				<router-link to="/">Merchant Dashboard</router-link>
			</div>
			<div class="account-drop" @click="showAccDrop = !showAccDrop" v-click-outside="closeDropDown">
				<span>
					<transition name="fade">
						<icon-living :icon="`chevron-${showAccDrop ? 'up' : 'down'}`"/>
					</transition>
					<icon-living icon="cog"/>
				</span>
				<transition name="fade">
					<div class="acc-drop" v-show="showAccDrop">
						<ul>
							<a href="#" @click.prevent="$store.dispatch('logout')">
								<li>
									<span>
										<icon-living icon="sign-out-alt"/>Log out
									</span>
								</li>
							</a>
							<router-link to="/">
								<li>
									<span>
										<icon-living icon="cog"/>Account Settings
									</span>
								</li>
							</router-link>
						</ul>
					</div>
				</transition>
			</div>
			<transition name="fade">
				<nav class="side-nav" v-show="!navClosed">
					<ul>
						<router-link
							to="?activeTab=dashboard"
							:class="activeTab === 'dashboard' ? 'active': null"
							@click.prevent="changeTab()"
						>
							<li>
								<icon-living icon="tachometer-alt"/>Dashboard
							</li>
						</router-link>
						<router-link
							to="?activeTab=manage orders"
							:class="activeTab === 'manage orders' ? 'active': null"
							@click.prevent="changeTab()"
						>
							<li>
								<icon-living icon="cart-plus"/>Manage Orders
							</li>
						</router-link>
						<router-link
							to="?activeTab=equipments"
							:class="activeTab === 'equipments' ? 'active': null"
							@click.prevent="changeTab()"
						>
							<li>
								<icon-living icon="puzzle-piece"/>Equipments
							</li>
						</router-link>
						<a @click.prevent="logOut">
							<li>
								<icon-living icon="sign-out-alt"/>Log Out
							</li>
						</a>
						<router-link to="/">
							<li>
								<icon-living icon="home"/>Go Home
							</li>
						</router-link>
					</ul>
				</nav>
			</transition>
		</nav>
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
export default {
	name: "superAdminNav",
	data() {
		return {
			navClosed: true,
			showAccDrop: false,
			activeTab: this.$route.query.activeTab || "dashboard",
			contentsLoaded: false
		};
	},
	created() {
		this.loadAbit();
	},
	methods: {
		loadAbit: function() {
			this.contentsLoaded = false;
			let timeOut = window.setTimeout(() => {
				this.contentsLoaded = true;
			}, 2000);
		},
		onOutsideClick: function(e, el) {
			this.navClosed = true;
		},
		closeDropDown: function(e, el) {
			this.showAccDrop = false;
		},
		changeTab: function() {
			this.activeTab = this.$route.query.activeTab;
			this.navClosed = true;
		},
		logOut: function() {
			this.$store.dispatch("logout").then.$router.push("/login");
		}
	},
	watch: {
		$route: function(to, from) {
			this.loadAbit();
			this.activeTab = to.query.activeTab;
			this.navClosed = true;
		}
	}
};
</script>