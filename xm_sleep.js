/*********************************************************
[mitm]
hostname=*sleep.navolove.com*

[rewrite_local]
^http[s]?:\/\/sleep.navolove.com\/api\/refresh\_user\_info url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xm_sleep.js
*********************************************************/

var body = $response.body;
var url = $response.url;
var obj = JSON.parse(body);
const api_url = '/refresh_user_info?';
if(url.indexOf(api_url) != -1) {
  obj.data.nickname = "by-恶魔";
  obj.is_svip = true;
  obj.is_vip = true;
  obj.expiration_time = "2099-09-29T01:05:06.000000Z";
}
body = JSON.stringify(obj);
$done({body: body});
