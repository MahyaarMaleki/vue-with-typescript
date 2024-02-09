<script setup lang="ts">
import {onBeforeMount} from "vue";
import {useThemeStore} from "@/stores/theme";

onBeforeMount(() => {
  const themeStore = useThemeStore();
  themeStore.initTheme();
})
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style scoped>

</style>
