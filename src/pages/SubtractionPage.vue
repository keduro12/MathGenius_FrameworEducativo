<template>
    <div class="aaa">

        <ContentSubtraction v-for="(item, index) in restar.slice(inicio, final)" 
        :title="item.title" 
        :body="item.body"
        :body_2="item.body_2"
        :url="item.url"
        ></ContentSubtraction>

        <div>
            <button class="next" v-on:click="siguiente">Siguiente</button>
            <button class="back" v-on:click="atras">Atras</button>

        </div>
    </div>
</template>

<script setup>
import ContentSubtraction from "@/pages/ContentSubtraction.vue";
import Resta from "@/content/Modulos.js"

import {ref} from "vue"
import { useRouter } from "vue-router";

const restar = Resta.Resta;

const router = useRouter();

    const inicio = ref(0);
    const final = ref(1);

    const siguiente = () => {

        inicio.value++;
        final.value++
        if (inicio.value == 7 && final.value == 8) {
            router.push('/module');
        }
    }

    const atras = () => {
        inicio.value--;
        final.value--;

        if (inicio.value == -1 && final.value == 0) {
            router.push('/module');
        }
    }
</script>

<style scoped>
/* .aaa{
    border: 1px solid red;
} */
</style>