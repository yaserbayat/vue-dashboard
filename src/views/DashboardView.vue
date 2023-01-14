<template>
  <div class="flex mx-auto">
    <Sidebar />
    <div class="min-h-screen">
      <h1>This is dashboard page</h1>
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardView",
  components: { Sidebar },
});
</script>

<style></style>
