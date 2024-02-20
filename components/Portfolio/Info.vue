<template>
	<p>{{ info }}</p>
</template>

<script setup>
	defineProps({
		info: {
			type: String,
			required: true,
			default: ""
		}
	});
</script>