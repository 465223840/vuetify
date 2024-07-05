<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="5">
        <SearchBox @search="onSearch" :type="type" :keywords="keywords" />
      </v-col>
    </v-row>
    <v-divider />
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
