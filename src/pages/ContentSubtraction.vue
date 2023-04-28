<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{body}}</p>
        <p>{{body_2}}</p>
        <div class="imagen">
            <img :src="url">
        </div>
        
    </div>
</template>

<script setup>
    defineProps(['title', 'body', 'body_2', 'url'])
</script>

<style scoped>
h1 {
        font-family: 'Luckiest Guy';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 48px;
        /* identical to box height */

        /* display: flex; */
        align-items: center;
        text-align: center;

        color: #A13F3F;

        padding-top: 3%;
    }

    p {
        font-family: 'Lilita One';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 46px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;

        margin-left: 10%;
        margin-right: 10%;
        padding-top: 5%;
    }

    img {
        width: 30%;
        height: 350px;
        text-align: center;
        padding-top: 2%;
    }

    .imagen {
        text-align: center;
    }
</style>