/***************************************
[mitm]

hostname = *gate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/
var body=$response.body;
var obj = JSON.parse(body);
if (copyrightUserInfo in obj){
    obj.data.copyrightUserInfo.nickname="by_恶魔破解"
}
$done({body: JSON.stringify(obj)});
