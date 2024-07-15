<template>
  <v-app>
    <v-theme-provider theme="dark" with-background>
      <Menu />
    </v-theme-provider>
    <v-app-bar flat border density="compact">
      <!-- <Breadcrumbs /> -->
    </v-app-bar>
    <v-main class="bg-[#f6f7f9]">
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
