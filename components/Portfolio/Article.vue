<template>
	<article>
		<ContentDoc :path="`${$route.path}/articles/${id}`">
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
</template>

<script setup>
	defineProps({
		id: {
			type: String,
			required: true,
			default: ""
		}
	});
</script>