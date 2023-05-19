/***************************************
[mitm]

hostname = *naiyou*

[rewrite_local]


^http[s]?:\/\/nz-api\.duitang\.com\/account\/me\/\?statics\=1 url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/naiyou4.js



***************************************/
var body = $response.body;
body = JSON.parse(body);
body.data.vip=true;
body.data.nickname="恶魔";
body.data.payTotal="99";
$done({body: JSON.stringify(body)});
