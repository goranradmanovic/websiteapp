<template>
    <section class="csb__hero" :style="{ backgroundImage: `url(/_nuxt/${bannerUrl})` }">
    	<div class="csb__hero__container">
    		<div class="card card-lr-radius-m csb__hero__card">
    			<h2>{{ company }}</h2>
    			<h3>The Challenge</h3>
    			<p v-html="content"></p>
    		</div>
    	</div>
    </section>
</template>

<script setup>
    defineProps({
        bannerUrl: {
            type: String,
            required: false
        },
        company: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        }
    });
</script>