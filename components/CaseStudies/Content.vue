<template>
	<template v-if="data">
		<CaseStudiesCallOutQuote :content="data.content.calloutQuote" />
		<CaseStudiesChallenge :company="data.company" :content="data.content.challenge" :bannerUrl="data.bannerUrl" />

		<!--=============== CASE STUDIES - CONTENT-TEXT SECTION ===============-->
		<section class="csb__content">
			<div class="csb__content__container">
				<article class="csb__content__article">
					<ContentDoc :path="$route.path">
						<template v-slot="{ doc }">
							<ContentRenderer :value="doc" />
						</template>
						<template #empty>
							<h1>Document is empty</h1>
						</template>
						<template #not-found>
							<h1>Document not found</h1>
						</template>
					</ContentDoc>
				</article>

				<CaseStudiesAside :aside="data.content.aside" />
			</div>
		</section>
		<CaseStudiesSuccessStatements :successStatements="data.content.successStatements" />
	</template>
	<template v-else>
		<section class="csb__content">
			<div class="csb__content__container">
				<article class="csb__content__article">
					<h1>Document not found</h1>
				</article>
			</div>
		</section>
	</template>
</template>

<script setup>
	import caseStudiesItems from '~/data/case-studies/data.json';

	let data = ref([]);

	const setArticleContent = () => {
		if (!caseStudiesItems) return;

		const currentPage = useRoute().path.split('/').pop();
		
		data = caseStudiesItems.find(item => item.page === currentPage);
	}

	setArticleContent();
</script>