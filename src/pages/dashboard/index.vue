<template>
  <v-container class='h-full'>
    <v-row justify="center">
      <v-col :cols="2">
        <TimePicker v-model="date" label="日期" />
      </v-col>
      <v-col :cols="6">
        <v-text-field label="请输入查询对象" v-model="keywords" clearable single-line color="primary" variant="outlined"
          @keyup.enter="() => onSearch()">
          <template #append-inner>
            <v-btn density="comfortable" icon="mdi-magnify" @click.stop="() => onSearch()" />
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-divider />
    <v-card style='height:calc(100% - 80px)'>
      <div class="flex h-full">
        <v-list nav :lines="false" class="w-60 h-full position-absolute " bg-color="#f5f5f5">
          <v-list-item v-for="(item, index) in items" :key="index" border class="bg-white"
            style="border-color: #62ccff;">
            <template #append>
              {{ item.count }}
              <v-btn @click="() => onRemove(index)" color="red" icon="mdi-close" variant="text" density="compact" />
            </template>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list>
        <v-card class="w-full ml-60 h-full overflow-y-auto" density="compact">
          <template #title>
            <div class="color-gray-5 text-lg h-12 line-height-12">
              {{ str }}
            </div>
          </template>
          <v-divider />
          <Loading :loading="loading">
            <v-container class='h-full'>
              <v-row justify="center">
                <v-col :cols="4" v-for="(card, key) of cards">
                  <v-card class="h-90">
                    <v-card-title>
                      {{ key }}
                    </v-card-title>
                    <v-divider />
                    <v-list>
                      <BarChart :data="card" @click="onSearch" />
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </Loading>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
// import TimePicker from './components/TimePicker.vue'
import dayjs from 'dayjs';

// 获取当天的年月日 YYYY-MM-DD 格式
const today = dayjs().format('YYYY-MM-DD');

const date = ref(today)
const keywords = ref('')
const loading = ref(false)
const str = ref(`总人数: 0 人，涉及行业 0 个, 职业角色 0 种, 异常标签 0 人`)

const cards = ref([])
const items = reactive([])

const getData = async (data) => {
  try {
    loading.value = true
    const res = await fetch('/api/get_tag_count_all', {
      method: 'POST', // 指定请求方法
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "tag_code": data, "create_time": date.value })
    })
    return res.json()
  } catch (error) {
    return null
  } finally {
    loading.value = false
    keywords.value = ''
  }
}

const onSearch = async (text) => {
  const attr = keywords.value || text
  const target = items.find((item) => attr === item.title)
  if (!target) {
    let params = [...items.map(item => item.title)].join(',')

    if (attr) {
      params += ',' + attr
      items.push({ title: attr, count: 0 })
    }
    cards.value = await getData(params)
  }
}

const onRemove = async (index) => {
  items.splice(index, 1)
  const data = [...items.map(item => item.title)].join(',')
  cards.value = await getData(data)
}
</script>
