/**************************************

[mitm]

hostname = *nz-api.duitang.com*

[rewrite_local]
^http[s]?:\/\/nz-api\.duitang\.com\/account\/me\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/naiyou6.js

***************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/account/me';
if (url.indexOf(vip) != -1)
{    obj.data.vip = true;
 body = JSON.stringify(obj);}$done({body});
