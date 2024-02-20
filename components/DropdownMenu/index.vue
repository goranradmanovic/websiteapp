<template>
	<ul class="dropdown__menu" id="dropdown-menu-main" :class="{ 'open': isOpen }">
		<li class="dropdown__menu__close" id="dropdown__menu-close" @click="closeDropdown">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path fill="#FFF" d="m12 10.586 4.95-4.95 1.415 1.415-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.95 4.95-1.413-1.415 4.95-4.95-4.95-4.95L7.05 5.638l4.95 4.95Z" />
				</svg>
			</div>
		</li>
		<li class="dropdown__menu__card">
			<h2>Case Studies</h2>
		</li>
		<li v-for="(item, index) in csDisplayOnMenu" :key="index" class="dropdown__menu__card" @click="closeDropdown">
			<NuxtLink :to="`${item.url}${item.page}`" class="card__link">
				<h3>{{ item.company }}</h3>
				<p>{{ item.description }}</p>
			</NuxtLink>
		</li>
		<li class="dropdown__menu__card" @click="closeDropdown">
			<NuxtLink to="/case-studies" class="btn btn-rounded btn-clr-white btn-bg-green dropdown__menu__card--cta">View all case studies</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
    import caseStudyItems from '~/data/case-studies/data.json';

    defineProps({
        isOpen: {
            type: Boolean,
            required: true
        }
    });

    const emit = defineEmits(['close']),
        csDisplayOnMenu = ref([]);

    const getDisplayOnMenu = () => caseStudyItems.filter(item => item.displayOnMenu),
    	closeDropdown = () => emit('close');

    csDisplayOnMenu.value = getDisplayOnMenu();
</script>