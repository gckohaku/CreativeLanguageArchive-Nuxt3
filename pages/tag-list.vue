<script setup lang="ts">
const storeContents = contentsStore();

const contentsData = storeContents.contentsList;

let allTags: string[] = [];

for (const content of contentsData) {
	allTags = allTags.concat(content.tags);
}
allTags = allTags.filter((el) => el !== "hidden");

const setTags: Set<string> = new Set(allTags);
</script>

<template>
	<div class="tags-area">
		<TagsArea :tags="Array.from(setTags)" />
	</div>
</template>

<style scoped lang="scss">

</style>