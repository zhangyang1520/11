/***************************************
[mitm]

hostname = *gate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/

const c="copyrightUserInfo"
var body = $response.body;
var obj = JSON.parse(body);

if(obj.data.hasOwnProperty(c)){
    obj.data[c].nickname="EMO";
}

$done({body: JSON.stringify(obj)});
