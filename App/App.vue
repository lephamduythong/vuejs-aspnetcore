<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        
        <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      
        <app-footer v-bind:title="title" ></app-footer> -->
  
    <!-- Children -->
    <!-- <form-helper>
          <h2 slot="title">{{ title }}</h2>
          <p slot="text">I am the paragraph text for the slot</p>
        </form-helper> -->
  
    <!-- <form-helper>
          <div slot="form-header">
            <h3>Form header</h3>
            <p>Information about the form</p>
          </div>
          <div slot="form-fields">
            <h3>Form fields</h3>
            <input type="text" placeholder="Name"/>
            <input type="password" placeholder="Password"/>
          </div>
          <div slot="form-controls">
            <h3>Form controls</h3>
            <button v-on:click.prevent="handleLogin()" type="submit"> Login </button>
          </div>
        </form-helper> -->
  
    <!-- <keep-alive>
              <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'form-one'">Show form 1</button>
        <button v-on:click="component = 'form-two'">Show form 2</button> -->
  
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs>
        <list-blogs></list-blogs> -->
  
    <app-header></app-header>
  
    <transition  
      enter-active-class="animated getIn"
      leave-active-class="animated getOut"
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition 
      enter-active-class="getIn"
      leave-active-class="getOut"
    >
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  
  </div>
</template>

<script>
import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
// import Ninjas from './components/Ninjas.vue';

// import FormHelper from './components/FormHelper.vue';

// import FormOne from './components/FormOne.vue';
// import FormTwo from './components/FormTwo.vue';

// import AddBlog from './components/AddBlog.vue';
// import ShowBlogs from './components/ShowBlogs.vue';
// import ListBlogs from './components/ListBlogs.vue';
// import SingleBlog from './components/SingleBlog.vue';
export default {
  // Define the components's name use for this App component
  components: {
    'app-header': Header,
    // 'app-footer': Footer,
    // 'app-ninjas': Ninjas,

    // 'form-helper': FormHelper,

    // 'form-one': FormOne,
    // 'form-two': FormTwo,

    // 'add-blog': AddBlog,
    // 'show-blogs': ShowBlogs,
    // 'list-blogs': ListBlogs,
  },
  data() {
    // Init state data
    return {
      component: 'form-one',
      title: 'Dynamic slot title',
      ninjas: [
        { name: 'Naruto', speciality: 'HTML', show: false },
        { name: 'Lasida', speciality: 'Ahihi', show: false },
        { name: 'Obamu', speciality: 'Pooping', show: false },
        { name: 'Dontrup', speciality: 'Talkative', show: false },
        { name: 'Ozawa', speciality: 'JAV', show: false },
      ]
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    },
    handleLogin: function () {
    }
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

.fade-enter-active,.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,.fade-leave-to {
  opacity: 0
}

</style>

