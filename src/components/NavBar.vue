<script setup lang="ts">
import {useThemeStore} from "@/stores/theme";
import {ref, watch} from "vue";
import type {OrderTerm} from "@/types/OrderTerm";

const themeStore = useThemeStore();
const isDark = ref(themeStore.isThemeDark);
const activeIndex = ref(1);
watch(isDark, async (newIsDark, oldIsDark) => {
  if(newIsDark === !oldIsDark) {
    themeStore.setTheme(newIsDark);
  }
});
const emit = defineEmits<{
  (e: 'sortEvent', orderTerm: OrderTerm): void
}>();

</script>

<template>
  <v-app-bar height="70" :elevation="2">
    <v-app-bar-title id="hyrule-jobs-title">Hyrule Jobs</v-app-bar-title>
    <div class="position-absolute d-flex align-center justify-center w-100 h-100">
      <v-tabs mandatory v-model="activeIndex">
        <v-tab @click="emit('sortEvent', 'salary')" :value="0">Sort by salary</v-tab>
        <v-tab @click="emit('sortEvent', 'title')" :value="1">Sort by title</v-tab>
        <v-tab @click="emit('sortEvent', 'location')" :value="2">Sort by location</v-tab>
      </v-tabs>
    </div>
    <v-switch
        class="d-flex align-center me-2"
        :append-icon="themeStore.themeIcon"
        v-model="isDark"
        hide-details
    ></v-switch>
  </v-app-bar>
</template>

<style scoped>
#hyrule-jobs-title {
  font-family: HyliaSerif, serif;
  letter-spacing: 4px;
}
</style>