/*******************************

脚本功能：熊猫睡眠——解锁VIP
软件下载：https://is.gd/nTgaTp
软件版本：v1.1.3
脚本作者：彭于晏
更新时间：2023-5-25
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/sleep.navolove.com\/api\/refresh_user_info url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xm_sleep.js

[mitm] 

hostname = sleep.navolove.com

*******************************/

var body = $response.body;
var url = $response.url;
var obj = JSON.parse(body);
const api_url = '/refresh_user_info?';
if(url.indexOf(api_url) != -1) {
  obj.data.nickname = "by-恶魔";
  obj.data.is_svip = true;
  obj.is_vip = true;
  obj.expiration_time = "2099-09-29";
}
body = JSON.stringify(obj);
$done({body: body});
