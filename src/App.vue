<template>
  <v-app>
    <v-theme-provider theme="dark" with-background>
      <Menu />
    </v-theme-provider>
    <v-main class="h-screen">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
