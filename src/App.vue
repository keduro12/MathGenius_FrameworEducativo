<script setup>
import Main from '@/components/Main.vue';
</script>

<template>

<div v-if="$route.name=='Login'">
    <router-view></router-view>
</div>


<div v-else-if="$route.name=='NotFound'">
    <router-view></router-view>
  </div>

<!-- <div v-else-if="$route.name=='NotFound'">
    <router-view></router-view>
</div> -->

<div v-else>
    <router-view></router-view>
</div>

</template>

<style scoped>

</style>
