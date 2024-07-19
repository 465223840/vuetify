<template>
  <div class="h-full p-2 bg-#F3F5F6">
    <!-- <v-navigation-drawer permanent width="360">
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
          <LabelTree :items="treeItems" @update:items="updateTreeItems" />
        </div>
      </v-card>
    </v-navigation-drawer> -->
    <!-- <v-sheet :elevation="16" :height="200" :width="200" border rounded></v-sheet> -->
    <div class="h-40 border mb-2 bg-white p-4">
      <div class=" border bg-[#F5FAFA]">
        <div class="flex gap-2 p-2">
          <div class="bg-[#F3F5F6] border rounded-md relative">
            <v-icon icon="mdi-magnify" />
            <input type="text" class="outline-none" placeholder="请输入关键词..." />
            <div class="absolute right-0 top-0">aa</div>
          </div>
          <div>label</div>
          <div>btn</div>
        </div>
        <div class="flex">
          <div>ex</div>
          <div class="self-end">btn</div>
        </div>
      </div>
    </div>
    <div class="h-full bg-#F3F5F6">
      <CardList />
    </div>
  </div>
</template>

<script setup>
import LabelTree from './components/Filter/LabelTree.vue'
import CardList from './components/Filter/CardList.vue'

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
