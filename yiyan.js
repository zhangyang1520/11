/**************************************

[mitm]

hostname = *app.yiyan.art*

[rewrite_local]
^http[s]?:\/\/app\.yiyan.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/yiyan.js

***************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/yiyan/';
if (url.indexOf(vip) != -1)
{    obj.user.viptype="3";
 body = JSON.stringify(obj);}$done({body});
