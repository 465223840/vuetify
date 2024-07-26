<template>
  <div class="bg-white border p-2">
    <v-row justify="space-between">
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">
          <div class="w-full flex items-center gap-2">
            <h-input prefixIcon="mdi-magnify" v-model="search" class="w-full" />
            <h-button @click="panel = !panel" type="link">高级</h-button>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-2 ma-2">
          <div class="flex justify-end gap-2">
            <h-button type="primary" size="large" class="w-36" @click="onSearch">查 询</h-button>
            <h-button size="large" class="w-36" @click="reset">重置</h-button>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <div v-show="panel">
      <HighLevel :form="form" />
    </div>
  </div>
</template>

<script setup>
import HighLevel from './HighLevel.vue'
const search = ref('')
const panel = ref(false)

const form_initial = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
}

const form = ref(form_initial)

const reset = () => {
  console.log(1)
  // form.value = JSON.parse(JSON.stringify(form_initial))
}
const onSearch = () => {
  console.log(form.value)
}
</script>

<style lang="scss" scoped></style>
