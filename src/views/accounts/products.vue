<style lang="scss" scoped>
	$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	$color: #42b983;
	button.image-select{
		background: transparent;
		height: 38px;
		border-radius: 3px;
		border: 1.5px solid $color;
		cursor: pointer;
		padding: 2px 20px;
		color: #fff;
		position: relative;
		top: 4px;
		font-weight: bolder;
		&:hover {
			box-shadow: 0 0 15px 1px grey;
		}
	}
	textarea{
		width: 100%;
		border: 1.5px solid $color;
		border-radius: 3px;
		margin-bottom: 20px;
		padding: 8px;
		background: transparent;
		&::-webkit-scrollbar {
			width: 3px;
			border-radius: 3px;
		}

		&::-webkit-scrollbar-track {
			background: #ffffff;
		}

		&::-webkit-scrollbar-thumb {
			background: $color;
			border-radius: 3px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #ffffff;
		}
		font: {
			family: $font-family;
			size: 0.9em;
		}
		&::placeholder {
			color: #ffffff;
		}
		color: #ffffff;
		&.error {
			border-color: red #{!important};
			outline: none #{!important};
		}
		+ span.help-block {
			position: relative;
			top: -12px #{!important};
			font: {
				family: $font-family;
				weight: normal;
			}
			color: red;
			+ span.help-block-max {
				position: relative;
				top: -12px;
				font: {
					family: $font-family;
					weight: normal;
				}
				color: #e9d206;
			}
		}
	}
	select{
		width: 100%;
		caret-color: #ffffff;
		height: 38px;
		border: 1.5px solid $color;
		border-radius: 4px;
		margin-bottom: 20px;
		padding: 2px 8px;
		background: transparent;
		font: {
			family: $font-family;
			size: 0.9em;
		}
		color: #ffffff;
		&::placeholder {
			color: #e6e6e6;
		}
		&.error {
			border-color: red #{!important};
			outline: none #{!important};
		}
		+ span.help-block {
			position: relative;
			top: -12px #{!important};
			font: {
				family: $font-family;
				weight: normal;
			}
			color: $color;
		}
	}
