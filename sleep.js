/*********************************************************
[mitm]
hostname=*sleep.navolove.com*

[rewrite_local]
^http[s]?:\/\/sleep.navolove.com\/api\/refresh\_user\_info url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xm_sleep.js
*********************************************************/
var body = $response.body;
let obj = JSON.parse($response.body);
obj={
  "message" : "success",
  "data" : {
    "login_type" : "wechat",
    "source" : "",
    "birthday" : "",
    "invite_code" : "33011331",
    "range_age" : "",
    "sleep_total_time" : 0,
    "nickname" : "实则物欲不入",
    "wx_openid" : "",
    "default_group_banner" : "https://hwcdn.navoinfo.cn/resource/Now/love_planet/default_group_banner.png",
    "sleep_average_time" : 0,
    "sleep_remind" : 0,
    "reg_days" : 1,
    "sleep_average_quality" : 0,
    "sleep_remind_status" : {
      "status" : 0,
      "remind_time" : ""
    },
    "is_svip" : true,
    "id" : 93587,
    "unionid" : "odadhwdT-_VJEsJ7zSghtV0iSvvc",
    "platform" : "ios",
    "gender" : "female",
    "is_vip" : true,
    "wx_new_openid" : "",
    "avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqL2Q1E7S9pfo1x8dUkH5pZywdZNL05NN6J0BeFvU0aK27Fu6ohs5X2RafIjzARYfkEqMW81YbjlQ/132",
    "continue_day_count" : 0,
    "is_wx_reg" : 0,
    "created_at" : "2023-05-29T01:05:06.000000Z",
    "expiration" : "年费会员",
    "expiration_time" : "2099-09-29T01:05:06.000000Z",
    "username" : "oc-aa5n670t_WPEGc2kmsWy34X8I"
  },
  "code" : 200
}

$done({body: JSON.stringify(obj)});你帮我看看有没有错
