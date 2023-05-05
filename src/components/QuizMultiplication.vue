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
                            <img src="@/assets/multiplicacion/multi_1.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_1">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_2.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_2">
                            </span>
                        </div>
    

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_3.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_3">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_4.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_4">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_5.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_5"> 
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_6.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_6">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_7.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_7">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_8.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_8">
                            </span>
                        </div>
                        <hr>

                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_9.png" alt="">
                            <span>
                                <input type="number" class="input-class" v-model.trim="entrada_9">
                            </span>
                        </div>
                        <hr>
                        <div class="contenedor">
                            <img src="@/assets/multiplicacion/multi_10.png" alt="">
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


// const props= defineProps({
//     entrada: {
//         type: Array,
//         defaul: () => {},
//     },
//     imagenes:{
//         type: Array,
//         defaul: () => {},
//     }
// })

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

    // const ramdom = ref()
    // const aleatorio = ref([])



    // for (let index = 0; index < 10; index++) {

    //     ramdom.value = Math.floor(Math.random() * (0 - 1000) + 1000);
    //     aleatorio.value.push(ramdom.value)
    //     console.log(aleatorio.value)
    
    // }

    // console.log(aleatorio.value + "esto e slo aleatormultiplicacion

    const multiplicacion_1 = 1651;
    const multiplicacion_2 = 37145;
    const multiplicacion_3 = 24708;
    const multiplicacion_4 = 19656;
    const multiplicacion_5 = 20541;
    const multiplicacion_6 = 12782;
    const multiplicacion_7 = 11193;
    const multiplicacion_8 = 5445;
    const multiplicacion_9 = 30932;
    const multiplicacion_10 = 55876;

    const validar = () =>{
        if(entrada_1.value == multiplicacion_1 && entrada_2.value == multiplicacion_2 &&  entrada_3.value == multiplicacion_3 && entrada_4.value == multiplicacion_4 && entrada_5.value == multiplicacion_5 && entrada_6.value == multiplicacion_6 && entrada_7.value == multiplicacion_7 && entrada_8.value == multiplicacion_8 && entrada_9.value == multiplicacion_9 && entrada_10.value == multiplicacion_10){
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