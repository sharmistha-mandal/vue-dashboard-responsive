<template>
  <div class="container">
    <Navbar :toggle="sidebarOpen" @nav-btn-clicked="openSidebar" />
    <Main />
    <Sidebar :toggle="sidebarOpen" @close-btn-clicked="closeSidebar" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Main from '../components/Main.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Main
  },

  data(){
      return {
        sidebarOpen:false
      };
  },

  methods:{
    openSidebar(){
        this.sidebarOpen=true;
    },
    closeSidebar(){
        this.sidebarOpen=false;
    }
  }
};
</script>
