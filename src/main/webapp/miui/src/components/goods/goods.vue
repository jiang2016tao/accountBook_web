<template>
  <div class="goods">
    <div class="menu-goods" ref="menuWrapper">
      <ul>
        <li v-for="(good,index) in goods" class="goods-li" :class="{'active':currentIndex===index}" @click="selectMennu(index,$event)">
          <span class="goods-li-span">
            <span>{{good.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="list-goods" ref="foodsWrapper">
      <ul>
        <li v-for="good in goods" class="good-li-hood">
          <h1 class="good-title">{{good.name}}</h1>
          <ul>
            <li v-for="food in good.foods" class="food-wrapper">
              <div>
                <img :src="food.icon"/>
              </div>
              <div class="food-content">
                <h2 class="food-title">{{food.name}}</h2>
                <p class="food-desc">{{food.description}}</p>
                <div class="food-sell">
                  <span>月售{{food.sellCount}}份</span>
                  <span class="food-sell-rating">好评率{{food.rating}}%</span>
                </div>
                <div>
                  <span class="food-price">￥{{food.price}}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import data from "../../../data.json";
  import BScroll from "better-scroll";
  export default {
    data(){
      return {
        goods:null,
        menuScroll:null,
        foodsScroll:null,
        foodLiHeights:[],
        scrollY:0
      }
    },
    created(){
      this.goods=data.goods;
    },
    mounted(){
      this.$nextTick(()=>{
        this.menuScroll=new BScroll(this.$refs.menuWrapper,{
          click:true
        });
        this.foodsScroll=new BScroll(this.$refs.foodsWrapper,{
          probeType:3//能实时监听滚动的位置
        });
        this.foodsScroll.on("scroll",(pos)=>{
          this.scrollY=Math.abs(Math.round(pos.y));
        });
        var _height=0;
        this.foodLiHeights.push(_height);
        let foods=this.$refs.foodsWrapper.getElementsByClassName("good-li-hood");
        for(let i=0;i<foods.length;i++){
          _height=_height+foods[i].clientHeight;
          this.foodLiHeights.push(_height);
        }
      })
    },
    computed:{
      currentIndex:function () {
        for(let i=0;i<this.foodLiHeights.length;i++){
          let _height1=this.foodLiHeights[i];
          let _height2=this.foodLiHeights[i+1];
          if(!_height2 || (this.scrollY>=_height1&&this.scrollY<_height2)){
            return i
          }
        }
        return 0;
      }
    },
      methods:{
      selectMennu:function(index,event){
        let foods=this.$refs.foodsWrapper.getElementsByClassName("good-li-hood");
        this.foodsScroll.scrollToElement(foods[index],300);
        console.log(index);
      }
    }
  }
</script>
<style scoped>
  .goods{
    position: absolute;
    top: 195px;
    bottom: 40px;
    display: flex;
    overflow: hidden;
  }
  .menu-goods{
    flex: 0 0 80;
    width: 80px;
    background: #f3f5f7;
    font-weight: 200;
    line-height: 14px;;
  }
  .goods-li{
    height: 108px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    display: table;
    width: 56px;
    padding: 0 12px;
  }
  .goods-li.active{
    background-color: #ffffff;
    font-weight: 700!important;
  }
  .goods-li-span{
    display: table-cell;
    vertical-align: middle;
  }
  .list-goods{
    flex: 1;
  }
  .good-title{
    background: #f3f5f7;
    padding-right: 14px;
    font-size: 12px;
    color: rgb(147,153,159);
    line-height: 26px;
  }
  .food-wrapper{
    display: flex;
    margin:18px;
  }
  .food-content{
    margin: 0 0 0 10px;
  }
  .food-title{
    font-size: 14px;
    line-height: 14px;
    color: rgb(7,17,27);
    margin: 2px 0 0 0;
  }
  .food-desc{
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 10px;
    padding: 8px 0;
  }
  .food-sell{
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 10px;
    padding: 0 0 8px 0;
  }
  .food-sell-rating{
    margin: 0 0 0 12px;
  }
  .food-price{
    font-size: 14px;
    color:red;
    font-weight: 700;
    line-height: 24px;
  }
</style>
