<template>
	<div class="portfolio__content__slider">
		<Carousel v-bind="settings">
			<Slide v-for="(img, index) in images" :key="index">
				<img :src="`${img.url}${img.name}${img.format}`" :alt="`${img.name} image`" />
			</Slide>
			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<script setup>
	defineProps({
		images: {
			type: Array,
			required: true,
			default: []
		}
	});

	const settings = {
		itemsToShow: 1,
		snapAlign: 'start',
		wrapAround: true
	};
</script>