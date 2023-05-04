<template>
    <div class="centrar">
        <div class="card text-center ancho">
            <div class="card-body">
                <span class="span-title"> Register</span>
                <form action="" @submit.prevent="handleSubmit">
                    <span>
                        <input type="text" placeholder="Nombre" class="input-class" v-model.trim="name">
                    </span>
                    <span>
                        <input type="text" placeholder="Apellido" class="input-class" v-model.trim="lastName">
                    </span>
                    <span>
                        <select name="Rol" class="input-class" v-model.trim="rol">
                            <option value="estudiante">Estudiante</option>
                            <option value="docente">Docente</option>
                        </select>
                    </span>
                    <span>
                        <input type="email" placeholder="Email" class="input-class" v-model.trim="email">
                    </span>
                    <span>
                        <input type="password" placeholder="Contraseña" class="input-class" v-model.trim="password">
                    </span>
                    <span>
                       <button class="boton-class" @click="RegisterUser">Registrar</button>
                    </span>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useUserStore} from "@/store/User.js"


const useUser = useUserStore();

const name = ref();
const lastName = ref();
const email = ref();
const password = ref();
const rol = ref();    

const RegisterUser = async () =>{
    const imprmir = await useUser.registerUser(email.value, lastName.value, name.value, password.value, rol.value)

    console.log(email.value);
}

</script>

<style scoped>
    .ancho {
        width: 450px;
        height: 700px;
        top: 10%;

        background: #03A9F4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .centrar {
        margin-top: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100%;
    }

    .input-class{
        position: relative;
        width: 350px;
        height: 64px;
        margin: 10px 10px;

        background: #E1F5FE;
        border-radius: 15px;
        border: none;
    }

    .boton-class{
        position: relative;
        color: #E1F5FE;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-top: 10%;
        width: 270px;
        height: 64px;

        background: #0277BD;
        border-radius: 15px;
        border: none;
    }

    option{
        width: 300px;
        height: 64px;
        border-radius: 10px;
    } 

    select{
        color: #03A9F4;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        height: 64px;
        padding-left: 15px;
    }

    input{
        color: #03A9F4;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        padding-left: 15px;
    }

    input::placeholder{
        color: #03A9F4;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
    }

    input:focus {
        outline: none;
        color: #03A9F4;
    }

    .span-title{
        position: relative;
        width: 259px;
        height: 77px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        color: #E1F5FE;
    }

</style>