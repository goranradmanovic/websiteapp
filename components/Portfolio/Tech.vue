<template>
	<div class="portfolio__tech__tags">
		<div v-for="(item, index) in tech" :key="index" class="card-lr-radius-s portfolio__tech__tag">{{ item }}</div>
	</div>
</template>

<script setup>
	defineProps({
		tech: {
			type: Array,
			required: true,
			default: []
		}
	});
</script>