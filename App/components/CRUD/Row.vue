<template>
    <tr>
        <td>{{ index }}</td>
        <td>{{ id }}</td>
        <td>
            <template v-if="updateMode">
                <input type="text" :ref="'txtValueUpdate-' + id" :value="value" />
            </template>
            <template v-else>
                {{ value }} 
            </template>
        </td>
        <td>
            <button v-on:click="toggleUpdate()" :class="'button' + ' ' + (updateMode ? 'secondary' : '')">
                <template v-if="updateMode">
                    Cacnel
                </template>
                <template v-else>
                    Update
                </template>
            </button>
            <button v-if="updateMode" class="button warning">
                Confirm
            </button>
            <button v-on:click="$emit('callOfDelete', id)" class="button alert">Delete</button>
            <button v-on:click="callOfToggleDetails" class="button success">Show details</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['index','id','value'],
        data() {
            return {
                updateMode: false,
                detailsMode: false
            }
        },
        methods: {
            toggleUpdate() {
                this.updateMode = !this.updateMode;
            },
            callOfToggleDetails() {
                this.$emit('callOfToggleDetails', this.id, this.detailsMode);
                this.detailsMode = !this.detailsMode;
            }

        }
    }
</script>

<style scoped>
    
</style>
