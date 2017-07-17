<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show"> {{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete the ninja</button>
  </div> 
</template>

<script>
  export default {
    props: {
        ninjas: {
            // Proptypes
            type: Array,
            required: true,
        }
    },
    data() {
      return {
        
      }
    },
    methods: {
        deleteNinja: function() {
            // Can change prop in component
            this.ninjas.pop();
        } 
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
    h1 {
        color: green;
    }
    #ninjas {
      width: 100%;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      box-sizing: border-box;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }
    li {
      flex-grow: 1;
      flex-basis: 200px;
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
    }
</style>

