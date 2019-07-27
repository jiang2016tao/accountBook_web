<template>
  <div class="text-center">

    <router-view></router-view>
  </div>

    <!--<div class="body-content">-->
      <!--<router-view/>-->
    <!--</div>-->
    <!--<router-view/>-->
</template>

<script>
  export default{
    data(){
      return {
        isLogin:false
      }
    },
    methods:{
      loginClick:function(){
        this.isLogin=true;
        debugger
        $("body").removeClass("login-content").removeClass("sw-toggled");
      }
    }
  }
</script>

<style>

  /*.lc-block{*/
    /*padding: 35px 55px 35px;*/
    /*background: #ffffff;*/
    /*box-shadow: 0 1px 11px rgba(0,0,0,0.27);*/
    /*border-radius: 2px;*/
    /*width: 500px;*/
    /*display: inline-block;*/
    /*margin-top: 42px;*/
    /*vertical-align: middle;*/
    /*position: relative;*/
  /*}*/
</style>
