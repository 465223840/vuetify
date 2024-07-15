<template>
  <div>
    <v-navigation-drawer :rail="rail" permanent width="360">
      <v-card density="compact" class="h-full">
        <div class="p-1 bg-[#FAF9FB]">
          <v-btn density="compact" variant="plain" prepend-icon="mdi-page-first">收起</v-btn>
        </div>
        <v-divider class="border-opacity-100" />
        <div class="p-2 h-full">
          <div class="text-right text-xs">
            <div>
              用户数
              <span class="text-[#2552BD] text-sm font-bold">
                9999
              </span>
              人
            </div>
          </div>
          <v-text-field variant="outlined" density="compact" prepend-inner-icon="mdi-magnify" class="bg-[#F2F5F6] "
            placeholder="请输入标签关键词或任意描述" hide-details>
          </v-text-field>
          <!-- <v-divider class="border-opacity-100" /> -->
          <!-- <v-list nav>
            <template v-for="(item, index) in items" :key="index">
              <v-list-group density="compact" border v-if="item.children && item.children.length > 0">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="item.text" />
                </template>
<LabelItem v-for="(c, i) in item.children || []" :value="c" />
<v-divider />
</v-list-group>
<LabelItem :value="item" v-else />
</template>
</v-list> -->
          <v-treeview :items="items" item-key="name" open-on-click density="compact">
            <!-- <template #item>
              00
            </template> -->
            <template #prepend="{ item }">
              <v-icon icon="$vuetify" size="x-small" color="red" />
            </template>
            <template #append="{ item }">
              <span class="text-sm mr-3">{{ item.count || 0 }}</span>
              <v-btn color="#3B5263" icon="mdi-close" size="small" variant="text" @click="() => onRemove(index)"
                density="compact" />
            </template>
            <!-- <v-treeview-item border density="compact" :title="item.title" v-for="(item, index) in items" :key="index"
              nav>
              <template #prepend>
                <v-icon icon="$vuetify" size="x-small" color="red" />
              </template>
              <template #append>
                <span class="text-sm mr-3">{{ item.count || 0 }}</span>
                <v-btn color="#3B5263" icon="mdi-close" size="small" variant="text" @click="() => onRemove(index)"
                  density="compact" />
              </template>

            </v-treeview-item> -->
            <!-- 123 -->
          </v-treeview>
        </div>
      </v-card>
    </v-navigation-drawer>
    <!-- <v-sheet :elevation="16" :height="200" :width="200" border rounded></v-sheet> -->
    123
  </div>
</template>


<script setup>
import LabelItem from './components/LabelItem.vue'
const rail = ref(false)


const onRemove = (index) => {
  console.log(index)
}

const items = ref([
  {
    id: 1,
    title: 'Vuetify Human Resources',
    children: [
      {
        id: 2,
        title: 'Core team',
        children: [
          {
            id: 201,
            title: 'John',
          },
          {
            id: 202,
            title: 'Kael',
          },
          {
            id: 203,
            title: 'Nekosaur',
          },
          {
            id: 204,
            title: 'Jacek',
          },
          {
            id: 205,
            title: 'Andrew',
          },
        ],
      },
      {
        id: 3,
        title: 'Administrators',
        children: [
          {
            id: 301,
            title: 'Mike',
          },
          {
            id: 302,
            title: 'Hunt',
          },
        ],
      },
      {
        id: 4,
        title: 'Contributors',
        children: [
          {
            id: 401,
            title: 'Phlow',
          },
          {
            id: 402,
            title: 'Brandon',
          },
          {
            id: 403,
            title: 'Sean',
          },
        ],
      },
    ],
  },
])
const open = ref([1, 2])
</script>
