<template>
    <div class="aaa">

        <ContentDivide v-for="(item, index) in dividir.slice(inicio, final)" 
        :title="item.title" 
        :body="item.body"
        :body_2="item.body_2"
        :url="item.url"
        :url_2="item.url_2"
        ></ContentDivide>

        <div v-if="final == 9">
            <QuizDivide></QuizDivide>
        </div>

        <div>
            <button class="next" v-on:click="siguiente" v-if="final != 9">Siguiente</button>
            <button class="back" v-on:click="atras">Atras</button>

        </div>
    </div>
</template>

<script setup>
import ContentDivide from "@/pages/ContentDivide.vue";
import Division from "@/content/Modulos.js"
import QuizDivide from "@/components/QuizDivide.vue";

import {ref} from "vue"
import { useRouter } from "vue-router";

const dividir = Division.Division;

const router = useRouter();

    const inicio = ref(0);
    const final = ref(1);

    const siguiente = () => {

        inicio.value++;
        final.value++
        if (inicio.value == 9 && final.value == 10) {
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