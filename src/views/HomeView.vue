<script lang="ts">
import InputField from "../components/InputField.vue";
import { defineComponent } from "vue";
import users from "@/data/users";
import router from "@/router";

export default defineComponent({
  components: { InputField },
  setup() {
    const onSubmit = (e: Event) => {
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const data = { username: "", password: "" };
      // need to convert it before using it
      for (let [key, val] of formData.entries()) {
        Object.assign(data, { [key]: val });
      }
      const user = users.filter(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      if (user.length) {
        router.push({
          name: "dashboard",
          path: "/dashboard",
          params: { id: user[0].id },
        });
      }
    };
    return { onSubmit };
  },
});
</script>

<template>
  <div class="h-screen bg-indigo-50 flex justify-center items-center">
    <form
      v-on:submit.prevent="(e) => onSubmit(e)"
      class="bg-white flex flex-col w-full sm:w-1/2 md:w-1/3 mx-auto py-2 px-3 border rounded-md mt-1/2 max-w-screen-sm shadow-md"
    >
      <h1 class="text-center text-lg font-bold">Welcome</h1>
      <InputField type="text" label="Username" name="username" />
      <InputField type="password" label="password" name="password" />
      <button type="submit" class="h-8 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  </div>
</template>
