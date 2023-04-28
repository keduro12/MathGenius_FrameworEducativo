<template>
    <div>
      <div class="content">
        <h1>Bienvenido a MathGeniu</h1><span>
          <h3>¡La forma mas divertida, efectiva y gratis de aprender sobre Matematicas 3°!</h3>
        </span>
        <div class="myboton">
          <router-link to="/main" :style="{'text-decoration' : 'none','height':'81px'}"><button type="button"
              class="beginBoton">EMPIEZA AHORA</button>
          </router-link>
  
          <router-link to="/rankin" :style="{'text-decoration' : 'none', 'height':'0px'}"><button type="button"
              class="beginBoton boton-space">CALIFICACIONES</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script setup>

</script>

<style scoped>
html,body {
    margin: 0px;
    height: 100%;
}

h1 {
    color: #03A9F4;
    padding: 8rem 0px;
    font-family: 'Luckiest Guy', cursive;
    font-size: 48px;
    text-align: center;
}

h3 {
    color: #E1F5FE;
    padding: 3rem 0% 10rem 0%;
    font-family: 'Lilita One', cursive;
    font-size: 40px;
    text-align: center;
}

button {

    font-family: 'Lilita One';
    background: #03A9F4;
    border-bottom: 6px solid #01579b;
    border-radius: 15px;
    border-right-style: none;
    border-left-style: none;
    border-top-style: none;
    color: #E1F5FE;
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    width: 403px;
    height: 81px;
}

.myboton {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.boton-space {
    margin-top: 30px;

}

.beginBoton:hover {
    background: #01579b;
    border-bottom: 6px solid #03A9F4;
}

.beginBoton:active {
    background: #03A9F4;
    border-bottom: 6px solid #01579b;
}
</style>