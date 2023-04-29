<template>
    <div class="centrar">
        <div class="card text-center ancho">
            <div class="card-body">
                <span class="span-title">Iniciar Sesión</span>
                <form action="">
                    <span>
                        <input type="email" placeholder="Correo" class="input-class separar" v-model.trim="formData.email">
                        <span class="letra" v-for="error in v$.email.$errors">{{ error.$message }}</span>
                    </span>
                    <span>
                        <input type="password" placeholder="Contraseña" class="input-class" v-model.trim="formData.password">
                        <span class="letra" v-for="error in v$.password.$errors">{{ error.$message }}</span>
                    </span>                   
                </form>
                <div class="contenedor-boton">
                    <button @click="handleSubmit()" class="boton-class">Ingresar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import Swal from "sweetalert2"
  import {useUserStore} from "@/store/User.js"
  import { useVuelidate } from '@vuelidate/core'
  import { reactive } from 'vue'
  import {required ,helpers ,minLength ,email } from '@vuelidate/validators'



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

  const userStore = useUserStore();

  const formData = reactive({
    email: "",
    password: ""
  });


  const rules = {
    email: {
      required: helpers.withMessage("Debe ingresar un email", required),
      email: helpers.withMessage("Debe ingresar un Email Valido", email)
    },
    password: {
      required: helpers.withMessage("Debe ingresar la contraseña", required),
      minLength: helpers.withMessage("La contraseña debe contener mas de 5 caracteres", minLength(6))
    }
  };

  const v$ = useVuelidate(rules, formData, {
    $lazy: true
  });



  const handleSubmit = async () => {

    const result = await v$.value.$validate();

    if (result) {

      const error = await userStore.startSesion(formData.email, formData.password)

      if (!error) {
        Toast.fire({
          position: 'bottom',
          icon: 'success',
          title: "Sesión Iniciada",
          showConfirmButton: false,
          timer: 3000,
        })

      } else {
        if (error === "auth/wrong-password") {
          Toast.fire({
            position: 'bottom',
            icon: 'error',
            title: "Contraseña incorrecta",
            showConfirmButton: false,
            timer: 3000,
          })
        }

        if (error == "auth/user-not-found") {
          Toast.fire({
            position: 'bottom',
            icon: 'error',
            title: "Este usuario no se encuentra registrado",
            showConfirmButton: false,
            timer: 3000,
          })
        }
      }

    }
  }
</script>

<style scoped>
.ancho {
    width: 450px;
    height: 700px;

    background: #03A9F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

.centrar {

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.input-class{
    position: relative;
    width: 350px;
    height: 64px;
    margin: 20px 10px;

    background: #E1F5FE;
    border-radius: 15px;
    border: none;
}

.separar{
    margin-top: 80px;
}

.contenedor-boton{
    position: relative;
    text-align: center;
    /* border: 1px solid red; */
    height: 40vh;
}


.boton-class{
    position: absolute;
    color: #E1F5FE;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-top: 10%;
    width: 270px;
    height: 64px;
    left: 50%;
    bottom: 45%;
    transform: translate(-50%, 50%);

    background: #0277BD;
    border-radius: 15px;
    border: none;
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

.letra {
    display: flex;
    text-align: center;
    justify-content: center;
    color: red;
    opacity: 50%;
    margin-top: 5px;
}
</style>