<template>
  <div class="flex justify-center align-center">
    <v-container>
      <v-row justify="center">
        <v-col :cols="6">
          <v-sheet class="ma-8 pa-2 text-center text-5xl font-bold text-#7291bf">
            画像查询
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col :cols="6">
          <SearchBox :loading="loading" @search="onClick" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="5">
          <History @click="onClick" />
        </v-col>
      </v-row>
    </v-container>
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

<style lang="scss" scoped></style>
