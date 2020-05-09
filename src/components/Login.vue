<template>
  <div class="main">
    <!-- body -->
    <div class="mainbd">
      <div class="avatar">
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="item">
        <el-input placeholder="请输入账号" v-model="account" clearable prefix-icon="el-icon-user"></el-input>
      </div>
      <div class="item">
        <el-input placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock"></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" round @click="login" class="loginbtn" >登录</el-button>
      </div>
    </div>
    <!-- foot -->
    <div class="mainft">
      @copyright tommao
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components:{
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.account === 'admin' && this.password === '123456') {
        this.$router.push('Home')
      } else if (this.account === '' && this.password === '') {
        this.$router.push('Home')
      } else {
        this.$message.error('用户名或密码错误')
      }
    }
  }
}
</script>

<style scoped>

.main{
  -webkit-app-region: drag;
  background: rgba(156,220,254, 0.9);
  /* border: 1px red solid; */
  border-radius: 3px;
  width: 600px;
  height: 370px;
  margin: 0 auto;
}

.mainhd{
  width: 100%;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.6);
}

.mainhd-title{
  margin-left: 10px;
  font-size: 20px;
  height:20px;
  line-height:15px;
}

.mainbd{
  background-color: green;
  width: 400px;
  height: 300px;
  margin: 0 auto;
}

.avatar{
  padding-top: 20px;
  width: 80px;
  margin: 0 auto;
  border: 1px black solid;
}

.item{
    -webkit-app-region: no-drag;
    margin-top: 20px;
}


.btn{
  -webkit-app-region: no-drag;
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
}

.loginbtn{
  width: 100px;
}

.mainft{
  width: 100%;
  height: 50px;
  display: block;
  background-color: brown;
  text-align:center
}


</style>

