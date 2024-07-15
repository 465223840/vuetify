<template>
  <v-breadcrumbs :items="crumbs" density="comfortable">
    <template #title="{ item }">
      {{ item.title }}
    </template>
  </v-breadcrumbs>
</template>

<script setup>
const route = useRoute()
const crumbs = ref([]);

watchEffect(() => {
  crumbs.value = []
  //读取路由信息
  route.matched.forEach((item) => {
    crumbs.value.push({
      title: item.path
    });
  });
  //因为是挂载主页路由下，所以去掉根节点
  crumbs.value.shift();

  console.log(crumbs.value)
})



</script>
