#  Neko bot 

> _a catgirl QQ bot for downloading comics and chatting with ai_

## Updates 更新<badge type="tip">v1.5.4</badge>  

详细查看[CHANGLOG.md](./changelog.md)

## 开始之前  
::: warning
若出现未知错误，请检查是否已安装最新版本的napcat和ncatbot  

若在命令行阶段无法安装napcat，请去[napcat下载页](https://github.com/NapNeko/NapCatQQ/releases/download/v4.8.95/NapCat.Shell.zip)下载最新版的NapCat.Shell.zip，解压到根目录，并把文件夹重命名为napcat 
:::

::: danger
**请勿直接将webui开放到公网，如有需求请设置强密码**
:::

::: info
环境为 <u>___windows___</u>  
建议使用 __小号__ 登录  
基于jmcomic和ncatbot开发  
有任何问题欢迎提issue，或发送给我的邮箱ycssbc@126.com  
:::


## <span class="marker-evy">快速开始</span>
### 下载源码 
```
git clone https://github.com/asukaneko/Ncatbot-comic-QQbot.git
```

### 安装依赖  
```
cd Ncatbot-comic-QQbot
pip install -r requirements.txt
```

### 更改配置
```
config.ini：修改账号、大模型api、图片保存等

option.yml: 修改漫画下载目录、下载方式等

urls.ini:(可不修改) 修改图片获取api地址, 如不修改则使用默认地址
```

### 运行 
```
python bot.py
```
命令行会提示下载napcat，然后扫码登录即可

## 提示 
+ 登录以后可在napcat\logs文件夹下找到webui的登录地址
+ ___如果你发现没有正常配置napcat，则打开网址：http://localhost:6099, token默认为napcat，然后登录，在网络配置那里新建一个websocket服务端，端口为默认的3001，然后保存即可___
+ 群聊使用 _/chat_ 命令或 _@机器人_ 即可聊天，私聊默认处理所有非命令消息为聊天
+ _大模型默认使用硅基流动的，新用户免费赠送15元_
+ 群聊想要ai处理图片，则先发图片，再回复自己的信息，回复内容必须要先@机器人
+ tts可以自己上传音色，详情看chat.py中注释
+ 可以更改neko.txt中的提示词，实现不同的角色

## 更多 
+ 支持图片识别，视频识别
+ 支持联网搜索，去https://opensearch.console.aliyun.com/cn-shanghai/rag/api-key 获取api和域名地址，可以免费使用
+ 支持多群聊以及用户自定义提示词
+ 群聊支持用户感知，聊天支持时间感知
+ 支持保存对话记录
+ 快速添加命令
+ 配置要求低，轻量，占用内存小

### 项目目录
```
.
│  bot.py
│  chat.py
│  config.ini
│  config.py
│  commands.py
│  LICENSE
│  neko.txt
│  number.txt
│  option.yml
│  README.md
│  requirements.txt
│  urls.ini
│  
├─logs
│      
├─napcat
│  ├─...... 
│  └─......
├─plugins
│
├─prompts
│  ├─group
│  └─user
├─saved_images
│      
├─saved_message
│
└─cache
    ├─comic
    ├─saved_images
    ├─list
    ├─fav
    ├─pdf
    └─......
```
