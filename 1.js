[mitm]

hostname = *keyboard*

[rewrite_local]


^http[s]?:\/\/api\.keyboard\.buzhedie\.com\/input\/member_info\/.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/1.js



***************************************/

var body = $response.body;
let obj = JSON.parse($response.body);
obj={
  "status": 1,
  "msg": "success",
  "error_code": 0,
  "data": {
    "is_vip": true,
    "vip_time": "2999-09-09到期",
    "nick_name": "by~恶魔",
    "avatar_url": "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg"
  }
}
