<template>
    <div class="aaa">

        <ContentAddition v-for="(item, index) in sumar.slice(inicio, final)" 
        :title="item.title" 
        :body="item.body"
        :body_2="item.body_2"
        :url="item.url"
        ></ContentAddition>

        <div v-if="final == 7">
            <Quiz></Quiz>
        </div>
        <div>
            <button class="next" v-on:click="siguiente" v-if="final != 7">Siguiente</button>
            <button class="back" v-on:click="atras">Atras</button>

        </div>
    </div>
</template>

<script setup>
import ContentAddition from "@/pages/ContentAddition.vue";
import Quiz from "@/components/Quiz.vue";
import Suma from "@/content/Modulos.js"
import Imagenes from "@/content/imagenesSuma.js"

import {ref, reactive} from "vue"
import { useRouter } from "vue-router";

const sumar = Suma.Suma;
const imagenes = Imagenes.Imagenes;

console.log(imagenes)

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

    // const entrada = ref([]);
</script>

<style scoped>
/* .aaa{
    border: 1px solid red;
} */
</style>