<template>
  <v-container>
    <v-row justify="center" class="mt-3 mb-3">
      <SearchBox @search="onSearch" :type="type" :keywords="keywords" style="width: 1000px" />
    </v-row>
    
    <ServicesList />
  </v-container>
</template>

<script setup>
// const router = useRouter()
// console.log(router.getRoutes())

const {query} = useRoute()
const {type,keywords} = query

import SearchBox from './components/SearchBox.vue';
import ServicesList from './components/ServicesList.vue';

const onSearch = (type, keywords) => {
  console.log(type, keywords)
}

</script>

<style lang="scss" scoped></style>
