<template>
  <div :class="{ sidebar_responsive: toggle }" id="sidebar">
    <div class="sidebar__title">
      <div class="sidebar__img">
        <img src="../assets/logo.png" alt="icon" />
        <h1>Demo Template</h1>
      </div>
      <i class="fa fa-times" id="sidebarIcon" aria-hidden="true" @click="$emit('close-btn-clicked')"></i>
    </div>

    <div class="sidebar__menu">
      <div class="sidebar__link active_menu_link">
        <i class="fa fa-home"></i>
        <a href="#">Dashboard</a>
      </div>
      <h2>MNG</h2>
      <div class="sidebar__link">
        <i class="fa fa-user-secret" aria-hidden="true"></i>
        <a href="#">Admin Management</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-building-o"></i>
        <a href="#">Company Management</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-wrench"></i>
        <a href="#">Employee Management</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-archive"></i>
        <a href="#">Warehouse</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-handshake-o"></i>
        <a href="#">Contracts</a>
      </div>
      <h2>LEAVE</h2>
      <div class="sidebar__link">
        <i class="fa fa-question"></i>
        <a href="#">Requests</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-sign-out"></i>
        <a href="#">Leave Policy</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-calendar-check-o"></i>
        <a href="#">Special Days</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-files-o"></i>
        <a href="#">Apply for leave</a>
      </div>
      <h2>PAYROLL</h2>
      <div class="sidebar__link">
        <i class="fa fa-money"></i>
        <a href="#">Payroll</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-briefcase"></i>
        <a href="#">Paygrade</a>
      </div>
      <div class="sidebar__logout" @click="submitLogout">
        <i class="fa fa-power-off"></i>
        <a href="#">Log out</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    toggle: {
      type: Boolean,
    }
  },

  methods: {
    submitLogout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
  
};
</script>

<style scoped>
#sidebar {
    background: #020509;
    grid-area: sidebar;
    overflow-y: auto;
    padding: 20px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .sidebar__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3f4f6;
    margin-bottom: 30px;
    /* color: #E85B6B; */
  }
  
  .sidebar__img {
    display: flex;
    align-items: center;
  }
  
  .sidebar__title > div > img {
    width: 75px;
    object-fit: contain;
  }
  
  .sidebar__title > div > h1 {
    font-size: 18px;
    display: inline;
  }
  
  .sidebar__title > i {
    font-size: 18px;
    display: none;
  }
  
  .sidebar__menu > h2 {
    color: #3ea175;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 0 10px;
    font-weight: 700;
  }
  
  .sidebar__link {
    color: #f3f4f6;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
  }
  
  .active_menu_link {
    background: rgba(62, 161, 117, 0.3);
    color: #3ea175;
  }
  
  .active_menu_link a {
    color: #3ea175 !important;
  }
  
  .sidebar__link > a {
    text-decoration: none;
    color: #a5aaad;
    font-weight: 700;
  }
  
  .sidebar__link > i {
    margin-right: 10px;
    font-size: 18px;
  }
  
  .sidebar__logout {
    margin-top: 20px;
    padding: 10px;
    color: #e65061;
  }
  
  .sidebar__logout > a {
    text-decoration: none;
    color: #e65061;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .sidebar__logout > i {
    margin-right: 10px;
    font-size: 18px;
  }
  
  .sidebar_responsive {
    display: inline !important;
    z-index: 9999 !important;
    left: 0 !important;
    position: absolute;
  }
  
  @media only screen and (max-width: 978px) {
    #sidebar {
      display: none;
    }
  
    .sidebar__title > i {
      display: inline;
    }
  }
</style>
