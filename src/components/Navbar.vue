<template>
    <nav class="navbar">
      <div class="nav_icon" @click="$emit('nav-btn-clicked')">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="navbar__left">
        <router-link to="/">Subscribers</router-link>
        <router-link to="/">Video Management</router-link>
        <router-link class="active_link" to="/">
          Admin
        </router-link>
      </div>
      <div class="navbar__right">
        <a href="#">
          <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#">
          <img width="30" src="../assets/avatar.svg" alt="avatar" />
        </a>
      </div>
    </nav>
</template>
<script>
export default {
  props: {
    toggle: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
.navbar {
    background: #ffffff;
    grid-area: nav;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    border-bottom: 1px solid lightgray;
  }
  
  .nav_icon {
    display: none;
  }
  
  .nav_icon > i {
    font-size: 26px;
    color: #a5aaad;
  }
  
  .navbar__left > a {
    margin-right: 30px;
    text-decoration: none;
    color: #a5aaad;
    font-size: 15px;
    font-weight: 700;
  }
  
  .navbar__left .active_link {
    color: #265acc;
    border-bottom: 3px solid #265acc;
    padding-bottom: 12px;
  }
  
  .navbar__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar__right > a {
    margin-left: 20px;
    text-decoration: none;
  }
  
  .navbar__right > a > i {
    color: #a5aaad;
    font-size: 16px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
    padding: 7px;
  }
  
  @media only screen and (max-width: 978px) {
    .nav_icon {
      display: inline;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .navbar__left {
      display: none;
    }
  }
</style>