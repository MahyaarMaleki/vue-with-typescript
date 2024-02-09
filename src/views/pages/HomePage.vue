<script setup lang="ts">
import JobList from '@/components/JobList.vue';
import NavBar from "@/components/NavBar.vue";
import {ref} from "vue";
import {useJobStore} from "@/stores/job";
import type {OrderTerm} from "@/types/OrderTerm";

const jobStore = useJobStore();
const jobs = ref(jobStore.jobs);
// default: sorted by title
const order = ref<OrderTerm>('title');
const handleSorting = (orderTerm: OrderTerm) => {
  order.value = orderTerm;
};

</script>

<template>
  <v-layout>
    <NavBar @sort-event="handleSorting"/>
    <v-main class="my-auto">
      <JobList :jobs="jobs" :order="order"/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>
