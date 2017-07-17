<template>
    <nav>
        <ul class="menu">
            <li><router-link exact to="/">Home</router-link></li>
            <li><router-link to="/add">Add</router-link></li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped>
    a { 
        color: #fff;
        /* text-decoration: none; */
        padding: 6px 8px;
        border-radius: 10px;
        font-size: 125%;
    }
    nav {
        background: #444;
        padding: 10px;
    }
</style>
