/***************************************
[mitm]

hostname = *gate.wujiebantu.com*

[rewrite_local]
^http[s]?:\/\/gate\.wujiebantu\.com\/one\-graph\-auth\/graphql\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/wujie1.js

***************************************/

const c="copyrightUserInfo"
const p="accountModule"
var body = $response.body;
var obj = JSON.parse(body);


if(obj.data.hasOwnProperty(c)){
    obj.data[c].availableBalance=9999;
    obj.data[c].nickname="by_恶魔破解";
    obj.data[c].userRoleInfo.aiArtist=true;
    obj.data[c].userRoleInfo.artist=true;
    obj.data[c].memberDetail.endTime=4102041723;
    obj.data[c].memberDetail.hold=true;}else if(obj.data.hasOwnProperty(p)){
            obj= {
  "data" : {
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
            }};
$done({body: JSON.stringify(obj)});
