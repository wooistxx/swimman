<template>
  <div class="Home-page">
    <div class="TopBar">
      <el-menu background-color="#042331" class="hor" mode="horizontal" text-color="#fff">
        <el-menu-item index="1" @click="router('/top/member-checkout')">        会员登记</el-menu-item>
        <el-menu-item index="2" @click="router('/top/member-pay')">             会员缴费</el-menu-item>
        <el-menu-item index="3" @click="router('/top/swim-proj')">              游泳项目</el-menu-item>
        <el-menu-item index="4" @click="router('/top/ball-proj')">              球类项目</el-menu-item>
        <el-menu-item index="6" @click="router('/top/identity')">               身份识别</el-menu-item>
        <el-menu-item index="7" @click="router('/top/day-report')">             营业日结</el-menu-item>
        <!-- <div style="dislay: inline-block;" v-for="(i, key) in top" :key="key">
          <el-menu-item :index="key.toString()"  @click="router(i.url)"> 
            <template slot=title>
              <span>{{i.name}}</span>
            </template>
          </el-menu-item>
        </div> -->
      </el-menu>
    </div>
    <div class="MenuBar-template">
      <input type="checkbox" id="check">
      <label for="check">
        <i class="fas fa-bars" id="btn" @click="barshow"></i>
        <i class="fas fa-times" id="cancel" @click="barhide"></i>
      </label>
      <div class="sidebar">
        <el-menu  background-color="#042331" text-color="#fff">
          <div v-for="(i, key) in routes" :key="key">
            <el-menu-item :index="key.toString()" v-if="!i.children" @click="router(i.url)">
              <template slot=title>
                <i :class="i.icon"></i> <span>{{i.name}}</span>
              </template>
            </el-menu-item>
            <el-submenu v-else :index="key.toString()" background-color="#fff">
              <template slot=title>
                <i :class="i.icon"></i><span>{{i.name}}</span>
              </template>
              <el-menu-item-group>
                <template slot="title">{{i.subtitle}}</template>    
                  <el-menu-item v-for="( t, key_t ) in i.children" :key="key_t" :index="`${key}-${key_t}`" @click="router(t.url)">
                        {{t.name}}
                  </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </div>
    </div>
    <div ref="content">
      <el-main>
        <div class="px1 pb3" style="overflow:auto;height:500px">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
          <!-- <div v-if="$route.name === 'index'" id="index-logo"> 
            <img :src="meta.logo" id="index-icon" />
            <div class="pl3" id="icon-text">YeuolyOrg</div>
          </div> -->
          </div>
      </el-main>
    </div>
  </div>
</template>


<script>

import '../assets/fontawesome/css/all.css' 
import axios from 'axios'
// import router from '@/router/'

