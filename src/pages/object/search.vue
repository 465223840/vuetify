<template>
  <div class="h-full flex flex-col justify-center">
    <v-container>
      <v-row justify="center">
        <v-col :cols="6">
          <v-sheet class="ma-2 pa-2 text-center text-5xl font-bold text-#7291bf">
            对象查询
          </v-sheet>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col md="2" lg="2">
          <v-combobox v-model="type" :items="items" hide-details />
        </v-col>
        <v-col md="6">
          <v-text-field :loading="loading" label="请输入查询对象" v-model="keyword" clearable hide-details single-line>
            <template v-slot:append-inner>
              <v-btn density="comfortable" icon="mdi-magnify" @click="onClick" />
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col :cols="4">
          <demo1 />
        </v-col>
        <v-col :cols="4">
          <demo1 />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="4">
          <demo1 />
        </v-col>
        <v-col :cols="4">
          <demo1 />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import demo1 from './components/History/demo1.vue'
const router = useRouter()

const items = ['IMSI', '应用', '小程序', '网站']
const type = ref('网站')
const keyword = ref('')
const loading = ref(false)

const onClick = () => {
  loading.value = true
  console.log(router.getRoutes())
  router.push("/object/profile/123")
  // router.push("/resource/prifile")
  setTimeout(() => {
    console.log(keyword.value)
    loading.value = false
  }, 2000);
}
</script>

<style lang="scss" scoped></style>
