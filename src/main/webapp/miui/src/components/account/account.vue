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
                    <input type="text" v-model="search.accountName" class="form-control" placeholder="账户"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-primary" @click="getAccountInfos()">查询</button>
                <button type="button" class="btn btn-primary" @click="addAccountClick()">新增</button>
              </div>
            </div>
          </div>
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
                  <tr v-show="!accountInfos || accountInfos.length==0">
                    <td colspan="3">没有数据</td>
                  </tr>
                  <tr v-show="accountInfos && accountInfos.length>0" v-for="account,i in accountInfos">
                    <td>{{account.accountName}}</td>
                    <td>{{account.parentId || '-'}}</td>
                    <td>
                      <button type="button" class="btn btn-primary" @click="editClick(account)">修改</button>
                      <button type="button" class="btn btn-primary" @click="deleteClick(account)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" tabindex="-1" role="dialog" aria-label="modal" id="update_account_modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
              <h4>{{updateAccount.title}}</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4 m-t-10">
                  <label class="pull-right">账户:</label>
                </div>
                <div class="col-sm-8">
                  <div class="fg-line">
                    <input type="text" class="form-control" placeholder="账户" v-model="updateAccount.accountName"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 m-t-10">
                  <label class="pull-right">父账户:</label>
                </div>
                <div class="col-sm-8">
                  <div class="fg-line">
                    <input type="text" class="form-control" placeholder="父账户" v-model="updateAccount.parentId"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="update()">保存</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
  import {getAccountInfo,updateAccountInfo,deleteAccountInfo} from "../api/Https"
  const newAccountObj={
    title:"添加账户",
    accountName:"",
    parentId:"",
    id:""
  };
  export default{
    data(){
      return {
        accountInfos:[],
        updateAccount:Object.assign(true,{},newAccountObj),
        search:{}
      }
    },
    created(){
      this.getAccountInfos();
    },
    methods:{
      addAccountClick(){
        this.updateAccount=Object.assign(true,{},newAccountObj);
        $("#update_account_modal").modal("show");
      },
      getAccountInfos(){
        getAccountInfo(this.search).then(data=>{
          console.log(data);
          this.accountInfos=data.data.data;
        });
      },
      update(){
        delete this.updateAccount.title;
        let param={};
        let updateAccount=this.updateAccount;
        Object.keys(updateAccount).forEach(key=>{
          if(updateAccount[key]){
            param[key]=updateAccount[key];
          }
        });
        updateAccountInfo(param).then(data=>{
          $("#update_account_modal").off("hidden.bs.modal").on("hidden.bs.modal",()=>{
            this.getAccountInfos();
          }).modal("hide");
        });
      },
      editClick(account){
        this.updateAccount.title="修改账户";
        let {accountName,parentId,id}=account;
        this.updateAccount=Object.assign(true,this.updateAccount,{accountName,parentId,id});
        $("#update_account_modal").modal("show");
      },
      deleteClick(account){
        deleteAccountInfo(account.id).then(data=>{
          let {code}=data.data;
          if(code===0){
            this.getAccountInfos();
          }
        })
      }
    }
  }
</script>
<style scoped>
</style>
