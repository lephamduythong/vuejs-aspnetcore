<template>
    <div id="app-crud">
        <h1>Table CRUD test</h1>
        <button class="button" v-on:click="toggleInsert">
            <template v-if="insertMode">
                Hide
            </template>
            <template v-else>
                Insert
            </template>
        </button>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
            <form v-if="insertMode">  
                <input type="text" ref="txtValue" />
                <input v-on:click.prevent="send()" class="button" type="submit" value="Send" />
            </form>
        </transition>
        <br />
        <table class="hover unstriped">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Id</td>
                    <td>Value</td>
                    <td></td>
                </tr>
            </thead>
            <transition-group enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" tag="tbody">
                <template v-for="(item,index) in list">
                    <app-crud-row 
                        :key="item.id"
                        :index="index"
                        v-bind:id="item.id"
                        v-bind:value="item.value"

                        v-on:callOfDelete="confirmDelete"
                        v-on:callOfToggleDetails="toggleDetails"
                    />
                    <tr style="display: none" class="details-box" :id="'details-' + item.id" :key="item.id">
                        <td colspan="4">Details</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import RowCRUD from './Row.vue'

    export default {
        components: {
            'app-crud-row': RowCRUD
        },
        data() {
            return {
                insertMode: false,
                
                list: [
                    {id: 111, value: 'A'},
                    {id: 222, value: 'B'},
                    {id: 333, value: 'C'},
                    {id: 444, value: 'D'},
                ]
            }
        },
        methods: {
            send() {
                let newId = Math.floor(Math.random() * 1000) + 1;
                let newData = {
                    id: newId,
                    value: this.$refs.txtValue.value,
                }   
                this.list.unshift(newData);
            },
            confirmDelete(id) {
                // let newData = this.list.slice();
                this.list = this.list.filter((item,index) => {
                    return item.id !== id
                });
            },
            toggleDetails(id, detailsMode) {
                if (detailsMode) {
                    $('#details-' + id).fadeOut(200);
                } else {
                    $('#details-' + id).fadeIn(200);
                }
            },
            toggleInsert() {
                this.insertMode = !this.insertMode;
            }
        }
    }
</script>

<style scoped>
    #app-crud {
        padding: 15px;
    }
</style>
