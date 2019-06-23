<template>
	<nav class="nav" id="navbar" v-show="!isDash">
		<div class="nav-container">
			<router-link to="/">
				<span class="brand-name">
					Dragon
					<b></b>
					<span style="color:#fab000;font-weight: bolder;">Vert</span>&trade;
				</span>
			</router-link>
			<ul>
				<li>
					<form action="/search/Omron">
						<input
							type="search"
							placeholder="Search for products"
							class="nav-search"
							v-model="searchString"
						>
						<div
							class="search-autocomplete-desktop"
							style="background: white; text-transform: normal"
							v-show="autoCompleteActive && autoProducts.length !== 0"
						>
							<span v-for="product in autoProducts" :key="product.id">
								<router-link :to="`/details/${product.id}`">{{product.name}}</router-link>
							</span>
						</div>
					</form>
				</li>
				<li>
<!--					<router-link exact to="/" title="Back to Home">home</router-link>-->
				</li>
				<li>
<!--					<router-link to="/equipments" title="About DragonVert">Equipments</router-link>-->
				</li>
				<li>
<!--					<router-link to="/contact" title="Contact Us">Contact</router-link>-->
				</li>
				<!-- <li>
					<a href="https://blog.drugstore.ng" title="Visit our blog" target="_blank">Blog</a>
				</li>-->
				<li>
					<!-- <router-link to="/pharmacies" title="See all pharmacies">Pharmacies</router-link> -->
				</li>
				<li>
					<!-- <router-link to="/pharmacies" title="See all pharmacies">Pharmacies</router-link> -->
				</li>
				<li class="show-for-mobile account">
					<template  v-if="isLoggedIn">
						<router-link :to="$store.state.user.merchant_id !== null ? '/admin/merchant' : '/admin/user'" @click.prevent="logout">
							<icon-living icon="tachometer-alt" title="Go to Dashboard Area" style="cursor: pointer"/>
						</router-link>
					</template>
					<router-link to="/login" v-else>
						<icon-living icon="user-circle" title="Client Area"/>
					</router-link>
				</li>
				<li class="show-for-mobile">
					<router-link to="/cart">
						<icon-living icon="shopping-cart" title="Go to cart"/>
						<span
							class="cart-badge"
							v-if="this.$store.state.cart.length > 0"
						>{{this.$store.state.cart.length}}</span>
						<span class="cart-badge" v-else>{{0}}</span>
					</router-link>
				</li>
			</ul>
			<div v-click-outside="onOutsideClick">
				<svg class="dropdown-button" @click="navClosed = !navClosed" style="cursor: pointer">
					<g v-if="navClosed" stroke="#fff" stroke-width="2" stroke-linecap="round">
						<line x1="8" y1="8" x2="24" y2="8"></line>
						<line x1="8" y1="2" x2="24" y2="2"></line>
						<line x1="8" y1="14" x2="24" y2="14"></line>
					</g>
					<g v-else stroke="#fff" stroke-width="2.5" stroke-linecap="round">
						<line x1="8" y1="1" x2="20" y2="14"></line>
						<line x1="8" y1="14" x2="20" y2="1"></line>
					</g>
				</svg>
				<div v-show="!navClosed">
					<div class="menu-for-mobile">
						<h2 class="navHeader">Menu</h2>
						<span>
							<router-link exact to="/" title="Back to Home">home</router-link>
						</span>
						<span>
							<router-link exact to="/contact" title="Contact Us">contact</router-link>
						</span>
						<template v-if="isLoggedIn">
							<span v-if="$store.state.user.merchant_id !== null">
								<router-link exact to="/admin/merchant" title="Merchant Dashboard Area">Dashboard Area</router-link>
							</span>
							<span v-else>
								<router-link exact to="/admin/user" title="Dashboard Area">Dashboard Area</router-link>
							</span>
						</template>
						<span>
							<router-link exact to="/equipments" title="Contact Us">equipments</router-link>
						</span>
					</div>
					<template v-if="this.$store.state.categories.length !== 0">
						<h2 class="navHeader">Categories</h2>
						<span v-for="category in categories" :key="category.attributes.name" :title="category.attributes.slug">
							<router-link :to="`/categories/${category.attributes.name.split(' ').join('-').toLowerCase()}`">{{category.attributes.name.substr(0,30)}}</router-link>
						</span>
					</template>
					<template v-else>
						<div>
							<div class="lds-css ng-scope" style="width: 150px; height: 150px;">
								<div class="lds-blocks" style="width:100%;height:100%">
									<div style="left:54px;top:54px;animation-delay:0s"></div>
									<div style="left:85px;top:54px;animation-delay:0.125s"></div>
									<div style="left:116px;top:54px;animation-delay:0.25s"></div>
									<div style="left:54px;top:85px;animation-delay:0.875s"></div>
									<div style="left:116px;top:85px;animation-delay:0.375s"></div>
									<div style="left:54px;top:116px;animation-delay:0.75s"></div>
									<div style="left:85px;top:116px;animation-delay:0.625s"></div>
									<div style="left:116px;top:116px;animation-delay:0.5s"></div>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
		<!-- <div class="search-nav-for-mobile">
			<form action="/search/Lonart%20DS">
				<input
					type="search"
					name
					id
					placeholder="Search for products, brands and categories..."
					required
					v-model="searchString"
				>
				<button type="submit" class="mobile-search-button">Search</button>
				<div class="search-autocomplete" v-show="autoCompleteActive && autoProducts.length !== 0">
					<span v-for="product in autoProducts" :key="product.id">
						<router-link :to="`/details/${product.id}`">{{product.name}}</router-link>
					</span>
				</div>
			</form>
		</div>-->
	</nav>
