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
      <v-btn-toggle mandatory variant="outlined" v-model="activeIndex">
        <v-btn @click="emit('sortEvent', 'salary')">Sort by salary</v-btn>
        <v-btn @click="emit('sortEvent', 'title')">Sort by title</v-btn>
        <v-btn @click="emit('sortEvent', 'location')">Sort by location</v-btn>
      </v-btn-toggle>
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