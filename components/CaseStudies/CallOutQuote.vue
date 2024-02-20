<template>
    <section class="hero csb">
    	<div class="hero__container">
    		<div class="csb__testimonials">
    			<div class="card__quote__icon">
    				<img src="~assets/images/icons/utils/quote-light.svg" alt="Quote icon svg" />
    			</div>
    			<div class="card__content">
    				<p>{{ content }}</p>
    			</div>
    		</div>
    	</div>
    </section>
</template>

<script setup>
    defineProps({
        content: {
            type: String,
            required: false
        }
    });
</script>