<template>
  <div class="search-page-wrapper">
    <div class="search-container">
      <div class="search-logo">
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <img class="logo-text" src="../../assets/images/search-logo-text.png" alt="">
      </div>
      <SearchBox :loading="loading" @search="onClick" />
      <History @click="onClick" />
    </div>
  </div>
</template>

<script setup>
import SearchBox from './components/SearchBox.vue'
import History from './components/History.vue'

const router = useRouter()
const loading = ref(false)

const onClick = (type, keywords) => {
  loading.value = true
  setTimeout(() => {
    router.push(`/object/SearchResults?type=${type}&keywords=${keywords}`)
    loading.value = false
  }, 200);
}
</script>

<style lang="scss" scoped>
.search-page-wrapper {
  height: 100%;
  background: url(../../assets/images/search-bg.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
  .search-container {
    width: 1000px;
    margin:  180px auto 0;
    .search-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      .logo {
        height: 80px;
      }
      .logo-text {
        height: 60px;
        margin-left: 35px;
      }
    }
  }
}
</style>
