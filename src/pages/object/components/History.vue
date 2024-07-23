<template>
  <div class="search-history" v-show="items.length > 0">
    <el-row class="mt-2.5" justify="space-between" align="middle">
      搜索历史
      <el-button
        type="danger"
        link
        :icon="Delete"
      >
        清空
      </el-button>
    </el-row>
    <div class="history-list">
      <ul>
        <li
          class="item"
          v-for="(item, i) in items"
          :key="i"
          @click="()=>onClick(item.type,item.text)"
          >
          {{ item.type }} ：{{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import {
  Delete
} from '@element-plus/icons-vue'
const emit = defineEmits(['click'])

const items = [
  { type: '小程序', text: 'My Files', icon: 'mdi-close' },
  { type: '应用', text: 'Shared with me', icon: 'mdi-close' },
  { type: '网站', text: 'Starred', icon: 'mdi-close' },
  { type: 'IMSI', text: 'Recent', icon: 'mdi-close' },
  { type: '小程序', text: 'Offline', icon: 'mdi-close' },
  { type: '全部', text: 'Uploads', icon: 'mdi-close' },
  { type: 'IMSI', text: 'Backups', icon: 'mdi-close' },
]

const sorted_items = items.sort((a, b) => a.type.localeCompare(b.type));

const onClick = (type,keywords)=> {
  emit('click', type,keywords)
}

const color = (type) => {
  switch (type) {
    case 'IMSI':
      return 'primary'
    case '应用':
      return 'orange'
    case '小程序':
      return 'green'
    case '网站':
      return 'purple'
    default:
      return '全部'
  }
}
</script>

<style lang="scss" scoped>
.search-history {
  font-size: 16px;
  .el-button {
    font-size: 16px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .item {
      height: 28px;
      line-height: 28px;
      color: #616b7a;
      padding: 0 18px;
      background-color: rgba(#f6f7f9, .5);
      border-radius: 15px;
      margin-right: 10px;
      margin-top: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f6f7f9;
      }
    }
  }
}
</style>
