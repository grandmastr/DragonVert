<template>
	<swiper :options="swiperOptions">
		<swiper-slide>
			<SliderProduct
				price="21"
				image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
			/>
		</swiper-slide>
		<swiper-slide>
			<SliderProduct
				price="121"
				image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
			/>
		</swiper-slide>
		<swiper-slide>
			<SliderProduct
				price="21"
				image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
			/>
		</swiper-slide>

		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
	height: 30px;
	/* background: white; */
	/* border: 1px solid green; */
}

.swiper-slide {
	display: flex;
	justify-content: center;
	flex-direction: column;
	/* width: 300px; */
}

.swiper-container {
	height: 500px;
}
</style>


<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
	name: "productSlider",
	components: { swiper, swiperSlide },
	props: ["category"],
	data() {
		return {
			swiperOptions: {
				slidesPerView: 5,
				spaceBetween: 0,
				freeMode: true,
				loop: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
		};
	}
};
</script>