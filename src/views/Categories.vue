<template>
	<div id="categoriesPage">
        <Categories title="All Categories"/>
        <Footer />
    </div>
</template>

<script>
import Categories from "../partials/Categories";
import Footer from "../partials/Footer";

export default {
    name: "categoriesPage",
    components: { Categories,Footer }
};
</script>