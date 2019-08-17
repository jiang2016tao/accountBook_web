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
