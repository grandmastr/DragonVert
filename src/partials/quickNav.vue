<template>
	<div id="quickNav" class="quickNav" v-show="!isDash">
		<ul>
			<li>
				<icon-living icon="phone"/>
				<router-link to="/contact">Customer Service</router-link>
			</li>
			<li v-show="!isLoggedIn">
				<icon-living icon="user"/>
				<router-link to="/register">Create Account</router-link>
			</li>
			<li>
				<template v-if="isLoggedIn">
					<icon-living icon="sign-out-alt"/>
					<a href="#" @click="logout">Sign Out</a>
				</template>
				<template v-else>
					<icon-living icon="sign-out-alt"/>
					<router-link to="/login">Sign in</router-link>
				</template>
			</li>
			<li v-if="isLoggedIn">
				<li v-if="$route.matched[0].path === '/admin'">
                    <icon-living icon="home"/>
				    <router-link to="/admin/user">Go home</router-link>
                </li>
				<li v-else-if="$route.matched[0].path !== '/admin' && isLoggedIn">
                    <icon-living icon="tachometer-alt"/>
				    <router-link to="/admin/user">Dashboard Area</router-link>
                </li>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: "quickNav",
    data(){
        return{
            isDash: this.$route.matched[0].path === "/admin"
        }
    },
	methods: {
		logout: function() {
			this.$store
				.dispatch("logout")
				.then(() => {
					this.$router.push("/login");
					console.log("You are logged out");
				})
				.catch(e => {
					console.log(e);
				});
		}
	},
	computed: {
		isLoggedIn: function() {
			return this.$store.getters.isLoggedIn;
		}
    },
    watch:{
        $route: function(to, from) {
			this.isDash = to.matched[0].path === "/admin";
		}
    }
};
</script>