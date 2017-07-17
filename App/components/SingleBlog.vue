<template>
    <div id="single-blog">
        <template v-if="loading">
            <h1>Loading...</h1>
        </template>
        <template v-else>
            <h1>{{ blog.title }}</h1>
            <article>{{ blog.body }}</article>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true,
                
                id: this.$route.params.id,
                blog: ''
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then((res) => {
                this.blog = res.body;
                this.loading = false;
            });
        }
    }
</script>

<style scoped>
    
</style>
