/*********************************************************
[mitm]
hostname=*sleep.navolove.com*

[rewrite_local]
^http[s]?:\/\/sleep.navolove.com\/api\/refresh\_user\_info

*********************************************************/

var body = $response.body;
var url = $response.url;
var obj = json.parse(body);
const = api_url = /refresh_user_info?
if(url.indexOf(vip1)!=-1) {
  obj.data.nickname = "by-恶魔";
  obj.data.is_svip = turn;
  obj.data.is_vip = turn;
  obj.data.expiration_time = "2099-09-29T01:05:06.000000Z"
}
body = JSON.stringify(obj);
$done({body: body});
