<template>
    <div class="div-padre">
        <h1>{{props.title}}</h1>
        <p>{{props.body}}</p>
        <div class="imagen" v-if="props.url">
            <img :src="props.url">
        </div>
        <p>{{props.body_2}}</p>
        <div class="classvideo" v-if="props.url_2">
            <iframe width="50%" height="615" :src="props.url_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
    // defineProps(['title', 'body', 'body_2', 'url'])

    const props = defineProps({
        title: {
            type: String,
            required: false
        },
        body:{
            type: String,
            required: false
        },
        body_2:{
            type: String,
            required: false
        },
        url:{
            type: String,
            required: false,
            default: null
        },
        url_2:{
            type: String,
            required: false
        },

    })
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
        text-align: center;

        color: #000000;

        margin-left: 10%;
        margin-right: 10%;
        padding-top: 2%;
    }

</style>