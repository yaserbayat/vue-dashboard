<template>
  <ul class="p-2 bg-indigo-500 text-indigo-500 w-64">
    <Clock />

    <li v-for="link in links" :key="link.name" class="button">
      <RouterLink :to="{ path: link.to }" class="block">
        {{ link.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clock from "@/components/Clock.vue";

export default defineComponent({
  name: "Sidebar",
  components: { Clock },
  setup() {
    const links = [
      { name: "profile", to: "profile" },
      { name: "posts", to: "posts" },
    ];
    return { links };
  },
});
</script>

<style scoped>
.button {
  padding: 5px 8px;
  background: #e0e7ff;
  margin-bottom: 12px;
  border-radius: 5px;
}
</style>
