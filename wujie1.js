/***************************************
[mitm]

hostname = *ate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/
let obj=$response.body;
const list1=["copyrightUserInfo","userMemberCardList","buyMemberCardList"];
if (list1[0] in obj){
    obj.copyrightUserInfo.availableBalance=9999;
    obj.copyrightUserInfo.nickname="by_恶魔破解";
    obj.copyrightUserInfo.userRoleInfo.aiArtist=true;
    obj.copyrightUserInfo.userRoleInfo.artist=true;
    obj.copyrightUserInfo.memberDetail.endTime=4102041723;
    obj.copyrightUserInfo.memberDetail.hold=true;
};
$done({body: JSON.stringify(obj)});
