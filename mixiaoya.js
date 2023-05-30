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
const vip2 = 'buyRechargeCode?';
if (url.indexOf(vip) != -1) {
  obj.body. balance = 15;
}
if (url.indexOf(vip2) != -1) {
  obj. success = true;
  obj. data. preNum = 10;
  obj. data. resText = "充值成功";
  obj. data. dedcPre = 10;
  obj. data. balance = 5;
  obj. msg = "充值成功";
}

body = JSON.stringify(obj);
$done({body: body});
