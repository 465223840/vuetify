<template>
  <v-card flat>
    <!-- <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Find a Graphics Card
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider> -->
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="website">网站对象</v-tab>
      <v-tab value="imsi">IMSI对象</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="website">
          <ServicesTable/>
        </v-tabs-window-item>

        <v-tabs-window-item value="imsi">
          <ImsiTable />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>

  </v-card>
</template>
<script setup>
import ServicesTable from './ServicesTable.vue'
import ImsiTable from './ImsiTable.vue'

const tab = ref(null)


</script>
