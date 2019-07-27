<template>
  <div class="head-div">
    <div class="head-wrapper">
      <div>
        <div class="head-wrapper-left">
          <img width="64" height="64" :src="seller.avatar"/>
        </div>
        <div class="head-wrapper-right">
          <div class="title-content">
            <span class="title-pre"></span>
            <span class="title-content-span">{{seller.name}}</span>
          </div>
          <div class="delivery-div">
            <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
          </div>
          <div class="sup-div">
            <span class="sup-pre"></span>
            <span class="sup-div-title">{{seller.supports[0].description}}</span>
            <span class="sup-div-title sup-count" v-show="seller.supports" @click="showDetail()">{{seller.supports.length}}个&nbsp;></span>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-div">
      <span class="bulletin-div-pre"></span>
      <span class="bulletin-div-content">{{seller.bulletin}}</span>
      <span class="bulletin-div-right">&gt;</span>
    </div>

    <div class="detail-div" v-show="isDetailShow">
      <div class="detail-content-div"></div>
      <div class="detail-foot-div" @click="closeDetail()">X</div>
    </div>
  </div>
</template>
<script>
  import data from "../../../data.json";
  export default {
    data(){
      return {
        seller:null,
        isDetailShow:false
      }
    },
    created(){
      this.seller=data.seller;
    },
    methods:{
      showDetail:function(){
        this.isDetailShow=true;
      },
      closeDetail:function(){
        this.isDetailShow=false;
      }
    }
  }
</script>
<style scoped>

  .head-div{
    background: rgba(1,17,27,0.5);
    color: #ffffff;
  }
  .head-wrapper{
    padding: 20px 0px 0 20px;
    font-size: 0;
  }
  .head-wrapper-left{
    display: inline-block;
    width: 64px;
  }
  .head-wrapper-right{
    display: inline-block;
    font-size: 12px;
    vertical-align: top;
    width: calc(100% - 64px);
  }
  .title-content{
    margin: 4px 0 0px 10px;
    font-weight: bold;
  }
  .delivery-div{
    margin: 4px 0 0px 10px;
  }
  .sup-div{
    margin: 4px 0 0px 10px;
    width: 100%;
  }
  .sup-pre{
    background: url("./decrease_1@2x.png") no-repeat;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
  }
  .sup-div-title{
    vertical-align: top;
    line-height: 18px;
  }
  .sup-count{
    float: right;
    display: inline-block;
    margin-right: 20px;
    background-color: rgba(0,0,0,0.2);
    padding: 7px;
    border-radius: 15px;
  }
  .title-pre{
    background: url("./brand@2x.png") no-repeat;
    display: inline-block;
    width: 48px;
    height: 20px;
    background-size: 48px 20px;
  }
  .title-content-span{
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .bulletin-div{
    font-size: 12px;
    margin-top: 18px;
    padding: 8px 0;
    background-color: rgba(1,17,27,0.2);
  }
  .bulletin-div-pre{
    background: url("./bulletin@2x.png") no-repeat;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
  }
  .bulletin-div-content{
    line-height: 20px;
    max-width: calc(100% - 40px);
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
  }
  .bulletin-div-right{
    float: right;
    line-height: 20px;
    margin-right: 10px;
  }
  .detail-div{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height:100%;
    background: rgba(114,114,144,0.6);
    color: #ffffff;
  }
  .detail-foot-div{
    height: 80px;
    text-align: center;
  }
  .detail-content-div{
    max-height: calc( 100% - 80px);
  }
</style>
