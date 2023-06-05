/*******************************

脚本功能：熊猫睡眠——解锁VIP
软件版本：v1.1.3
脚本作者：恶魔
更新时间：2023-5-25
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/sleep.navolove.com\/api\/refresh\_user\_info url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xm_sleep.js

[mitm] 

hostname =*sleep.navolove.com*

*******************************/

var body = $response.body;
var url = $response.url;
var obj = JSON.parse(body);
const api_url = '/refresh_user_info?';
if(url.indexOf(api_url) != -1) {
obj=JSON.parse(jsonStr);
obj.data.nickname="by_恶魔破解";
obj.data.is_svip=true;
obj.data.is_vip=true;
obj.data.expiration='2099-09-09';
obj.data.expiration_time='2099-09-09';
obj.data.username="by_恶魔破解";
}
body = JSON.stringify(obj);
$done({body: body});
