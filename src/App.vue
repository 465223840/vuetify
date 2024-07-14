<template>
  <v-app>
    <v-theme-provider theme="dark" with-background>
      <Menu />
    </v-theme-provider>
    <v-main class="h-screen">
      <router-view v-slot="{ Component, route }">
        <v-scroll-x-reverse-transition mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </v-scroll-x-reverse-transition>
      </router-view>

    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
