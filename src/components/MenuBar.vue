<template>

<div class="MenuBar-template">
  <!-- head -->
  <div class="mainhd"></div>
  <!-- body -->
  <div class="mainbd">
    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn" @click="barshow"></i>
      <i class="fas fa-times" id="cancel" @click="barhide"></i>
    </label>
    <div class="sidebar">
      <header>游泳管理系统</header>
      <ul>
        <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
        <li><a href="#"><i class="fas fa-link"></i>员工管理</a></li>
        <li><a href="#"><i class="fas fa-stream"></i>会员管理</a></li>
        <li><a href="#"><i class="fas fa-calendar-week"></i>教练管理</a></li>
        <li><a href="#"><i class="far fa-question-circle"></i>场地管理</a></li>
        <li><a href="#"><i class="fas fa-sliders-h"></i>收银管理</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>退款管理</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>体验券管理</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>停车管理</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>事件提醒</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>服务日</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>报表查询</a></li>
      </ul>
    </div>
  </div>
  <!-- foot -->
  <div class="mainft">
  </div>
</div>
</template>


<script>
//<link rel="stylesheet" href="css/fontawesome/css/all.css">
//     <link rel="stylesheet" href="css/index.css">

// 入口js中引入

import '../assets/fontawesome/css/all.css' 

 

export default {
  name: 'MenuBar',
  props:{
    isHidden: Boolean
  },
  methods:{
    barshow(){
      this.$parent.barshow();
    },
    barhide(){
      this.$parent.barhide();
    }
  },



}
</script>


<style scoped>
.MenuBar-template{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  -webkit-app-region: no-drag;
  overflow: hidden;
}

.MenuBar-template .sidebar{
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #042331;
  transition: all .5s ease;
  overflow-y: scroll;
}

.MenuBar-template .sidebar header{
  -webkit-app-region: drag;
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
}

.MenuBar-template .sidebar ul a{
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  font-size: 16px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid black;
  translation: .2s;
}

.MenuBar-template ul li:hover a{
    padding-left: 40px;
}

.MenuBar-template .sidebar ul a i{
    margin-right: 16px;
}

.MenuBar-template #check{
    display: none;
}

.MenuBar-template label #btn,label #cancel{
  position: absolute;
  cursor: pointer;
  background: #042331;
  border-radius: 50%;
}

.MenuBar-template label #btn{
  left: 40px;
  top: 25px;
  font-size: 20px;
  color: white;
  padding: 6px 8px;
  transition: all .5s;
  opacity: .3;
}

.MenuBar-template label #cancel{
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size:15px;
  color: #0a5275;
  padding: 4px 6px;
  transition: all .5s ease;
  opacity: .7;
}

.MenuBar-template #check:checked ~ .sidebar{
    left: 0;
}

.MenuBar-template #check:checked ~ label #btn{
    left: 250px;
    opacity: .0;
    pointer-events: none;
}

.MenuBar-template #check:checked ~ label #cancel{
    /* left: 195px; */
    left: 260px; /*250+10*/
    top: 30px; /*20+10*/
    background-color: white;
}

.MenuBar-template #check:checked ~ .main{
    margin-left: 250px;
}

</style>

