<template>
  <ul class="rounded-md border p-2 bg-indigo-500 text-white w-80">
    <li v-for="link in links" :key="link.name" class="button">
      <RouterLink :to="{ path: link.to }">{{ link.name }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Sidebar",
  setup() {
    const route = useRoute();
    const id = route.params.id;
    console.log(id);
    const links = [
      { name: "User profile", to: "profile" },
      { name: "User Statistic", to: "stats" },
    ];
    return { links };
  },
});
</script>

<style scoped></style>
