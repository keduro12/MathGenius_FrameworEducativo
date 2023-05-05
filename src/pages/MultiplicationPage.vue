<template>
    <div class="aaa">

        <ContentMultiplication v-for="(item, index) in multiplicar.slice(inicio, final)" 
        :title="item.title" 
        :body="item.body"
        :body_2="item.body_2"
        :url="item.url"
        :url_2="item.url_2"
        ></ContentMultiplication>

        <div v-if="final == 8">
            <QuizMultiplication></QuizMultiplication>
        </div>

        <div>
            <button class="next" v-on:click="siguiente" v-if="final != 8">Siguiente</button>
            <button class="back" v-on:click="atras">Atras</button>

        </div>
    </div>
</template>

<script setup>
import ContentMultiplication from "@/pages/ContentMultiplication.vue";
import Multiplicacion from "@/content/Modulos.js"
import QuizMultiplication from "@/components/QuizMultiplication.vue";

import {ref} from "vue"
import { useRouter } from "vue-router";

const multiplicar = Multiplicacion.Multiplicacion;

const router = useRouter();

    const inicio = ref(0);
    const final = ref(1);

    const siguiente = () => {

        inicio.value++;
        final.value++
        if (inicio.value == 8 && final.value == 9) {
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