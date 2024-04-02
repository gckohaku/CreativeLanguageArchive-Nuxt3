<script setup lang="ts">
const storeContents = contentsStore();

const contentsData = storeContents.contentsList;
</script>

<template>
	<ContentArea :data="contentsData.find((ctn) => ctn.id === $route.params.id)" />
</template>

<style scoped lang="scss">
// style here
</style>