</template>

<style scoped>
@keyframes lds-blocks {
	0% {
		background: #fab000;
	}
	12.5% {
		background: #fab000;
	}
	12.625% {
		background: #19253a;
	}
	100% {
		background: #19253a;
	}
}
@-webkit-keyframes lds-blocks {
	0% {
		background: #fab000;
	}
	12.5% {
		background: #fab000;
	}
	12.625% {
		background: #19253a;
	}
	100% {
		background: #19253a;
	}
}
.lds-blocks {
	position: relative;
}
.lds-blocks div {
	position: absolute;
	width: 30px;
	height: 30px;
	background: #19253a;
	-webkit-animation: lds-blocks 1s linear infinite;
	animation: lds-blocks 1s linear infinite;
}
.lds-blocks {
	width: 150px !important;
	height: 150px !important;
	-webkit-transform: translate(-74.5px, -74.5px) scale(0.745)
		translate(74.5px, 74.5px);
	transform: translate(-74.5px, -74.5px) scale(0.745)
		translate(74.5px, 74.5px);
}

div.search-autocomplete-desktop {
	width: 300px;
	background: white;
	padding: 10px;
	border-radius: 3px;
	position: relative;
	top: 3px;
	max-height: 250px;
	overflow-y: scroll;
	overflow-x: none;
}
div.search-autocomplete-desktop:hover {
	background: white !important;
}
div.search-autocomplete {
	background: white;
	padding: 10px;
	border-radius: 3px;
	position: relative;
	top: 3px;
	max-height: 230px;
	overflow-y: scroll !important;
	overflow-x: none;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
div.search-autocomplete::-webkit-scrollbar,
div.search-autocomplete-desktop::-webkit-scrollbar {
	width: 3px;
	border-radius: 3px;
}

div.search-autocomplete::-webkit-scrollbar-track,
div.search-autocomplete-desktop::-webkit-scrollbar {
	background: #ffffff;
}

div.search-autocomplete::-webkit-scrollbar-thumb,
div.search-autocomplete-desktop::-webkit-scrollbar {
	background: #fab000;
	border-radius: 3px;
}

div.search-autocomplete::-webkit-scrollbar-thumb:hover,
div.search-autocomplete-desktop::-webkit-scrollbar:hover {
	background: #ffffff;
}

div.search-autocomplete span,
div.search-autocomplete-desktop span {
	display: block;
	padding: 5px;
	color: grey;
}
div.search-autocomplete span a,
div.search-autocomplete-desktop span a {
	display: block;
	text-decoration: none;
}
div.search-autocomplete span:not(:last-child),
div.search-autocomplete-desktop span:not(:last-child) {
	border-bottom: 1px solid #ebeaea;
}
h2.navHeader {
	color: #000;
	background: #f5f5f5;
	height: 40px;
	width: 105%;
	padding: 12px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-weight: bolder;
	font-size: 0.9em;
	text-transform: uppercase;
	border-radius: 2px;
	margin-bottom: 10px;
	user-select: none;
}
</style>


<script>
import axios from "axios";
import Loader from "./Loader";

export default {
	name: "navbar",
	data() {
		return {
			navClosed: true,
			searchString: "",
			autoCompleteActive: false,
			autoProducts: [],
			isDash: this.$route.matched[0].path === "/admin"
		};
	},
	components: { Loader },
	methods: {
		closeNav: function() {
			this.navClosed = true;
		},
		onOutsideClick: function(e, el) {
			this.navClosed = true;
		},
		logout: function() {
			this.$store
				.dispatch("logout")
				.then(() => {
					this.$router.push("/login");
				})
				.catch(e => {
					console.table(e);
				});
		}
	},
	created() {
		if (this.$store.state.categories.length === 0)
			this.$store.dispatch("allCategories");
	},
	computed: {
		isLoggedIn: function() {
			return this.$store.getters.isLoggedIn;
		},
		categories: function() {
			return this.$store.getters.allCategories;
		}
	},
	watch: {
		$route: function(to, from) {
			this.navClosed = true;
			this.autoCompleteActive = false;
			this.isDash = to.matched[0].path === "/admin";
		},
		searchString: function() {
			this.searchString.length === 0
				? (this.autoCompleteActive = false)
				: (this.autoCompleteActive = true);
			axios
				.get(
					`https://dragonvert.joppa.ng/equipments/?search=${
						this.searchString
					}`
				)
				.then(
					response => console.log(response)
				)
				.catch(e => console.log(e));
		}
	}
};
</script>