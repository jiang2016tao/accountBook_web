<template>
  <div class="lc-block toggled" id="l_login" v-show="!isLogin">
    <div class="input-group m-b-20">
        <span class="input-group-addon">
          <i class="zmdi zmdi-account"></i>
        </span>
      <div class="fg-line">
        <input type="text" class="form-control" placeholder="Username"/>
      </div>
    </div>
    <div class="input-group m-b-20">
        <span class="input-group-addon">
          <i class="zmdi zmdi-male"></i>
        </span>
      <div class="fg-line">
        <input type="password" class="form-control" placeholder="password"/>
      </div>
    </div>
    <div class="clearfix"></div>
    <a href="javascript:;" @click="loginClick()" class="btn btn-login btn-danger btn-float waves-effect waves-circle waves-float">
      <i class="zmdi zmdi-arrow-forward"></i>
    </a>
  </div>
</template>
<script>
  export default {
    methods:{
      loginClick:function(){
        this.$router.push("home");
      }
    }
  }
</script>
<style scoped>
</style>
