<template> 
    <div v-theme:style1.clgt="'wide'"  id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h2 v-rainbow>{{ blog.title }}</h2>
            </router-link>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
    import searchMixin from '../mixins/searchMixin';
    
    export default {
        data() {
            return {
                theme: 'narrow',
                blogs: [],
                search: ''
            }
        },
        methods: {

        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.blogs = res.body.slice(0,20);
            })
        },
        filters: {
            'snippet': function(value) {
                return value.slice(0,100) + '...';
            }
        },
        computed: {
            filteredBlogs: function() {
                return this.blogs.filter((blog,index) => {
                    return blog.title.match(this.search)
                });
            }
        }
    }
</script>

<style scoped>
    #show-blogs {
        max-width: 1200px;
        margin: 0 auto;
    }
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>
