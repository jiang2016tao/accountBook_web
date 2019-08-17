<template>
  <section id="main">
    <section id="content">
      <div class="container">
        <div class="card">
          <div class="card-padding">
            <div class="row">
              <div class="col-sm-3">
                <div class="input-group">
                  <span class="input-group-addon">账户:</span>
                  <div class="fg-line">
                    <input type="text" class="form-control" placeholder="账户"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-primary">查询</button>
                <button type="button" class="btn btn-primary">新增</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-padding">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>账户</th>
                    <th>父账户</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
  import {getAccountInfo} from "../api/Https"
  export default{
    data(){
      return {
        accountInfos:[]
      }
    },
    created(){
      debugger
      this.getAccountInfos();
    },
    methods:{
      getAccountInfos(){
        getAccountInfo({}).then(data=>{
          console.log(data);
          this.accountInfos=data;
        });
      }


    }
  }
</script>
<style scoped>
</style>
