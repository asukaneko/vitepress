# 命令列表

::: tip
__commands.py 中 设置了 ___命令注册装饰器___ ，可以自行添加命令__  
:::

```text
/jm <漫画ID> -> 下载漫画
/jmrank <月排行/周排行> -> 获取排行榜
/jm_clear -> 清除缓存
/search <内容> -> 搜索漫画
/tag <标签> -> 搜索漫画标签
/add_black_list 或 /abl  <漫画ID> -> 添加黑名单
/del_black_list 或 /dbl <漫画ID> -> 删除黑名单
/list_black_list 或 /lbl -> 查看黑名单
/add_global_black_list 或 /agbl <漫画ID> -> 添加全局黑名单(admin)
/del_global_black_list 或 /dgbl <漫画ID> -> 删除全局黑名单(admin)
/get_fav <用户名> <密码> -> 获取收藏夹(群聊请私聊)
/add_fav <漫画ID> -> 添加收藏
/del_fav <漫画ID> -> 删除收藏
/list_fav -> 查看收藏列表
/set_prompt 或者 /sp <提示词> -> 设定提示词
/del_prompt 或者 /dp -> 删除提示词
/get_prompt 或者 /gp -> 获取提示词
/del_message 或者 /dm -> 删除对话记录
/主动聊天 <间隔时间(小时)> <是否开启(1/0)> -> 开启主动聊天
/show_chat 或 /sc -> 发送完整聊天记录
/random_image 或者 /ri -> 随机图片
/random_emoticons 或者 /re -> 随机表情包
/st <标签名> -> 发送随机涩图,标签支持与或(& |)
/random_video 或者 /rv -> 随机二次元视频
/random_dice 或者 /rd -> 发送随机骰子
/random_rps 或者 /rps -> 发送随机石头剪刀布
/music <音乐名/id> -> 发送音乐
/random_music 或者 /rm -> 发送随机音乐
/dv <link> -> 下载视频
/di <link> -> 下载图片
/df <link> -> 下载文件
/mc <服务器地址> -> 发送mc服务器状态
/mc_bind <服务器地址> -> 绑定mc服务器
/mc_unbind -> 解绑mc服务器
/mc_show -> 查看绑定的mc服务器
/generate_photo 或 /gf <图片描述(不能有空格)> <大小> -> 生成图片
/restart -> 重启机器人(管理员)
/tts -> 开启或关闭TTS
/agree -> 同意好友请求
/set_admin <qq号> 或者 /sa <qq号> -> 设置管理员(root)
/del_admin <qq号> 或者 /da <qq号> -> 删除管理员(root)
/get_admin 或者 /ga -> 获取管理员
/set_ids <昵称> <个性签名> <性别> -> 设置账号信息(管理员)
/set_online_status <在线状态> -> 设置在线状态(管理员)
/get_friends -> 获取好友列表（管理员）
/set_qq_avatar <地址> -> 更改头像（管理员）
/send_like <目标QQ号> <次数> -> 发送点赞
/bot.api.函数名(参数1=值1,参数2=值2) -> 用户自定义api(admin)，详情可见https://docs.ncatbot.xyz/guide/p8aun9nh/
/shutdown -> 关闭机器人(管理员)
/set_group_admin <目标QQ号> -> 设置群管理员(admin)
/del_group_admin <目标QQ号> -> 取消群管理员(admin)
/findbook 或者 /fb <书名> -> 搜索并选择下载轻小说
/fa <作者> -> 搜索作者
/select <编号> -> 选择要下载的轻小说
/info <书名> -> 获取轻小说信息
/random_novel 或者 /rn -> 发送随机小说
/task </bot.api.xxxx(参数1=值1...)> <时间(小时)> <是否循环(1/0)> -> 设置定时任务(管理员)
/task </bot.api.xxxx(参数1=值1...)> <时间(小时)> <是否循环(1/0)> -> 设置定时任务(管理员)
/task </bot.api.xxxx(参数1=值1...)> <时间(小时)> <是否循环(1/0)> -> 设置定时任务(管理员)
/remind <时间(小时)> <内容> -> 定时提醒
/premind <MM-DD> <HH:MM> <内容> -> 精确时间提醒
/help 或者 /h -> 查看帮助
```
