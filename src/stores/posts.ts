import { defineStore } from "pinia";
export type posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];
export const usePostsStore = defineStore({
  id: "users",
  state: () => ({ items: [] as posts }),
  actions: {
    addItems(posts: posts) {
      this.items = posts;
    },
  },
});
