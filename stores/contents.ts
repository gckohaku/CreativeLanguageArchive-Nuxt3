import { defineStore } from "pinia"
import { type Ref, ref, computed } from "vue";

import type { ContentUnit } from "@/utils/common/ContentUnit";
import { contentsData } from "@/utils/common/contentsData";
import pushContentData from "@/utils/page-contents/index";

export const contentsStore = defineStore("contentsStore", () => {
	contentsData.splice(0);

	for (const category of pushContentData) {
		if (typeof category === "function") {
			category();
		}
		else {
			for (const pushContent of category) {
				pushContent();
			}
		}
	}

	const contentsList: Ref<ContentUnit[]> = ref(contentsData);

	return { contentsList };
});