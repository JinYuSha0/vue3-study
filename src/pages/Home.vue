<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    return {
      count,
      add() {
        count.value += 1;
      },
    };
  },
};
</script>

<template>
  <h1>{{ count }}</h1>
  <button v-on:click="add">add</button>
</template>
