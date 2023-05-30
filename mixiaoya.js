/**************************************

[mitm]

hostname = *service.yourmeter.cn*

[rewrite_local]
^http[s]?:\/\/service.\yourmeter\.cn\/api\/pay\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/mixiaoya.js

***************************************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = 'getBalance?';
if (url.indexOf(vip) != -1) {
  obj.body. balance = 15;
}
body = JSON.stringify(obj);
$done({body: body});
