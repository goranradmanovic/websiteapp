<template>
	<div class="card card-rl-radius-m portfolio__tech__card" v-html="companyInfo"></div>
</template>

<script setup>
	defineProps({
		companyInfo: {
			type: String,
			required: true,
			default: ""
		}
	});
</script>