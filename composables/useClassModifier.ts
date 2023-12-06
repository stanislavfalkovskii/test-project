import { computed } from 'vue';
import { useStore } from "~/store/store";

export function useClassModifier() {
    const postStore = useStore();
    const currentView = computed(() => postStore.viewMode);

    const classModifier = computed(() => {
        return currentView.value === 'grid' ? 'grid' : 'horizontal';
    });

    return {
        classModifier,
    };
}
