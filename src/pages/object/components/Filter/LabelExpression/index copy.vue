<template>
  <div class="border bg-[#F5FAFA] ">
    <div class="flex gap-2 p-3 border-b-2">
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

      <!-- <div class="flex gap-2 items-center w-3/4 bg-red">
        <VueDraggable v-model="cacheTags" :group="{ name: 'items', pull: 'clone', put: false }" :clone="cloneItem">
          <template #item="{ element }">
            <h-tag :draggable="true">
              {{ element.text }}
            </h-tag>
          </template>
        </VueDraggable>
        <VueDraggable ref="el" v-model="cacheTags" class="flex gap-2">
          <h-tag v-for="item in cacheTags" :key="item.id">
            {{ item.text }}
          </h-tag>
        </VueDraggable>
      </div> -->
      <div class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto" ref="el1">
        <div v-for="item in cacheTags" :key="item.id" class="cursor-move h-30 bg-gray-500/5 rounded p-3">
          {{ item.name }}
        </div>
      </div>
      <section class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto" ref="el2">
        <div v-for="item in operatorTags" :key="item.id" class="cursor-move h-30 bg-gray-500/5 rounded p-3">
          {{ item.name }}
        </div>
      </section>
    </div>

    <div class="p-3 relative">
      <div class="flex flex-wrap mr-20">
        <VueDraggable v-model="operatorTags" :group="{ name: 'tags', pull: 'clone', put: false }" @change="log">
          <template #item="{ element }">
            <transition name="fade">
              <h-tag :color="element.color">
                {{ element.text }}
              </h-tag>
            </transition>
          </template>
        </VueDraggable>
        <div class="mx-4">|</div>
        <div class="flex gap-2 items-center">
          <VueDraggable v-model="calcTags" :group="{ name: 'tags' }" @change="log">
            <template #item="{ element }">
              <transition name="fade">
                <v-chip>
                  {{ element.text }}
                </v-chip>
              </transition>
            </template>
          </VueDraggable>
        </div>
      </div>
      <div class="absolute right-2 top-2">
        <v-btn size="small" @click="clearAll">清空</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import { VueDraggable, useDraggable } from 'vue-draggable-plus';

const operatorTags = ref([
  { id: 1, name: '&', color: 'blue' },
  { id: 2, name: '|', color: 'green' },
  { id: 3, name: '!', color: 'red' },
  { id: 4, name: '()', color: 'black' },
]);

const props = defineProps({
  calcTags: {
    type: Array,
    default: () => [],
  },
  cacheTags: {
    type: Array,
    default: () => [],
  },
});

const cacheTags = ref(props.cacheTags)
const calcTags = ref(props.calcTags)

const loading = ref(false);
const searchText = ref('');

const el1 = ref()
const el2 = ref()

useDraggable(el1, cacheTags, {
  animation: 150,
  ghostClass: 'ghost',
  group: 'people',
  onUpdate: () => {
    console.log('update list1')
  },
  onAdd: () => {
    console.log('add list1')
  },
  remove: () => {
    console.log('remove list1')
  }
})

useDraggable(el2, operatorTags, {
  animation: 150,
  ghostClass: 'ghost',
  group: 'people',
  onUpdate: () => {
    console.log('update list2')
  },
  onAdd: () => {
    console.log('add list2')
  },
  remove: () => {
    console.log('remove list2')
  }
})



const onEnter = () => {
  console.log(123);
};

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

const log = evt => {
  console.log(evt);
};

const cloneItem = item => {
  return { ...item };
};

const clearAll = () => {
  props.calcTags.splice(0, props.calcTags.length);
  operatorTags.value.splice(0, operatorTags.value.length);
};
</script>

<style scoped>
.dragArea {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

:deep(.v-field__input) {
  /* min-height: auto; */
}
</style>
