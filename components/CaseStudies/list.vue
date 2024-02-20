<template>
    <section class="cs__list">
    	<div class="cs__list__container">
    		<div class="cs__cards">
    			<div v-for="caseStudy in csDisplayOnSite" :key="caseStudy.page" class="cs__card">
    				<img :src="`/_nuxt${caseStudy.bannerUrl}`" :alt="`${caseStudy.page} card image`" class="cs__card__img" />
    				<NuxtLink :to="`/case-studies/articles/${caseStudy.page}`" class="cs__card__tag card-lr-radius-xs">
                        {{ caseStudy.company }}
                    </NuxtLink>
    				<p class="cs__card__text">{{ caseStudy.type }}</p>
    			</div>
    		</div>
    	</div>
    </section>
</template>

<script setup>
    import caseStudyItems from '~/data/case-studies/data.json';

    const csDisplayOnSite = ref([]);

    const getDisplayOnSite = () => caseStudyItems.filter(item => item.displayOnSite);

    csDisplayOnSite.value = getDisplayOnSite();
</script>