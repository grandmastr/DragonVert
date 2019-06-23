<template>
    <div id="productForm" class="product-form">
        <main class="product-form-page">
            <h2 class="category-header accounts">
                Complete Your Merchant Profile
            </h2>
            <form action method="post" class="product-form" @submit.prevent="updateProfile">
                <div>
                    <label for="first_name">First Name</label>
                    <input
                            type="text"
                            placeholder="Enter first name here"
                            v-validate="'required'"
                            name="first_name"
                            id
                            v-model="user.first_name"
                            :class="{'error': errors.has('first_name')}"
                            autofocus
                    >
                    <span class="help-block email-help" v-show="errors.has('first_name')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty
					</span>
                </div>
                <div>
                    <label for="last_name">Last Name</label>
                    <input
                            type="text"
                            placeholder="Enter last name here"
                            name="last_name"
                            idv
                            v-model="user.last_name"
                            v-validate="'required'"
                            :class="{'error': errors.has('last_name')}"
                    >
                    <span class="help-block" v-show="errors.has('last_name')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty and can only contain numbers
					</span>
                </div>
                <div>
                    <label for="email">Email address</label>
                    <input
                            type="email"
                            placeholder="Enter your email here"
                            v-validate="'required|email'"
                            name="email"
                            id
                            v-model="user.email"
                            :class="{'error': errors.has('email')}"
                            disabled="true"
                    >
                    <span class="help-block email-help" v-show="errors.has('email')">
						<icon-living icon="exclamation-triangle"/>This field cannot be left empty
					</span>
                </div>
                <div>
                    <label for="name">Merchant Name</label>
                    <input
                            type="text"
                            placeholder="Enter name here"
                            name="name"
                            id
                            v-model="name"
                            v-validate="'required'"
                            :class="{'error': errors.has('name')}"
                    >
                    <span class="help-block" v-show="errors.has('name')">
						<icon-living icon="exclamation-triangle"/>This field cannot be empty
					</span>
                </div>
                <div>
                    <label for="address">Location</label>
                    <input
                            type="text"
                            placeholder="Enter name here"
                            name="location"
                            id
                            v-model="location"
                            v-validate="'required'"
                            :class="{'error': errors.has('location')}"
                    >
                    <span class="help-block" v-show="errors.has('location')">
						<icon-living icon="exclamation-triangle"/>This field cannot be empty
					</span>
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea
                            name="description"
                            id
                            cols="30"
                            minlength="50"
                            maxlength="300"
                            rows="10"
                            placeholder="Not less than 30 words"
                            v-model="description"
                            v-validate="'required'"
                            :class="{'error': errors.has('description')}"
                    ></textarea>
                    <span class="help-block" v-show="errors.has('description')">
						<icon-living icon="exclamation-triangle"/>
						This field cannot be left empty and must not contain less than 50 characters ({{description.length}}/30)
					</span>
                    <span class="help-block-max" v-show="description.length >= 100">
						<icon-living icon="text-width"/>
						Maximum length reached ({{description.length}})
					</span>
                </div>
                <div class="button-submit">
                    <button type="submit" :disabled="!formPassed">Update</button>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "productForm",
        data() {
            return {
                user: this.$store.state.user,
                name: "",
                email: "",
                description: "",
                location: "",
                formPassed: true
            };
        },
        created() {
            this.email = this.$store.state.user.email;
            let { user,token } = this.$store.state;
            if((token !== "" || null) && user.first_name !== "" && user.account_type === "merchant") {
                this.$router.push("/admin/merchant");
                console.log("You don't have any more detail to fill")
            }
        },
        methods: {
            updateProfile() {
                this.formPassed = false;
                let userData = {
                    data: {
                        type: "Merchant",
                        id: this.user.merchant_id,
                        attributes: {
                            name: this.name,
                            email: this.email,
                            location: this.location,
                            description: this.description
                        }
                    }
                };
                axios(`https://dragonvert.joppa.ng/merchants/${this.user.merchant_id}/`, {
                    method :'PATCH',
                    data: userData,
                    headers: {
                        'Content-Type': 'application/vnd.api+json'
                    }
                })
                    .then(response => {
                        this.formPassed = true;

                        this.$router.push("/admin/merchant")
                    })
                    .catch(error => {
                        this.formPassed = false;


                        console.log(error)
                    });
            }
        }
    };
</script>