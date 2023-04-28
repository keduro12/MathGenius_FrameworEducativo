<template>
    <h1>Contenido del curso</h1>
    <div class="div-grande">
        <div class="centrar">

            <div class="grid">
                <div class="div-module"></div>
                <div class="div-module"></div>
                <div class="div-module"></div>
                <div class="div-module"></div>
                <div class="div-module"></div>
                <div class="div-module"></div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h1{
    text-align: center;
    color: #03A9F4;
    font-family: 'Luckiest Guy', cursive;
    font-weight: 700;
    padding-top: 30px;
    /* padding-bottom: 10px; */
}
.div-grande{
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
    background: #03A9F4;
    width: 300px;
    height: 250px;
    /* margin-right: 4vh;
    margin-left: 4vh;
    margin-top: 10%;
    margin-bottom: 10%; */
    border-radius: 10px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 10px;
}
</style>