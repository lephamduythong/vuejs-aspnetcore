<template>
    <header>
        <p>{{ copyright }} - {{ title }}</p>
    </header>
</template>

<script>
import {bus} from '../main';

export default {
    props: {
        title: {
            type: String,
        }
    },
    data() {
        return {
            copyright: `Copyright 2017`,
        }
    },
    created() {
        bus.$on('titleChanged',(data) => {
            this.title = data;
        });
    }
}
</script>

<style scoped>
header {
    background: #222;
    padding: 5px;
}

p {
    color: lightgreen;
    text-align: center;
}
</style>