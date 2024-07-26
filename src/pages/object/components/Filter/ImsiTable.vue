<template>
  <v-data-table :headers="headers" :items="items" show-select item-value="name" density="comfortable"
    :header-props="{ color: 'red' }">
    <template #[`column.header`]="{ header }">
      <th class="custom-header">
        {{ header.text }}
      </th>
    </template>
    <template #item.threads="{ item }">
      <div class="flex gap-2">
        <v-chip :color="item.stock ? 'primary' : 'red'" text="涉毒" size="small" />
        <v-chip color="primary" text="藏族" size="small" />
      </div>
    </template>
  </v-data-table>
</template>
<script setup>
const props = defineProps(['headers'])

const items = [
  {
    name: 'Intel Core i9-11900K',
    cores: 8,
    threads: 16,
    baseClock: '3.5 GHz',
    boostClock: '5.3 GHz',
    tdp: '125W',
  },
  {
    name: 'AMD Ryzen 9 5950X',
    cores: 16,
    threads: 32,
    baseClock: '3.4 GHz',
    boostClock: '4.9 GHz',
    tdp: '105W',
  },
  {
    name: 'Intel Core i7-10700K',
    cores: 8,
    threads: 16,
    baseClock: '3.8 GHz',
    boostClock: '5.1 GHz',
    tdp: '125W',
  },
  {
    name: 'AMD Ryzen 5 5600X',
    cores: 6,
    threads: 12,
    baseClock: '3.7 GHz',
    boostClock: '4.6 GHz',
    tdp: '65W',
  },
  {
    name: 'Intel Core i5-10600K',
    cores: 6,
    threads: 12,
    baseClock: '4.1 GHz',
    boostClock: '4.8 GHz',
    tdp: '125W',
  },
  {
    name: 'AMD Ryzen 7 5800X',
    cores: 8,
    threads: 16,
    baseClock: '3.8 GHz',
    boostClock: '4.7 GHz',
    tdp: '105W',
  },
  {
    name: 'Intel Core i3-10100',
    cores: 4,
    threads: 8,
    baseClock: '3.6 GHz',
    boostClock: '4.3 GHz',
    tdp: '65W',
  },
  {
    name: 'AMD Ryzen 3 3300X',
    cores: 4,
    threads: 8,
    baseClock: '3.8 GHz',
    boostClock: '4.3 GHz',
    tdp: '65W',
  },
  {
    name: 'Intel Pentium Gold G6400',
    cores: 2,
    threads: 4,
    baseClock: '4.0 GHz',
    tdp: '58W',
  },
  {
    name: 'AMD Athlon 3000G',
    cores: 2,
    threads: 4,
    baseClock: '3.5 GHz',
    tdp: '35W',
  },
]


</script>

<style scoped>
.custom-header {
  color: #ff0000;
  /* 红色字体 */
}
</style>
