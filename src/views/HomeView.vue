<script lang="ts">
import InputField from "../components/InputField.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InputField },
  setup() {
    const onSubmit = (e: any) => {
      console.log(e);
    };
    return { onSubmit };
  },
});
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <form
      @onsubmit="onSubmit"
      class="flex flex-col w-full md:w-1/2 mx-auto py-2 px-3 border rounded-md mt-1/2 max-w-screen-sm shadow-md"
    >
      <h1 class="text-center text-lg font-bold">Welcome</h1>
      <InputField type="text" label="Username" name="username" />
      <InputField type="password" label="password" name="password" />
    </form>
  </div>
</template>
