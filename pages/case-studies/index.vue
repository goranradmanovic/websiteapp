<template>
	<main class="wrapper">
		<!--=============== CASE STUDIES - HERO SECTION ===============-->
		<section class="hero cs">
			<div class="hero__container">
				<div class="hero__text">
					<h1>
						<span class="hero__text--teal">Case <br /> Studies</span>
					</h1>
					<p>At TSD, we don't shy away from complexity - we embrace it. We thrive on solving the most intricate technical challenges that others may hesitate to approach.</p>
				</div>
			</div>
		</section>
		<!--=============== CASE STUDIES - IMAGE CARDS SECTION ===============-->
		<CaseStudiesList />
		<!--=============== TESTIMONIALS ===============-->
		<Testimonial :testimonial="useGetTestimonial(1)" class="m-block" />
	</main>
</template>

<script setup>
    useGetMeta();
</script>