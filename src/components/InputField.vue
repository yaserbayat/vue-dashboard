<template>
  <label :for="name" class="flex flex-col mb-4">
    <span class="mb-1 font-bold text-sm">{{ label }}</span>
    <input
      :type="type"
      :id="name"
      :name="name"
      class="rounded-md border h-8 px-2"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  name: "InputField",
  props: {
    label: { require: true, type: String as PropType<string> },
    name: { require: true, type: String as PropType<string> },
    type: {
      require: true,
      type: String as PropType<string>,
      defaultValue: "text",
    },
  },
});
</script>

<style scoped></style>
