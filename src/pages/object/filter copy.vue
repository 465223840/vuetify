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
    <div class=" border mb-2 bg-white p-4">
      <div class=" border bg-[#F5FAFA]">
        <div class="flex gap-2 p-2 border-b-2">
          <h-input prefixIcon="mdi-magnify" suffixIcon="mdi-magnify" placeholder="请输入关键词..." class="w-120" />
          <div class="flex gap-2 items-center">
            <h-tag text="text" count="2">女士</h-tag>
            <h-tag text="text" count="3">女士</h-tag>
          </div>
          <h-select class="ml-auto"></h-select>
        </div>
        <v-divider />


        <div class="p-2 min-h-10 flex">
          <div class="flex gap-2 ">
            <h-tag :removable="false">&</h-tag>
            <h-tag :removable="false">|</h-tag>
            <h-tag :removable="false">!</h-tag>
            <h-tag :removable="false">()</h-tag>
          </div>
          <v-divider class="border-opacity-100" color="error" vertical></v-divider>

          <div class="ml-auto">
            <v-btn size="small" density="compact">清空</v-btn>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="p-1 text-xs">
        用户数
        <span class="text-[#2552BD] text-sm font-bold">
          9999
        </span>
        人
      </div>
      <h-tag>123</h-tag>
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
