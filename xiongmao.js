/**************************************

[mitm]

hostname = *anduril.xmkanshu.com*

[rewrite_local]

^http[s]?:\/\/anduril\.xmkanshu.com\/v1\/91user\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xiongmao.js

***************************************/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/v1/';

if (url.indexOf(vip) != -1)

{

obj. isVip="'1";

obj. UserVipLevel=3;

obj. Vip10=1;

obj. Vip10="2099-06-30";

body = JSON.stringify(obj);
}
$done({body});
