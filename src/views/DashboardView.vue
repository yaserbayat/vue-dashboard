<template>
  <div class="flex mx-auto">
    <Sidebar />
    <div class="min-h-screen max-h-screen overflow-y-auto flex-1">
      <h1>This is dashboard page</h1>
      <!--      {{ JSON.stringify(posts) }}-->
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { defineComponent } from "vue";
import { usePostsStore } from "@/stores/posts";

export default defineComponent({
  name: "DashboardView",
  components: { Sidebar },
  setup() {
    const posts = usePostsStore();
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "get" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.length > 0) posts.addItems(res);
      });
  },
});
</script>

<style></style>
