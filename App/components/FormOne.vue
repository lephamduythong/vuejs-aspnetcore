<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form header</h3>
                <p>Information about the form</p>
            </div>
            <div slot="form-fields">
                <h3>Form fields</h3>
                <input type="text" placeholder="Name" />
                <input type="password" placeholder="Password" />
            </div>
            <div slot="form-controls">
                <h3>Form controls</h3>
                <button v-on:click.prevent="handleLogin()" type="submit"> Login </button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import FormHelper from './FormHelper.vue';

export default {
    components: {
        'form-helper': FormHelper,
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
}

</script>

<style scoped>

</style>
