/**
 * Created by Administrator on 2019/7/30.
 */
import fetch from "./fetch";
export function getAccountInfo(data) {
  return fetch({
    url:"findAccountInfos",
    method:"get",
    data
  });
}
export function updateAccountInfo(data){
  return fetch({
    url:"updateAccount",
    method:"post",
    data
  });
}

export function deleteAccountInfo(id){
  return fetch({
    url:`deleteAccountById`,
    data:{
      id
    },
    method:"get"
  })
}
