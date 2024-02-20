<template>
	<section class="testimonials">
		<div class="testimonials__container" :class="[testimonial.classModifier]">
			<div class="testimonials__card card card-rl-radius-l card-bg-teal">
				<div class="card__quote__icon top">
					<IconsQuoteDark />
				</div>
				<div class="card__content">
					<p>{{ testimonial.content }}</p>
					<p><span>{{ testimonial.author.name }}</span> | {{ testimonial.author.title }}, {{ testimonial.author.project }}</p>
				</div>
				<div class="card__quote__icon bottom">
					<IconsQuoteDark />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	defineProps({
		testimonial: {
			type: Object,
			required: true,
			classModifier: {
				type: String,
				required: false,
				default: ''
			},
			content: {
				type: String,
				required: true
			},
			author: {
				name: {
					type: String,
					required: true
				},
				title: {
					type: String,
					required: false
				},
				project: {
					type: String,
					required: false
				}
			},
		}
	});
</script>