const { ipcRenderer} = require('electron')
export default {
  name: 'Home',
  components:{
  },
  data : () => ({
    msg: "Error,db query failed",
    datas: [],
    /**
     * 
        <el-menu-item index="1">会员登记</el-menu-item>
        <el-menu-item index="2">会员缴费</el-menu-item>
        <el-menu-item index="3">游泳项目</el-menu-item>
        <el-menu-item index="4">球类项目</el-menu-item>
        <el-menu-item index="6">身份识别</el-menu-item>
        <el-menu-item index="7">营业日结</el-menu-item>
     */
    top:[
      {
        name : '会员登记',
        url: '/top/member-register'
      },{
        name: '会员缴费',
        url: '/top/member-pay'
      },{
        name: '游泳项目',
        url: '/top/swim-proj'
      },{
        name: '球类项目',
        url: '/top/ball-proj'
      },{
        name: '身份识别',
        url: '/top/identity'
      },{
        name: '营业日结',
        url: '/top/day-report'
      }
    ],
    routes : [
      {
        name : '会员信息管理',
        icon : 'el-icon-video-play',
        url : '/'
      },{
        name : '游泳项目',
        icon : 'el-icon-question',
        children: [{
          name: '游泳项目售票',
          url: '/swim/tickets-sale'
        },{
          name: '游泳培训销售',
          url: '/swim/train'
        },{
          name: '游泳门票查询',
          url: '/swim/tickets-query'
        }]
      },{
        name : '球类项目管理',
        icon : 'el-icon-document',
        children:[{
          name: '球类场地租赁',
          url: '/ball/place-rent'
        },{
          name: '球类场地状态',
          url: '/ball/place-status'
        },{
          name: '球类门票查询',
          url: '/ball/tickets'
        }]
      },{
        name : '前台营业管理',
        icon : 'el-icon-setting',
        children:[{
          name : '顾客身份识别',
          url : '/stage/customer-ident'
        },{
          name : '淋浴门票直销',
          url : '/stage/shower'
        }]
      },{
        name : '会员信息统计',
        icon : 'el-icon-user',
        children: [{
          name: '会员信息统计',
          url: '/mem-statistics/statistics'
        },{
          name: '会员缴纳统计',
          url: '/mem-statistics/pay'
        }]
      },{
        name : '财务信息统计',
        icon : 'el-icon-reading',
        children : [{
            name : '场馆营业统计',
            url : '/finance/place-bs-statistics'
        },{
            name : '场馆门票统计',
            url : '/finance/ticket-bs-statistics'
        }]
      },{
        name : '基础数据管理',
        icon : 'el-icon-pie-chart',
        children : [{
          name : '会员类别数据',
          url : '/basic/member-'
        },{
          name : "手牌信息注册",
          url : '/basic/hand-info-regis'
        },{
          name : "场地名称数据",
          url : '/basic/place-name'
        },{
          name: '场地价格数据',
          url: '/basic/place-price'
        },{
          name: '单位基础数据',
          url: '/basic/unit'
        },{
          name: '法定日期数据',
          url: '/basic/legaldate'
        },{
          name: '部门基础数据',
          url: '/basic/depart-info'
        },{
          name: '职员基础数据',
          url: '/basic/staff-info'
        },{
          name: '操作用户数据',
          url: '/basic/oprater-info'
        }]
      },{
        name : '系统用户数据',
        icon : 'el-icon-paperclip',
        children : [{
          name : '权限设置',
          url : '/sys/authority'
        },{
          name : '密码修改',
          url: '/sys/passwdchange'
        }]
      }
    ],
    user : "tom"
  }),
  created: function(){
    axios.get("queryAll").then(response => {
      this.datas = response.data.data;
      this.msg = "db query success!"
    })
  },
  mounted () {
    this.changeWindowSize()
  },
  methods: {
    changeWindowSize () {
      ipcRenderer.send('changWindowSize')
    },
    router(url){
      if(url === this.$route.path) return;
      this.$router.push(url);
    },
    barshow(){
      console.log("showed");
      this.$refs.content.style.marginLeft = '250px';
    },
    barhide(){
      console.log("hidden");
      this.$refs.content.style.marginLeft = '0px';
    },
  }
}
</script>


<style scoped>

.Home-page{
  -webkit-app-region: no-drag;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.Home-page .TopBar{
  width: 100%;
  height: 50px;
}

.Home-page .TopBar .el-menu-item.is-active {
  /* background: #6db6ff !important; */
  color: grey;
}
/* .Home-page .TopBar .el-submenu__title.is-active {
  /* background: #6db6ff !important; 
} */


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
.MenuBar-template .sidebar::-webkit-scrollbar { width: 0 !important }

/* .MenuBar-template .sidebar header{
  -webkit-app-region: drag;
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
} */

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
  left: 40px; /* 0 + 40  */
  top: 75px; /* 50+25  */
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
    top: 60px; /*50+10*/
    background-color: white;
}
.Home-page #main{
  border: 1px red solid;
}

#check:checked ~ .Home-page #main{
  margin-left: 250px;
  border: 1px green solid;
  
  /* display: block; */
  /* position: absolute; */
  /* width: 100%;
  border: 1px red solid;
  background-color: white;
  top: 70px;
  bottom: 0px;
  left: 250px;
  right: 0;
  padding: 5px; */
  /* background-color: rgb(30,30,30);  */
  /* border-radius: 0 0 10px 0; */
}



</style>
