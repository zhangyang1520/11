[mitm]

hostname = *keyboard*

[rewrite_local]


^http[s]?:\/\/api\.keyboard\.buzhedie\.com\/input\/member_info\/.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/buzd.js



***************************************/
var body = $response.body;
body = JSON.parse(body);
body.data.is_vip = true;
body.data.vip_time = "2999-09-09到期";
body.data.nick_name = "by~恶魔";
body.data.avatar_url = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
$done({body: JSON.stringify(body)});
