<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <span>|</span>
      <router-link to="/about">Go to About</router-link>
    </p>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"
    /></keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style scoped></style>