.delete {
	display: block;
	background: red;
	height: 38px;
	margin: auto;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	padding: 2px 20px;
	color: #fff;
	position: relative;
	top: 20px;
	font-weight: bolder;
	&:hover {
		box-shadow: 0 0 15px 1px grey;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.35s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
svg {
	font-size: 1.3em;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
	&:hover {
		transition: 0.2s all ease-in-out;
		opacity: 0.8;
	}
}
	div.no-product{
		background: #8eb99f;
		padding: 20px 10px;
		border: 2px solid #42B983;
		border-radius: 3px;
		text-align: center;
		font: {
			family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono", "Droid Sans Mono", monospace, monospace;
			size: 1.1em;
			weight: bold;
		}
		color: #005738;
	}
$color: #42B983;
h2.form-title{
	color: #fff;
	font:{
		weight: bold;
		family: $font-family;
		size: 1.2em;
	}
	text-align: center;
}
form#addPharmacy{
	position: relative;
	top: 30px;
	label{
		color: #fff;
		font-size: 0.9em;
	}
	input[type] {
		caret-color: #ffffff;
		height: 38px;
		width: 100%;
		border: 1.5px solid $color;
		border-radius: 4px;
		margin-bottom: 20px;
		padding: 2px 8px;
		background: transparent;
		font: {
			family: $font-family;
			size: 0.9em;
		}
		color: #ffffff;
		&::placeholder {
			color: #e6e6e6;
		}
		&.error {
			border-color: red #{!important};
			outline: none #{!important};
		}
		+ span.help-block {
			position: relative;
			top: -12px #{!important};
			font: {
				family: $font-family;
				weight: normal;
			}
			color: $color;
		}
	}
}
button.post-product{
	display: block;
	position: relative;
	top: 10px;
	float: right;
	background: red;
	border: none;
	border-radius: 3px;
	color: #ffffff;
	height: 30px;
	text-transform: capitalize;
	cursor: pointer;
	font:{
		weight: bold;
		family: $font-family;
		size:  0.8em
	}
	svg{
		margin-right: 4px;
		font-size: 0.8em;
	}
}
	div.modal-body{
		&::-webkit-scrollbar {
			width: 3px;
			border-radius: 3px;
		}

		&::-webkit-scrollbar-track {
			background: #000000;
		}

		&::-webkit-scrollbar-thumb {
			background: $color;
			border-radius: 3px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #ffffff;
		}
	}
</style>

<template>
	<div id="products">
		<transition name="fade">
			<div id="modal" v-if="delModalOpen">
				<div class="modal-body" v-click-outside="onClickOutside">
					<p class="times" @click="closeModal">&times;</p>
					<div
						style="text-align: center"
					>
						<template v-if="!deleted">
							<div>
								<input required="true"
									type="submit"
									class="delete"
									value="Confirm Delete"
									@click.prevent="deleteProduct(productID)"
								>
							</div>
						</template>
						<div v-else>Product Deleted</div>
					</div>
<!--					<div v-else>-->
<!--						<img-->
<!--							src="../../../public/images/rolling-1s-200px.gif"-->
<!--							alt-->
<!--							height="50px"-->
<!--							style="user-select: none; margin: auto;display: flex;"-->
<!--						>-->
<!--					</div>-->
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div id="modal" v-if="editModalOpen">
				<div class="modal-body" v-click-outside="onClickOutside">
					<p class="times" @click="closeModal">&times;</p>
					<div
						style="text-align: center"
						v-if="Object.keys(productDetails).length !== 0 && productDetails.id === productID"
					>
						<form @submit="handleEdit()">
							<input required="true" type="text">
							<input required="true" type="text">
						</form>
						<div>
							<input required="true"
								type="submit"
								class="delete"
								value="Save Edit"
								@click.prevent="deleteProduct(productID)"
							>
						</div>
					</div>
					<div v-else>
						<img
							src="../../../public/images/rolling-1s-200px.gif"
							alt
							height="50px"
							style="user-select: none; margin: auto;display: flex;"
						>
					</div>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div id="modal" v-if="postModalOpen" style="z-index: 9000;">
				<div class="modal-body" v-click-outside="onClickOutside" style="overflow: auto; max-height: 450px; max-width: 800px;">
					<p class="times" @click="closeModal">&times;</p>
					<h2 class="form-title">
						Post Product
					</h2>
					<form id="addPharmacy">
						<div class="form-group">
							<label for="product-name">
								Name
							</label>
							<input required="true" type="text"  placeholder="Product Name" v-model="product.name">
						</div>
						<div class="form-group">
							<label for="product-model">
								Model
							</label>
							<input required="true" type="text"  placeholder="Product Model" v-model="product.model">
						</div>
						<div class="form-group">
							<label for="product-manufacturer">
								Manufacturer
							</label>
							<input required="true" type="text"  placeholder="Product Manufacturer" v-model="product.manufacturer">
						</div>
						<div class="form-group">
							<label for="product-year">
								Year of make
							</label>
							<input required="true" type="text"  placeholder="Product Model" v-model="product.year">
						</div>
						<div class="form-group">
							<label for="product-country">
								Country
							</label>
							<input required="true" type="text"  placeholder="Product Country" v-model="product.country">
						</div>
						<div class="form-group">
							<label for="product-condition">
								Condition
							</label>
							<select v-model="product.condition" :value="product.condition">
								<option value="good">Good</option>
								<option value="not_so_good">Not so good(Repairable</option>
								<option value="bad">Bad</option>
							</select>
						</div>
						<div class="form-group">
							<label for="product-model">
								Description
							</label>
							<textarea required="true" type="text" rows="6"  placeholder="Product Description" v-model="product.description"></textarea>
						</div>
						<div class="form-group">
							<label for="product-main_category">
								Main Category
							</label>
							<template v-if="noCategory">
								<input required="true" type="text"  placeholder="Product Main Category" v-model="product.main_category">
								Click <span style="color: red; text-decoration: underline; cursor: pointer" @click.prevent.stop="noCategory = false">here</span> to see the available categories
								<br>
							</template>
							<template v-else>
								<select name="" v-model="product.main_category" :value="'Select Category'">
									<option v-for="category in $store.getters.allCategories" :value="category.attributes.name.substr(0,30)" :key="category.attributes.name">
										{{category.attributes.name.substr(0,30)}}
									</option>
								</select>
								click <span style="color: red; text-decoration: underline;cursor: pointer" @click.prevent.stop="noCategory = true">here</span> if category is not available
								<br>
							</template>
						</div>
						<br>
						<div class="form-group">
							<label for="product-sub_category">
								Sub Category
							</label>
							<template v-if="noSubCategory">
								<input type="text"  placeholder="Product Sub Category" v-model="product.sub_category">
								Click <span style="color: red; text-decoration: underline; cursor: pointer" @click.prevent.stop="noSubCategory = false">here</span> to see available sub categories
							</template>
							<template v-else>
<!--								<select name="" v-model="product.sub_category" :value="'Select sub category'">-->
<!--									<option v-for="category in $store.getters.allCategories" :value="category.attributes.name.substr(0,30)" :key="category.attributes.name">-->
<!--										{{category.attributes.name.substr(0,30)}}-->
<!--									</option>-->
<!--								</select>-->
<!--								click <span style="color: red; text-decoration: underline;cursor: pointer" @click.prevent.stop="noSubCategory = true">here</span> if your sub category is not available-->
							</template>
						</div>
						<br>
						<div class="form-group">
							<label for="product-quantity">
								Quantity
							</label>
							<input required="true" type="text"  placeholder="Product Quantity" v-model="product.quantity">
						</div>
						<div class="form-group">
							<label for="product-price">
								Price
							</label>
							<input required="true" type="number"  placeholder="Product Price" v-model="product.price">
						</div>
						<div class="form-group" v-if="product.images.length < 4">
							<label for="product-images">
								Images
							</label>
							<button class="image-select" @click.prevent="cloudinaryWidget">
								Add images
							</button>
							4 images should be selected
						</div>
						<br>
						<div class="form-group">
							<button role="submit" class="post-product" @click.prevent.stop="postProduct" v-if="notLoading">
								Post Product
							</button>
							<button role="submit" class="post-product" v-else>
								<img
										src="../../../public/images/button-loading.gif"
										alt
										:style="{position: 'relative', top: '-6px'}"
								>
							</button>
						</div>
						<span style="color: red; text-align: center">{{postFormError}}</span>
					</form>
				</div>
			</div>
		</transition>
		<template v-if="products.length === 0">
			<div class="no-product">
				You don't have any product yet
			</div>
			<button class="post-product" @click="openPostModal">
				Post Product
			</button>
		</template>
		<template v-else>
			<table class="products">
				<tr>
					<th>#</th>
					<th>ID</th>
					<th>Name</th>
					<th>Model</th>
					<th>Country</th>
					<th>Main Category</th>
					<th>Created At</th>
					<th>Action</th>
					<!--<th>Price</th>-->
				</tr>

				<tr v-for="(product,index) in products" :key="product.id">
					<td style="color: white">{{index + 1}}</td>
					<td style="color: white">{{product.id}}</td>
					<td style="color: white">{{product.attributes.name}}</td>
					<td style="color: white">{{product.attributes.model}}</td>
					<td style="color: white">{{product.attributes.country}}</td>
					<td style="color: white">{{product.attributes.main_category}}</td>
					<td style="color: white">{{product.attributes.created_at.split("T")[0]}}</td>
<!--					<td>{{annotate(parseInt(product.price))}}</td>-->
					<td>
						<!-- <icon-living icon="edit" style="color:#42b983"  ="openEditModal(product,product.id)"/> -->
						<icon-living
								icon="trash"
								@click="openDelModal(product,product.id)"
								style="color: red; text-align: center"
						/>
					</td>
				</tr>
			</table>
			<button class="post-product" @click="openPostModal">
				Post Product
			</button>
		</template>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "products",
	data() {
		return {
			noCategory: false,
			noSubCategory: false,
			countries: [],
			delModalOpen: false,
			editModalOpen: false,
			postModalOpen: false,
			productID: "",
			productDetails: {},
			product: {
				name: "",
				model: "".toUpperCase(),
				manufacturer: "",
				description: "",
				year: "",
				country: "",
				condition: "",
				main_category: "",
				sub_category: "",
				quantity: "",
				price: "",
				image1: "",
				image2: "",
				image3: "",
				image4: "",
				images: [],
				image: ""
			},
			postFormError: "",
			loading: true,
			deleted: false,
			BASE_URL: "https://api.drugstore.ng",
			flashText: "",
			notLoading: true,
			cloudinaryCounter: 0
		};
	},
	created() {
		document.documentElement.style.userSelect = "none";
	},
	destroyed() {
		// clearAllScrollLocks();
	},
	computed: {
		annotate: () => require("../../mixins/helpers").money
	},
	methods: {
		postProduct() {
			const {name,model,description,manufacturer,year,country,condition, main_category, sub_category, quantity,price, image} = this.product;
			if((name && model && manufacturer && description && year && country && condition && main_category && quantity && price && image) !== "") {
				this.notLoading = false;
				let productData = {
					data: {
						type: "Equipment",
						attributes: {
							name,
							model: model.toUpperCase(),
							manufacturer,
							year,
							country,
							condition,
							description,
							main_category,
							sub_category: sub_category || "",
							quantity,
							price,
							images: [...this.product.images],
							image
						}
					}
				};
				axios(`https://dragonvert.joppa.ng/equipments/`, { method: 'POST', data: productData, headers: { 'Content-Type':'application/vnd.api+json' } })
						.then(response => {
							if(response.statusText === "Created") {
								try{
									this.product.name = this.product.model = this.product.manufacturer = this.product.year = this.product.country = this.product.condition = this.product.main_category = this.product.sub_category = this.product.quantity = this.product.price = this.product.image = this.product.description = "";
									this.product.images = [];
									this.notLoading = true;
									window.alert("Successfully posted equipment");
									this.closeModal();
									this.$store.dispatch("updateMerchantProducts", this.$store.state.merchant.data.id);
								} catch(e) {
									console.log(`New Error:`,e);
								}
							} else {
								console.log(response)
							}
						})
						.catch(e => console.log(e));
			} else {
				this.postFormError = "All fields must be filled";
				let currentYear = new Date().getFullYear();
				if(year >= 1984 && year > currentYear) {
					this.postFormError += `<br> Invalid Year`
				}
			}
		},
		cloudinaryWidget() {
			var myWidget = cloudinary.createUploadWidget({
						cloudName: 'fabrixrus',
						uploadPreset: 'iols1xvl'}, (error, result) => {
							if (!error && result && result.event === "success") {
								let {image1,image2,image3,image4} = this.product;
								if(image1 === "") {
									this.product.image1 = result.info.url;
									this.cloudinaryCounter++;
									console.log(this.cloudinaryCounter);
								} else if(image2 === "" && image1 !== "") {
									this.product.image2 = result.info.url;
									this.cloudinaryCounter++;
									console.log(this.cloudinaryCounter);
								} else if(image3 === "" && image1 === image2 !== ""){
									this.product.image3 = result.info.url;
									this.cloudinaryCounter++;
									console.log(this.cloudinaryCounter);
								} else {
									this.product.image4 = result.info.url;
									this.cloudinaryCounter++;
									console.log(this.cloudinaryCounter);
								}

								this.product.image = image1;
								this.product.images = [{ image: image1 },{ image: image2 },{ image: image3 }];
							}
						});
			myWidget.open();
		},
		closeModal() {
			this.delModalOpen = false;
			this.editModalOpen = false;
			this.postModalOpen = false;
			// document.documentElement.style.overflowY = "auto";
		},
		onClickOutside() {
			this.closeModal();
		},
		// fetchDetails() {
		// 	axios
		// 		.get(`https://api.drugstore.ng/get/drug/info/${this.productID}`)
		// 		.then(r => {
		// 			this.productDetails = r.data.data.stock;
		// 			this.BASE_URL = "";
		// 			this.BASE_URL = "https://api.drugstore.ng";
		// 		});
		// },
		openEditModal(product, id) {
			document.documentElement.style.overflowY = "hidden";
			this.editModalOpen = true;
			this.productDetails = product;
			this.productID = id;
		},
		openDelModal(product, id) {
			// document.documentElement.style.overflowY = "hidden";
			this.delModalOpen = true;
			this.productID = id;
			this.productDetails = product;
		},
		openPostModal() {
			// document.documentElement.style.overflowY = "hidden";
			this.postModalOpen = true;
		},
		deleteProduct(id) {
			// s
		}
		// .then(r => {
					// 	this.deleted = true;
					// 	document.documentElement.style.overflowY = "scroll";
					// 	this.$router.push(
					// 		`${this.$route.path}?activeTab=dashboard`
					// 	);
					// });
	},
	props: ["category", "products"],
	watch: {
		BASE_URL() {
			this.fetchDetails();
		},
		cloudinaryCounter() {
			console.log(this.cloudinaryCounter)
		}
	}
};
</script>