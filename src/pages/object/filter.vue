<template>
  <div>
    <v-navigation-drawer :rail="rail" permanent width="560">
      <v-card density="compact" class="h-full">
        <div class="absolute w-full p-1 bg-[#FAF9FB]  border-y-2 ">
          <v-btn density="compact" variant="plain" prepend-icon="mdi-page-first">收起</v-btn>
        </div>
        <div class="p-2 mt-8">
          <div class="p-1 text-right text-xs">
            用户数
            <span class="text-[#2552BD] text-sm font-bold">
              9999
            </span>
            人
          </div>

          <v-text-field variant="outlined" density="compact" prepend-inner-icon="mdi-magnify" class="bg-[#F2F5F6] "
            placeholder="请输入标签关键词或任意描述" hide-details>
          </v-text-field>

          <!-- <LabelTree v-model:items="items" /> -->
          <LabelTree :items="treeItems" @update:items="updateTreeItems" />
        </div>
      </v-card>
    </v-navigation-drawer>
    <!-- <v-sheet :elevation="16" :height="200" :width="200" border rounded></v-sheet> -->
    123
  </div>
</template>


<script setup>
import LabelTree from './components/Filter/LabelTree.vue'
const rail = ref(false)

const onRemove = (index) => {
  console.log(index)
}

const updateTreeItems = (newItems) => {
  treeItems.value = newItems;
};

const treeItems = ref([
  {
    id: 1,
    title: 'Vuetify Human Resources',
    type: '1',
    children: [
      {
        id: 2,
        title: 'Core team',
        type: '1',
        children: [
          {
            id: 201,
            type: '2',
            title: 'John',
          },
          {
            id: 202,
            type: '2',
            title: 'Kael',
          },
          {
            id: 203,
            type: '2',
            title: 'Nekosaur',
          },
          {
            id: 204,
            type: '2',
            title: 'Jacek',
          },
          {
            id: 205,
            type: '3',
            title: 'Andrew',
          },
        ],
      },
      {
        id: 3,
        type: '1',
        title: 'Administrators',
        children: [
          {
            id: 301,
            type: '',
            title: 'Mike',
          },
          {
            id: 302,
            type: '3',
            title: 'Hunt',
          },
        ],
      },
      {
        id: 4,
        type: '1',
        title: 'Contributors',
        children: [
          {
            id: 401,
            type: '1',
            title: 'Phlow',
          },
          {
            id: 402,
            type: '1',
            title: 'Brandon',
          },
          {
            id: 403,
            type: '1',
            title: 'Sean',
          },
        ],
      },
    ],
  },
])
</script>
