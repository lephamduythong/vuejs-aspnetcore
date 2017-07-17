export default {
    computed: {
        filteredBlogs: function () {
            return this.blogs.filter((blog, index) => {
                return blog.title.match(this.search)
            });
        }
    }
}