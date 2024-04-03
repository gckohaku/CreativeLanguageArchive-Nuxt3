import { defineStore } from "pinia"
import { type Ref, ref } from "vue";

export const environmentsStore = defineStore("environmentsStore", () => {
	const contentImageDirectory: Ref<string> = ref(((process.env.NODE_ENV === "production")  ? "/CreativeLanguageArchive-Nuxt3/" : "/") + "content-use-images/");

	console.log(process.env.NODE_ENV);

	return { contentImageDirectory };
});