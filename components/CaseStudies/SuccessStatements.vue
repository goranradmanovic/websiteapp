<template>
    <section class="csb__footer">
    	<div class="csb__footer__container">
    		<div class="csb__footer__container__items">
    			<div v-for="(successStatement, index) in successStatements" :key="`success-statment-${index}`" class="csb__footer__item">
    				<div :class="['csb__footer__item__icon', `clr-${successStatement.colour}`]">
    					<img :src="`/_nuxt${successStatement.icon}`" :alt="`${useGetFileName(successStatement.iconUrl)} icon`" />
    				</div>
    				<h3>{{ successStatement.label }}</h3>
    			</div>
    		</div>
    	</div>
    </section>
</template>

<script setup>
	defineProps({
		successStatements: {
			type: Array,
			required: false
		}
	});
</script>