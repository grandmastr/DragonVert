<template>
	<main id="superAdminDashboard">
		<superAdminNav/>
		<div class="super-admin-body">
			<div class="grid-wrapper">
				<div class="grid-row">
					<div class="col-xsmall-12 col-sm-6 col-medium-6">
						<div class="short-description-tab">
							<div class="grid-row">
								<div class="col-xsmall-9">
									<span>Total Products</span>
									<span>{{productNumber}}</span>
								</div>
								<div class="col-xsmall-3">
									<icon-living icon="cart-plus" class="fa-3x"/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xsmall-12 col-sm-6 col-medium-6">
						<div class="short-description-tab">
							<div class="grid-row">
								<div class="col-xsmall-9">
									<span>Orders</span>
									<span>{{orderNumber}}</span>
								</div>
								<div class="col-xsmall-3">
									<icon-living icon="shopping-bag" class="fa-3x"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-row">
					<div class="col-xsmall-12 m0">
						<div class="dynamic-dash-body">
							<h2 class="section-title">{{activeTab}}</h2>
							<div class="section-content" v-if="activeTab === 'dashboard'"></div>
							<div class="section-content" v-else-if="activeTab === 'manage orders'">
								<template v-if="loadedOrders">
									<manageOrders :orders="orders"/>
								</template>
								<template v-else>
									<div class="loader-container">
										<img
											src="../../../public/images/rolling-1s-200px.gif"
											alt
											height="50px"
											style="user-select: none"
										>
									</div>
								</template>
							</div>
							<div class="section-content" v-else-if="activeTab === 'equipments'">
								<template v-if="loadedProducts">
									<products :products="$store.getters.allMerchantProducts"/>
								</template>
								<template v-else>
									<div class="loader-container">
										<img
											src="../../../public/images/rolling-1s-200px.gif"
											alt
											height="50px"
											style="user-select: none"
										>
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from "axios";
import superAdminNav from "../../partials/superAdminNav";
import categories from "./categories";
import products from "./products";
import manageOrders from "./manageOrders";

export default {
	name: "superAdminDashboard",
	title() {
		return "DragonVert - Merchant's dashboard";
	},
	data() {
		return {
			activeTab: this.$route.query.activeTab || "dashboard",
			secondActiveTab: "showBiz",
			loadedProducts: false,
			products: [],
			loadedOrders: false,
			orders: null,
			orderNumber: 0,
			productNumber: 0,
			requestsLoaded: false,
			BASE_URL: "https://dragonvert.joppa.ng"
		};
	},
	created() {
		window.scrollTo(0, 0);


		axios.get(`https://dragonvert.joppa.ng/merchants/${JSON.parse(localStorage.getItem('user')).merchant_id}`)
			.then(response => {
				if(response.status === 200) {
					localStorage.setItem("merchant", JSON.stringify(response.data));
					this.$store.dispatch("updateMerchant", response.data);
				}
				this.getAllPromises();
			});

		this.$store.getters.allCategories.length === 0
			? this.$store.dispatch("allCategories")
			: null;
	},
	components: {
		superAdminNav,
		products,
		manageOrders
	},
	computed: {
		annotate: () => require("../../mixins/helpers").money,
		activate() {
			this.editActivated = true;
			this.$refs.firstNameInput.focus();
		},
		handleUpdate() {
			this.updatingProfile = true;
		}
	},
	methods: {
		getOrders: function() {
			return axios.get(`${this.BASE_URL}/orders/?user=${this.$store.state.user.pk}`);
		},
		getProducts: function() {
			return axios.get(`${this.BASE_URL}/equipments/?merchant=${JSON.parse(localStorage.getItem('merchant')).data.id}`);
		},
		getAllPromises: function() {
			axios
				.all([this.getProducts(), this.getOrders()])
				.then(
					axios.spread((products, orders) => {
						let { data: p, meta } = products.data;
						this.productNumber = meta.pagination.count;
						this.loadedProducts = true;
						this.$store.dispatch("allMerchantProducts", p);

						let { data: o, meta:details } = orders.data;
						this.orderNumber = details.pagination.count;
						this.loadedOrders = true;
						this.orders = [...o];
					})
				)
		},
		logout: function() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
			});
		}
	},
	destroyed() {},
	mounted() {
		if (this.$store.state.user.account_type !== "merchant") {
			this.$router.push("/diagnozed");
		}
	},
	watch: {
		$route: function(to, from) {
			this.activeTab = to.query.activeTab;
		}
	}
};
</script>

<style lang="scss" scoped>
div.loader-container {
	display: flex;
	height: 300px;
	img {
		margin: auto;
		max-width: 80px;
		user-select: none;
	}
}
</style>