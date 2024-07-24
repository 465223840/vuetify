<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card>
        <el-descriptions title="基本信息" :column="1" border>
          <el-descriptions-item label="覆盖人数" align="right" label-align="left">kooriookami</el-descriptions-item>
          <el-descriptions-item label="覆盖率" align="right" label-align="left">18100000000</el-descriptions-item>
          <el-descriptions-item label="总使用次数" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-divider></el-divider>
          <el-descriptions-item label="更新时间" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-descriptions-item label="更新方式" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-divider></el-divider>
          <el-descriptions-item label="创建时间" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-descriptions-item label="创建人" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-descriptions-item label="标签类型" align="right" label-align="left">Suzhou</el-descriptions-item>
          <el-descriptions-item label="创建方式" align="right" label-align="left">Suzhou</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>标签历史详情</span>
            <el-date-picker
              v-model="historyRange"
              type="daterange"
              unlink-panels
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="shortcuts"
              style="width: 260px; float: right"
            />
          </div>
        </template>
        <bar :xAxisData="barData.xAxisData" :seriesData="barData.seriesData" />
      </el-card>
    </el-col>
  </el-row>

</template>

<script setup>
import bar from '@/components/EChart/Bar.vue';

const label_set = ref('structure')
const form = reactive({
})
const historyRange = ref('')

const barData = {
    title: '标签历史详情',
    seriesData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    xAxisData: ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff', 'gggggg', 'hhhhhh', 'iiiiii', 'jjjjjj', 'kkkkkk', 'llllll', 'mmmmmm', 'nnnnnn', 'oooooo', 'pppppp', 'qqqqqq', 'rrrrrr', 'ssssss']
  }

const shortcuts = [
  {
    text: '上周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '前一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '前三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

</script>

<style lang="scss" scoped></style>
