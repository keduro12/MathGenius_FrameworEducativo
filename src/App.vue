<script setup>
import Main from '@/components/Main.vue';
import Register from '@/pages/Register.vue';
import DividePage from '@/pages/DividePage.vue';

</script>

<template>


<!-- <div v-if="use.userData.rol == 'docente'">
    <Register></Register>
</div> -->

<!-- <div v-if="use.userData.rol == 'estudiante'">
    <DividePage></DividePage>
</div> -->

<div v-if="$route.name=='Login'">
    <router-view></router-view>
</div>


<div v-else-if="$route.name=='NoFound'">
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
