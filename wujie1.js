/***************************************
[mitm]

hostname = *ate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/
var body=$response.body;
let obj = JSON.parse(body);
const list1=["copyrightUserInfo","userMemberCardList","buyMemberCardList"];
if (list1[0] in obj){
    obj.data.copyrightUserInfo.integralWalletBalance.availableBalance=9999;
    obj.data.copyrightUserInfo.nickname="by_恶魔破解";
    obj.data.copyrightUserInfo.userRoleInfo.aiArtist=true;
    obj.data.copyrightUserInfo.userRoleInfo.artist=true;
    obj.data.copyrightUserInfo.memberDetail.endTime=4102041723;
    obj.data.copyrightUserInfo.memberDetail.hold=true;
};
$done({body: JSON.stringify(obj)});
