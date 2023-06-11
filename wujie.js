/**************************************

[mitm]

hostname = *ate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie.js

***************************************/
let obj=$response.body;
const list1=["copyrightUserInfo","userMemberCardList","buyMemberCardList"];
for (let i of obj){
    if(i=== list1[0]){
        obj.copyrightUserInfo.availableBalance =9999;
        obj. copyrightUserInfo.nickname="by_恶魔破解";
        obj. copyrightUserInfo.userRoleInfo.aiArtist=true;
        obj. copyrightUserInfo.userRoleInfo.artist=true;
        obj. copyrightUserInfo.memberDetail.endTime= 4102041723;
        obj. copyrightUserInfo.memberDetail.hold= true;
    } else if(i===list1[1]){
        obj={
            "accountModule" : {
                "userMemberCardList" : [
                    {
                        "__typename" : "MemberCard",
                        "cardType" : "ORIGIN_CARD",
                        "name" : "AI魔法体验卡",
                        "hold" : true
                    },
                    {
                        "__typename" : "MemberCard",
                        "cardType" : "PLATINUM_CARD",
                        "name" : "铂金权益卡",
                        "hold" : true
                    }
                ],
                "__typename" : "AccountModuleQuery"
            }
        };
    }
}
$done({body: JSON.stringify(obj)});
