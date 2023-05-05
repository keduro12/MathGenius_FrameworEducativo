<template>
    <div>
        <h1>Este es solo para Admin</h1>
    </div>
    <div>
            <button class="back aa" @click="userStore.finishSesion()">Salir</button>
        </div>
</template>

<script setup>
import {useUserStore} from "@/store/User.js"

const userStore = useUserStore();
</script>

<style  scoped>
.aa{
    width: 127px;
    right: 2%;
    top: 2%;
}
</style>