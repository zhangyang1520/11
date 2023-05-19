
/***************************************

[mitm]

hostname = *keyboard*

[rewrite_local]


^http[s]?:\/\/api\.keyboard\.buzhedie\.com\/input\/member_info\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/2.js



***************************************/

var body = $response.body;
let obj = JSON.parse($response.body);
obj={
  "status": 1,
  "msg": "success",
  "error_code": 0,
  "data": {
    "is_vip": true,
    "vip_time": "9999-09-09到期",
    "nick_name": "by~恶魔魔",
    "avatar_url": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epictY2vEjTQ6WfVaWVKVp7F3RaZILw5X7tibrlsQgsIk88AQ7us4jcBmCfEP5M6fSpRJONaz192Hgw/132"
  }
}

$done({body: JSON.stringify(obj)});
