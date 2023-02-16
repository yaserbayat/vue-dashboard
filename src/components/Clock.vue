<template>
  <div class="bg-white p-2 mb-3 text-center text-black" :class="className">
    {{ clock ?? "00:00:00" }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { compose } from "@/utils/compose";
import type { PropType } from "vue";

export default defineComponent({
  name: "Clock",
  props: { className: { type: String as PropType<string> } },
  methods: {
    startTicking() {
      type clockType = {
        hours: number;
        minutes: number;
        seconds: number;
        ampm?: string;
      };
      const getDate = () => new Date();
      const serializedClockTime = (date: Date) => ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
      const civilianHours = (clockTime: clockType) => {
        return {
          ...clockTime,
          hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
        };
      };
      const appendAMPM = (clockTime: clockType) => ({
        ...clockTime,
        ampm: clockTime.hours >= 12 ? "PM" : "AM",
      });
      const prependZero =
        (key: string) => (clockTime: { [key: string]: number }) => {
          return {
            ...clockTime,
            [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
          };
        };
      const formatClock =
        (format: string) => (time: { [key: string]: string }) => {
          return format
            .replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm);
        };

      const convertToCivilianTime = (clockTime: string) =>
        compose(appendAMPM, civilianHours)(clockTime);
      const doubleDigits = (civilianTime: string) =>
        compose(
          prependZero("hours"),
          prependZero("minutes"),
          prependZero("seconds")
        )(civilianTime);

      this.clock = compose(
        getDate,
        serializedClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt")
      )();
    },
  },
  data() {
    return { clock: this.clock, interval: 0 };
  },
  mounted() {
    this.interval = setInterval(this.startTicking, 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
});
</script>

<style scoped></style>
