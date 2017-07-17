import ShowBlogs from './components/ShowBlogs.vue';
import AddBlog from './components/AddBlog.vue';
import SingleBlog from './components/SingleBlog.vue';

export default [{
        path: '/', 
        component: ShowBlogs,
        meta: {
            keepAlive: true
        },
    },{
        path: '/add', 
        component: AddBlog,
        meta: {
            keepAlive: true
        },
    },{
        path: '/blog/:id', 
        component: SingleBlog, 
        meta: {
            keepAlive: false
        },
}]