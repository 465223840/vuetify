<template>
  <v-app>
    <v-theme-provider theme="dark" with-background>
      <Menu />
    </v-theme-provider>
    <v-main class="h-screen">
      <router-view v-slot="{ Component, route }" transition="fade">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>

    </v-main>
  </v-app>
</template>

<script setup>
//
</script>


<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
