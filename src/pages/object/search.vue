<template>
  <div class="h-full">
    <v-container>
      <v-row justify="center" >
        <v-col :cols="4">
          <v-sheet class="ma-2 pa-2 text-center text-5xl font-bold text-#7291bf">
            对象查询
        </v-sheet>
        </v-col>
      </v-row>

       <v-row justify="center">
        <v-col :cols="2">
          <v-combobox v-model="type" :items="items" hide-details />
        </v-col>
        <v-col :cols="8">
          <v-text-field :loading="loading" label="请输入查询对象" v-model="keyword" clearable hide-details single-line>
            <template v-slot:append-inner>
              <v-btn density="comfortable" icon="mdi-magnify" @click="onClick" />
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
      <v-container >
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
import {useRoute} from 'vue-router'
const route = useRoute()


const items = ['IMSI', '应用', '小程序', '网站']
const type = ref('网站')
const keyword = ref('')
const loading = ref(false)
const onClick = () => {
  loading.value = true
  setTimeout(() => {
    console.log(keyword.value)
    loading.value = false
  }, 2000);

}
</script>

<style lang="scss" scoped></style>
