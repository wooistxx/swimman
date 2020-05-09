<template>
  <div class="Home-page">
    <MenuBar />
    <div class="content" ref="content">
      cccc
    </div>
  </div>
</template>


<script>

import MenuBar from '@/components/MenuBar.vue'

const { ipcRenderer} = require('electron')
export default {
  name: 'Home',
  components:{
    MenuBar
  },
  watch:{
    MenuBar
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
