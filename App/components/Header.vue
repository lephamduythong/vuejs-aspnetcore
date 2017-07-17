<template>
    <header>
        <!-- <h1 v-on:click="changeTitle">{{ title }}</h1> -->
        <nav-links></nav-links>
    </header>
</template>

<script>
    import {bus} from '../main';
    import NavLinks from './NavLinks.vue';

    export default {
        components: {
            'nav-links': NavLinks 
        },
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            changeTitle: function() {
                // Footer's title will not change
                // this.title = "Change cmnr!!";

                // Event: child to parent
                this.$emit('changeTitle', 'Change cmnr!!');
                
                // The event bus: avoid
                // this.title = "CLGT!!";
                // bus.$emit('titleChanged','CLGT!!');
            }
        }
    }
</script>

<style>
    .router-link-active {
        background: green;
    }
</style>
