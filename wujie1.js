/***************************************
[mitm]

hostname = *gate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/

var body = $request.body;
var obj = JSON.parse(body);
if ("g3UH4AbS" in obj){
    obj.data.copyrightUserInfo.nickname="EMO";
}
$done({body: JSON.stringify(obj)});
