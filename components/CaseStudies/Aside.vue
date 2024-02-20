<template>
	<div class="csb__content__aside">
		<div class="card card-rl-radius-m csb__content__aside__card">
			<h2>{{ aside.title }}</h2>
			<div v-html="aside.content"></div>
		</div>
	</div>
</template>

<script setup>
    defineProps({
        aside: {
            type: Object,
            required: true
        }
    });
</script>