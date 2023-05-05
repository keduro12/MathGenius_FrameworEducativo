<template>
    <div>
        <h1>Contenido del curso</h1>
        <div class="div-grande">
            <div class="centrar">

                <div class="grid">
                    <router-link to="/addition"
                        v-bind:style="{'text-decoration' : 'none'} ">
                        <div class="div-module">
                            <p>Suma</p>
                            <img src="@/assets/sum.jpg" alt="suma">
                        </div>
                    </router-link>
                    <router-link to="/subtraction" v-bind:style="{'text-decoration' : 'none'}">
                        <div class="div-module">
                            <p>Resta</p>
                            <img src="@/assets/rest.jpg" alt="resta">
                        </div>
                    </router-link>
                    <router-link to="/multiplication" v-bind:style="{'text-decoration' : 'none'}">
                        <div class="div-module">
                            <p>Multiplicación</p>
                            <img src="@/assets/multi1.jpg" alt="multiplicación">
                        </div>
                    </router-link>
                    <router-link to="/divide" v-bind:style="{'text-decoration' : 'none'}">
                        <div class="div-module">
                            <p>División</p>
                            <img src="@/assets/division.jpg" alt="división">
                        </div>
                    </router-link>
                </div>
            </div>
            <button class="back" v-on:click="atras">Inicio</button>
        </div>
    </div>
</template>

<script setup>
    import {
        onMounted
    } from "vue"
    import {
        useRouter
    } from "vue-router";
    import {
        useUserStore
    } from "@/store/User.js"

    const use = useUserStore()



    const router = useRouter();

    onMounted(() => {
        console.log(use.roles + "hOLA ")
    })

    const atras = () => {
        router.push('/');

    }
</script>

<style scoped>
    img {
        width: 250px;
        height: 180px;
        display: block;
        margin: auto;
        border-radius: 10px;
    }

    p {
        font-family: 'Lilita One';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #03A9F4;
        /* padding-top: 20px;
    margin-bottom: 40px; */
    }

    h1 {
        text-align: center;
        color: #03A9F4;
        font-family: 'Luckiest Guy', cursive;
        font-weight: 700;
        padding-top: 30px;
        /* padding-bottom: 10px; */
    }

    .div-grande {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centrar {
        width: 90%;
        height: 800px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .div-module {
        background: #FFFFFF;
        width: 300px;
        height: 250px;
        /* margin-right: 4vh;
    margin-left: 4vh;
    margin-top: 10%;
    margin-bottom: 10%; */
        border-radius: 10px;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        margin-bottom: 10px;
    }
</style>