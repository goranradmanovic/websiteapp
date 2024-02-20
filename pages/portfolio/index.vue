<template>
	<main class="wrapper">
		<!--=============== PORTFOLIO CHALKBOARD ===============-->
		<div class="portfolio__container">
			<!--=============== PORTFOLIO CHALKBOARD - TITLE SECTION ===============-->
			<section class="portfolio__title">
				<p>
					<img :src="`/_nuxt/assets/images/icons/portfolio/${portfolioData.icon}.svg`" :alt="portfolioData.icon" />
					{{ portfolioData.type }}
				</p>
				<h1>{{ portfolioData.company }}</h1>
			</section>
			<!--=============== PORTFOLIO CHALKBOARD - CONTENT (TEXT) SECTION ===============-->
			<section class="portfolio__content">
				<PortfolioQuote :quote="portfolioData.quote" />

				<PortfolioInfo :info="portfolioData.description" />

				<NuxtLink to="#" class="btn btn-rounded btn-bg-green portfolio__content__cta">Visit the site</NuxtLink>

				<PortfolioImagesSlider :images="portfolioData.images" />

				<PortfolioArticle :id="portfolioData.id" />
			</section>
			<!--=============== PORTFOLIO CHALKBOARD - IMAGES SECTION ===============-->
			<PortfolioImages :images="portfolioData.images" />

			<!--=============== PORTFOLIO CHALKBOARD - GET IN TOUCH/TECH SECTION ===============-->
			<section class="portfolio__tech">
				<PortfolioCompanyInfo :companyInfo="portfolioData.tsdInfo" />
				
				<PortfolioTech :tech="portfolioData.tags" />
			</section>
		</div>
		<!--=============== TESTIMONIALS ===============-->
		<Testimonial :testimonial="useGetTestimonial(1)" class="mb" />
	</main>
</template>

<script setup>
	import data from '~/data/portfolio/data.json';

	useGetMeta();

	const portfolioData = ref([]);

	const getPortfolioData = pageId => data.filter(item => item.id === pageId)[0];

	portfolioData.value = getPortfolioData('chalkboards-uk');
</script>