<template>
  <div class="border bg-[#F5FAFA]" @contextmenu.prevent>
    <div class=" flex gap-2 p-3 border-b-2">
      <v-autocomplete :loading="loading" prepend-inner-icon="mdi-magnify" density="compact" label="请输入关键词..."
        variant="solo" hide-details single-line v-model="searchText" clearable menu-icon="" :items="items"
        @keyup.enter="onEnter" class="w-1/4" max-width="320">
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
        <h-tag v-for="item in list1" :key="item.id">
          {{ item.name }}
        </h-tag>
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex gap-2 p-2 " ref="el3">
        <h-tag v-for="item in list3" :key="item.id" :color="item.color">
          {{ item.name }}
        </h-tag>
      </div>
      <div class="text-gray-400">
        |
      </div>
      <div class="flex gap-2 p-2  w-screen" ref="el2">
        <h-tag v-for="item in list2" :key="item.id" :color="item.color" @contextmenu="handleRightClick(item, $event)">
          {{ item.name }}
        </h-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDraggable } from 'vue-draggable-plus'

const loading = ref(false);
const searchText = ref('');

const label_tree = [
  {
    title: '标签1',
    value: 1,
    children: [
      { title: '标签1-1', value: 11 },
    ],
  },
  { title: '标签2', value: 2 },
];

const items = computed(() => flattenTags(label_tree));

const flattenTags = (data, parentTitle = '') => {
  const result = [];
  data.forEach(item => {
    const currentTitle = parentTitle ? `${parentTitle}-${item.title}` : item.title;
    if (item.children && item.children.length > 0) {
      result.push(...flattenTags(item.children, currentTitle));
    } else {
      result.push(currentTitle);
    }
  });
  return result;
};
const onEnter = () => {
  console.log(123);
};

const list1 = ref([
  { name: '4444', id: '4' },
  { name: '5555', id: '5' },
  { name: '6666', id: '6' },
  { name: '7777', id: '7' },
])
const list2 = ref([
  { name: 'aaaa', id: 'a' },
  { name: 'bbbb', id: 'b' },
  { name: 'cccc', id: 'c' },
  { name: 'dddd', id: 'd' },
])

const list3 = ref([
  { id: '&', name: '&', color: 'blue', isSpecial: true },
  { id: '|', name: '|', color: 'green', isSpecial: true },
  { id: '!', name: '!', color: 'red', isSpecial: true },
  { id: '()', name: '()', color: 'black', isSpecial: true },
]);

const el1 = ref()
const el2 = ref()
const el3 = ref()

const handleRightClick = (item, event) => {
  event.preventDefault()

  list2.value = list2.value.filter(_item => _item.id != item.id)
  if (!item.isSpecial) {
    list1.value.push(item)
  }
  console.log('右键点击了:', item)

  // 在这里可以添加自定义的右键菜单显示逻辑
}

useDraggable(el1, list1, {
  animation: 250,
  ghostClass: 'ghost',
  group: {
    name: 'people',
    pull: true,
    put: ['people']
  },
  onUpdate: () => {
    console.log('更新 list1')
  },
  onAdd: (event) => {
    const newItem = list1.value[event.newIndex]
    if (newItem && newItem.isSpecial) {
      list1.value.splice(event.newIndex, 1) // 从 list1 中移除特殊元素
      // list3.value.splice(event.oldIndex, 0, newItem) // 将特殊元素移回 list3 原位置
      console.log('特殊元素不能拖拽到 list1')
    } else {
      console.log('添加到 list1')
    }
  },
  onRemove: () => {
    console.log('从 list1 移除')
  }
})

useDraggable(el2, list2, {
  animation: 250,
  ghostClass: 'ghost',
  group: {
    name: 'people',
    pull: true,
    put: ['people', 'operators']
  },
  onUpdate: () => {
    console.log('更新 list2')
  },
  onAdd: (event) => {
    console.log('添加到 list2', event)
    // const newItem = list2.value[event.newIndex]
    if (event.data.id == '()') {
      console.log(1)
      list2.value.splice(event.newIndex, 1) // 从 list2 中移除特殊元素
      // 添加单括号
      list2.value.splice(event.newIndex, 0, { id: '(', name: '(', isSpecial: true })
      list2.value.splice(event.newIndex + 1, 0, { id: ')', name: ')', isSpecial: true })
    }
  },
  onRemove: () => {
    console.log('从 list2 移除')
  }
})

useDraggable(el3, list3, {
  animation: 250,
  ghostClass: 'ghost',
  group: {
    name: 'operators',
    pull: 'clone',
    put: false
  },
  sort: false

})
</script>
