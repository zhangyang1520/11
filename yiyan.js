/**************************************

[mitm]

hostname = *app.yiyan.art*

[rewrite_local]
^http[s]?:\/\/app\.yiyan.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/yiyan.js

***************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = 'getuserinfoandbooklist?';
const vip1 = 'checkpro?';
const vip2 = 'getvipproduct';
if (url.indexOf(vip) != -1)
{    obj.user.viptype="4";
 if (url.indexOf(vip1) != -1)
{    obj.viptype="4";
if (url.indexOf(vip1) != -1)
{    obj.viptype="4";
 body = JSON.stringify(obj);}$done({body});
