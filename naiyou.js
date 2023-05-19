/***************************************
[mitm]

hostname = *keyboard*

[rewrite_local]


^http[s]?:\/\/api\.keyboard\.buzhedie\.com\/input\/member_info\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/naiyou.js



***************************************/
var body = $response.body;
body = JSON.parse(body);
body.data. vip=true
body.data. nickname=恶魔
body.data.payTotal=99
$done({body: JSON.stringify(body)});
