<script setup lang="ts">
import type Job from "@/types/Job";
import type {OrderTerm} from "@/types/OrderTerm";
import {computed} from "vue";

const props = defineProps<{
  jobs: Job[]
  order: OrderTerm
}>();

const sortedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b:Job) => {
    return a[props.order] > b[props.order] ? 1 : -1;
  });
});
</script>

<template>
  <v-container class="w-66">
    <v-row dense>
      <transition-group name="job-list">
        <v-col
            v-for="job in sortedJobs" :key="job.id"
            cols="12"
        >
          <v-card
              elevation="10"
          >
            <v-card-title class="text-capitalize">{{ job.title }} in {{ job.location }}</v-card-title>
            <v-card-subtitle class="text-subtitle font-weight-bold">{{ job.salary }}</v-card-subtitle>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus ea
              explicabo, fugiat illum incidunt laboriosam minus molestias nemo nostrum numquam odio
              pariatur quas quis repellendus sapiente, tenetur voluptate, voluptatum?</v-card-text>
          </v-card>
        </v-col>
      </transition-group>
    </v-row>
  </v-container>

</template>

<style scoped>
.job-list-move {
  transition: all 0.7s ease;
}
</style>