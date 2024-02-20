<template>
	<p class="card card-lr-radius-m portfolio__content__card">{{ quote }}</p>
</template>

<script setup>
	defineProps({
		quote: {
			type: String,
			required: true,
			default: ""
		}
	});
</script>