<script setup lang="ts">
const storeContents = contentsStore();
</script>

<template>
	<div class="content-list">
		<ContentList :contents="storeContents.contentsList"></ContentList>
	</div>
</template>

<style scoped>
.content-list {
	width: 100%;
}
</style>