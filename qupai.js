/***************************************
[mitm]
hostname = *s.mcwifi.cn*

[rewrite_local]
^http[s]?:\/\/s.mcwifi.cn\/hw/apple\/subscribe\/v1.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/qupai.js

***************************************/

var body = $response.body;
body = JSON.parse(body);
body.data.isVip = "1";
body.data.expiresDateMs = "32495443200000";
$done({body: JSON.stringify(body)});
