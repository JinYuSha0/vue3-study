<script>
import useData from "../hooks/data";

export default {
  setup() {
    const { peopleList } = useData();
    return {
      peopleList,
    };
  },
  data() {
    return {};
  },
};
</script>

<template>
  <h1>About</h1>
  <ul>
    <li v-for="item in peopleList">
      <span>{{ item.name }}</span>
      <span> | </span>
      <span>{{ item.phone }}</span>
      <span> | </span>
      <span>{{ item.email }}</span>
    </li>
  </ul>
</template>
