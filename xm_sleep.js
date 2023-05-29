/*********************************************************
[mitm]
hostname=*sleep.navolove.com*

[rewrite_local]
^http[s]?:\/\/sleep.navolove.com\/api\/refresh\_user\_info url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/xm_sleep.js
*********************************************************/
