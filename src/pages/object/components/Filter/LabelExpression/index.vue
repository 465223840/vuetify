<template>
  <div class="border bg-[#F5FAFA]" @contextmenu.prevent>
    <div class="flex gap-2 items-center p-3 border-b-2">
      <v-autocomplete prepend-inner-icon="mdi-magnify" density="compact" label="请输入关键词..." variant="solo" hide-details
        single-line v-model="searchText" clearable menu-icon="" :items="items" @keyup.enter="onEnter" class="w-1/4"
        min-width="320">
        <template #append>
          <v-btn icon="mdi-globe-model" tile density="compact" variant="text" color="primary">
            <v-icon icon="mdi-globe-model" />
            <v-menu activator="parent" :close-on-content-click="false">
              <LabelTree />
            </v-menu>
          </v-btn>
        </template>
      </v-autocomplete>

      <div class="flex gap-2 p-2 w-screen" ref="el1">
        <h-tag v-for="item in list1" :key="item.id" clearable @remove="removeTag">
          {{ item.name }}
        </h-tag>
      </div>

      <h-select :options="[
        { label: '与 &', value: '&' },
        { label: '或 |', value: '|' },
        { label: '非 !', value: '!' }
      ]" icon='mdi-function-variant' @select="onSelect" />
    </div>

    <div class="flex relative p-1">
      <div class="flex gap-2 p-2 border-r-2" ref="el3">
        <h-tag v-for="item in list3" :key="item.id" :color="item.color">
          {{ item.name }}
        </h-tag>
      </div>

      <div class="flex flex-wrap gap-2 p-2 w-screen" ref="el2">
        <h-tag v-for="item in list2" :key="item.id" :color="item.color" @contextmenu="handleRightClick(item, $event)">
          {{ item.name }}
        </h-tag>
      </div>

      <div class="p-2">
        <v-btn density="comfortable" prepend-icon="mdi-tag-remove" @click="onClear">清空</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDraggable } from 'vue-draggable-plus'
import UseData from './UseData';

const { flattenTags } = UseData()
const items = computed(() => flattenTags(label_tree))

const searchText = ref('')

const list1 = ref([{ name: '4444', id: '4' }, { name: '5555', id: '5' }, { name: '6666', id: '6' }, { name: '7777', id: '7' }])
const list2 = ref([{ name: 'aaaa', id: 'a' }, { name: 'bbbb', id: 'b' }, { name: 'cccc', id: 'c' }, { name: 'dddd', id: 'd' }])
const list3 = ref([
  { id: '&', name: '&', color: 'blue', type: 3 },
  { id: '|', name: '|', color: 'green', type: 3 },
  { id: '!', name: '!', color: 'red', type: 3 },
  { id: '()', name: '()', color: 'black', type: 3 },
])

// Data for label tree
const label_tree = [
  {
    title: '标签1',
    value: 1,
    children: [{ title: '标签1-1', value: 11 }],
  },
  { title: '标签2', value: 2 },
]

const removeTag = () => {
  console.log(1)
}

// Event handlers
const onEnter = () => console.log('Enter pressed')
const onClear = () => list2.value = []


const onSelect = (val) => {
  if (list1.value.length <= 0) return
  const target = list3.value.find(item => item.id === val)
  if (!target) {
    console.warn(`Item with id ${val} not found in list3`)
    return
  }
  let timestamp = Date.now()
  list2.value = [...list2.value, ...list1.value.flatMap(item => [{ ...target, timestamp: timestamp += 1 }, item])]
  list1.value = []
}

const handleRightClick = (item, event) => {
  event.preventDefault()
  if (item.type !== 3) {
    list1.value.push(item)
    list2.value = list2.value.filter(_item => _item.id !== item.id)
  } else {
    handleSpecialItemRightClick(item)
  }
}

const handleSpecialItemRightClick = (item) => {
  if (item.name === '(' || item.name === ')') {
    const item1 = list2.value.find(_item => _item.id === item.id)
    const item2 = list2.value.find(_item => _item.timestamp === item1.timestamp)
    if (item1 && item2) {
      list2.value = list2.value.filter(_item => _item.timestamp !== item1.timestamp)
      list2.value = list2.value.filter(_item => _item.timestamp !== item2.timestamp)
    }
  } else {
    list2.value = list2.value.filter(_item => _item.timestamp !== item.timestamp)
  }
}
const el1 = ref()
const el2 = ref()
const el3 = ref()
// Draggable configurations
useDraggable(el1, list1, {
  animation: 250,
  ghostClass: 'ghost',
  group: { name: 'people', pull: true, put: ['people'] },
  onUpdate: () => console.log('更新 list1'),
  onAdd: (event) => {
    const newItem = list1.value[event.newIndex]
    if (newItem && newItem.type === 3) {
      list1.value.splice(event.newIndex, 1)
    }
  }
})

useDraggable(el2, list2, {
  animation: 250,
  ghostClass: 'ghost',
  group: { name: 'people', pull: true, put: ['people', 'operators'] },
  onUpdate: () => console.log('更新 list2'),
  onAdd: (event) => {
    if (event.data.type === 3) {
      const timestamp = Date.now()
      if (event.data.id === '()') {
        list2.value.splice(event.newIndex, 1)
        list2.value.splice(event.newIndex, 0, { id: '(', name: '(', type: 3, timestamp })
        list2.value.splice(event.newIndex + 1, 0, { id: ')', name: ')', type: 3, timestamp })
      } else {
        list2.value.splice(event.newIndex, 1)
        list2.value.splice(event.newIndex, 0, { ...event.data, timestamp })
      }
    }
  }
})

useDraggable(el3, list3, {
  animation: 250,
  ghostClass: 'ghost',
  group: { name: 'operators', pull: 'clone', put: false },
  sort: false
})
</script>
