<template>
    <div>

        <ContentAddition v-for="(item, index) in sumar.slice(inicio, final)" 
        :title="item.title" 
        :body="item.body"
        :body_2="item.body_2"
        :url="item.url"
        ></ContentAddition>
        <!-- <h1>Suma</h1> -->
        <!-- {{ sumar }} -->
        <!-- <div v-for="item in sumar">
            <div>
                {{ item }}
            </div>
        </div> -->

        <div>
            <button class="next" v-on:click="siguiente">Siguiente</button>
            <button class="back" v-on:click="atras">Atras</button>
            <!-- <button type="button" class="nada">
                <img src="@/assets/derecha.png" alt="">
            </button>

            <img src="@/assets/derecha.png" alt="" @click="atras" class="nada"> -->

        </div>
    </div>
</template>

<script setup>
import ContentAddition from "@/pages/ContentAddition.vue";
import Suma from "@/content/Modulos.js"

import {ref} from "vue"
import { useRouter } from "vue-router";

const sumar = Suma.Suma;

const router = useRouter();

    const inicio = ref(0);
    const final = ref(1);

    const siguiente = () => {

        inicio.value++;
        final.value++
        if (inicio.value == 13 && final.value == 14) {
            router.push('/main');
        }
    }

    const atras = () => {
        inicio.value--;
        final.value--;

        if (inicio.value == -1 && final.value == 0) {
            router.push('/knowbody');
        }
    }
</script>

<style scoped>

.nada{
    background: #81d4fa;
    width: 80px;
    
    /* border: none */
}

.nada:hover{
    background: white;
}
</style>