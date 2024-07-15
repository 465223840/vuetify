<template>
  <div class="h-full flex flex-col align-center justify-center">
    <div class="mb-4">
      <h1>对象查询</h1>
    </div>
    <div class="w-[66%] ">
      <div class="flex gap-2 ">
        <div class="w-30">
          <v-select v-model="select_active" :items="['全部', '应用', '小程序', '网站']" single-line variant="solo"
            density="compact" />
        </div>
        <div class="w-full">
          <v-text-field append-inner-icon="mdi-magnify" density="compact" label="请输入查询对象" variant="solo" hide-details
            single-line @click:append-inner="onSearch"></v-text-field>
        </div>
      </div>
      <div class="h-40 flex flex-col gap-2">
        <div class="flex justify-around gap-2">
          <h-card type="success">123</h-card>
          <h-card>123</h-card>
        </div>
        <div class="flex justify-around gap-2">
          <h-card>123</h-card>
          <h-card>123</h-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const select_active = ref('全部')
const search_text = ref('')

const onSearch = () => {
  console.log(search_text.value)
}
</script>

<style lang="scss" scoped></style>
