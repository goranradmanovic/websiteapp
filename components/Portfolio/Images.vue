<template>
	<section class="portfolio__images">
		<img v-for="(img, index) in images" :key="index" :src="`${img.url}${img.name}${img.format}`" :alt="`${img.name} image`" class="portfolio__img" />
	</section>
</template>

<script setup>
	defineProps({
		images: {
			type: Array,
			required: true,
			default: []
		}
	});
</script>