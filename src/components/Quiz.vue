<template>
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" >
        Launch demo modal
    </button> -->
    <button class="quiz" data-bs-toggle="modal" data-bs-target="#exampleModal">Quiz</button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1  id="exampleModalLabel">Prueba tus conocimientos</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="centrar">
                        <div class="contenedor">
                            <img src="@/assets/suma/suma_1.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_1">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_2.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_2">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_3.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_3">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_4.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_4">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_5.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_5"> 
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_6.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_6">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_7.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_7">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_8.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_8">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/suma/suma_9.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_9">
                            </span>
                        </div>
                        <hr>
                        <div class="contenedor">
                            <img src="@/assets/suma/suma_10.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_10">
                            </span>
                        </div>
                        <hr>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="validar()">Validar Respuestas</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });


    const entrada_1 = ref()
    const entrada_2 = ref()
    const entrada_3 = ref()
    const entrada_4 = ref()
    const entrada_5 = ref()
    const entrada_6 = ref()
    const entrada_7 = ref()
    const entrada_8 = ref()
    const entrada_9 = ref()
    const entrada_10 = ref()

    const suma_1 = 645;
    const suma_2 = 1306;
    const suma_3 = 933;
    const suma_4 = 407;
    const suma_5 = 775;
    const suma_6 = 296;
    const suma_7 = 858;
    const suma_8 = 786;
    const suma_9 = 969;
    const suma_10 = 361;


    const validar = () =>{
        if(entrada_1.value == suma_1 && entrada_2.value == suma_2 &&  entrada_3.value == suma_3 && entrada_4.value == suma_4 && entrada_5.value == suma_5 && entrada_6.value == suma_6 && entrada_7.value == suma_7 && entrada_8.value == suma_8 && entrada_9.value == suma_9 && entrada_10.value == suma_10){
            Toast.fire({
                position: 'bottom',
                icon: 'success',
                title: "Haz realizado un muy buen trabajo, !Felicitaciones¡",
                showConfirmButton: false,
                timer: 3000,
            })
        }else{
            Toast.fire({
                position: 'bottom',
                icon: 'error',
                title: "Una o unas de tus sumas estan incorrectas",
                showConfirmButton: false,
                timer: 3000,
            })
        }
    }
</script>

<style scoped>
h1{
    text-align: center;
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #03A9F4;
}
    img {
        width: 320px;
        height: 150px;
        margin-bottom: 25px;
    }

    .centrar {
        text-align: center;
    }

.contenedor{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input{
    margin-bottom: 25px;
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
.input-class{
    position: relative;
    width: 250px;
    height: 54px;
    margin: 10px 10px;

    background: #E1F5FE;
    border-radius: 15px;
    border: none;
}
</style>