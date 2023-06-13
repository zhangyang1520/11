/***************************************
[mitm]

hostname = *gate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/
var timestamp = new Date().valueOf() / 1000;
var resbody=$response.body;
var body = $request.body;
var obj = JSON.parse(body);
if ("nickname" in obj){
    obj.data.copyrightUserInfo.nickname="by_恶魔破解"
}$done({header: {"time": Math.floor(timestamp)}});
$done({body: JSON.stringify(obj)});
