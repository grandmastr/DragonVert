<template>
	<div id="managePharmacies">
		<table class="pharmacies">
			<tr>
				<th>ID</th>
				<th>Pharmacy Name</th>
				<th>Address</th>
				<th>Country</th>
				<th>Date of creation</th>
				<th>Action</th>
			</tr>
			<tr v-for="pharmacy in pharmacies" :key="pharmacy.id">
				<td>{{pharmacy.id}}</td>
				<td>{{pharmacy.company_name}}</td>
				<td>{{pharmacy.street_address}}, {{pharmacy.city}}, {{pharmacy.state}}</td>
				<td>{{pharmacy.country}}</td>
				<td>{{pharmacy.created_at.split(" ")[0]}}</td>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "managePharmacies",
	props: ["pharmacies"]
};
</script>