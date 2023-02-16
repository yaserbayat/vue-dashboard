<template>
  <div>
    <p v-for="post in posts" v-bind:key="post.id">
      {{ post.title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePostsStore } from "@/stores/posts";

export default defineComponent({
  name: "UserPosts",
  setup() {
    const posts = usePostsStore().items;
    return { posts };
  },
});
</script>

<style scoped></style>
