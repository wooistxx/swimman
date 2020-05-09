<template>
  <div class="Home-page">
    <MenuBar />
    <div class="content" ref="content">
      <center>
        <h1>{{ msg }}</h1>
      <table border="1px">
        <thead>
        <tr>
            <th>消费流水</th> <!-- turnid  -->
            <th>消费序号</th> <!-- turnno -->
            <th>会卡属性</th> <!-- cardmode -->
            <th>会卡类别</th> <!-- cardtype -->
            <th>会卡编号</th> <!-- cardid -->
            <th>会卡卡号</th> <!-- cardno -->
            <th>会员名字</th> <!-- leaguename -->
            <th>消费类别</th> <!-- itemtype -->
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in datas" v-bind:key="data.turnid">
            <td v-text="data.turnid"></td>
            <td v-text="data.turnno"></td>
            <td v-text="data.cardmode"></td>
            <td v-text="data.cardtype"></td>
            <td v-text="data.cardid"></td>
            <td v-text="data.cardno"></td>
            <td v-text="data.leaguename"></td>
            <td v-text="data.itemtype"></td>
        </tr>
        </tbody>
    </table>
    </center>
    </div>
  </div>
</template>


<script>

import MenuBar from '@/components/MenuBar.vue'
import axios from 'axios'

const { ipcRenderer} = require('electron')
export default {
  name: 'Home',
  components:{
    MenuBar
  },
  watch:{
    MenuBar
  },
  data: () => ({
    msg: "Error,db query failed",
    datas: []
    
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
  background: rgba(156,220,254, 0.9);
  /* border: 1px red solid; */
  border-radius: 3px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
}

.Home-page .content{
  margin-left: 0px;
}

</style>
