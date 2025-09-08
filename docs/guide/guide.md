# Neko bot 项目指南

## 项目概述
Neko bot 是一个基于 Napcat 的 QQ 机器人项目，主要功能包括群聊管理、多媒体内容识别（图片、视频、网页）、定时任务、收藏夹管理等。项目采用模块化设计，核心功能分布在多个 Python 文件中。

## 主要文件分析

### 1. bot.py
- **功能**：QQ 机器人主程序，处理各种消息类型
- **核心功能**：
  - 处理群组消息和私聊消息
  - 识别并处理图片、视频、JSON 等多媒体内容
  - 转发消息处理
- **示例代码**：
```python
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    # 处理群组消息
    if msg.raw_message.startswith("/chat"):
        content = chat(msg.raw_message, group_id=msg.group_id)
        await msg.reply(text=content)
```
```python{5,9}
# 命令处理循环
for command, handler in command_handlers.items():
    if isinstance(command, tuple):  # 处理命令别名情况
        for cmd in command:
            if re.match(rf'^{re.escape(cmd)}(?:\s|\.|$)', msg.raw_message):
                await handler(msg, is_group=True)
                _log.info(f"调用{cmd}命令")
                return
    elif re.match(rf'^{re.escape(cmd)}(?:\s|\.|$)', msg.raw_message): # 处理单个命令情况
        await handler(msg, is_group=False)
        _log.info(f"调用{command}命令")
        return
```

### 2. chat.py
- **功能**：聊天功能核心模块
- **核心功能**：
  - 与 大模型API 交互
  - 图片、视频、网页内容识别
  - 聊天记录管理
  - 在线搜索功能
- **示例代码**：
```python
def chat_image(iurl) -> str:
    """图片识别"""
    payload = {
        "model":pic_model,
        "messages": [{
            "role": "user",
            "content": [{"type": "image_url", "image_url": {"url": iurl}}]
        }]
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()["choices"][0]["message"]["content"]
```

### 3. commands.py
- **功能**：命令系统核心模块
- **核心功能**：
  - 命令注册与处理
  - 定时任务管理
  - 收藏夹功能
  - 管理员系统
- **示例代码**：
```python
def register_command(*command,help_text = None):
    """装饰器，用于注册命令"""
    def decorator(func):
        command_handlers[command] = func
        if help_text is not None:
            func.help_text = help_text
        return func
    return decorator

    ...

@register_command("/get_prompt","/gp",help_text = "/get_prompt 或者 /gp -> 获取提示词")
async def handle_get_prompt(msg, is_group=True):
    ...

```
::: info
一个命令可以有多个别名，例如 `/get_prompt` 和 `/gp` 都是获取提示词的命令。
:::

::: tip
bot api支持异步和同步两种写法，异步写法可以提高并发性能，同步写法则更灵活。两者调用的函数的区别仅在函数末尾的sync后缀。  
异步函数需要使用`await`关键字调用，同步函数则直接调用。  
当非命令处理函数中需要用到bot api时，就只能使用同步方法  
::: code-group
```python [异步写法] {3}
@register_command("/get_prompt","/gp",help_text = "/get_prompt 或者 /gp -> 获取提示词")
async def handle_get_prompt(msg, is_group=True):
    await bot.send_group_msg(group_id=msg.group_id, message="获取提示词")
    ...
```

```python [同步写法] {3}
@register_command("/get_prompt","/gp",help_text = "/get_prompt 或者 /gp -> 获取提示词")
async def handle_get_prompt(msg, is_group=True):
    bot.send_group_msg_sync(group_id=msg.group_id, message="获取提示词")
    ...
```
:::


## 配置文件
- `config.ini`：API 密钥和基础配置
- `option.yml`：插件配置
- `emotions.json`：表情映射数据
- `neko.txt`：默认提示词配置
- `admin.txt`：管理员配置
- `novel_details2.json`：小说详情配置
- `requirements.txt`：项目依赖、
- `urls.ini`：自定义URL配置

## 数据存储
- `saved_message/`：聊天记录存储
- `cache/`：缓存目录
  - `comic/`：漫画缓存
  - `pdf/`：保存的漫画PDF
  - `rank/`：排行榜缓存

## 项目结构
```
├── bot.py          # 主程序
├── chat.py         # 聊天核心
├── commands.py     # 命令系统
├── config.py       # 配置加载
├── data/           # 数据存储
├── saved_message/  # 聊天记录
└── requirements.txt # 依赖
```

## 快速开始
1. 安装依赖：`pip install -r requirements.txt`
2. 配置 `config.ini` 文件
3. 运行主程序：`python bot.py`

## 扩展功能
- 可通过 `register_command` 装饰器添加新命令
- 定时任务系统支持精确时间和循环任务，可调用现有的函数
- 多媒体识别支持图片、视频、网页等多种格式

## 文档帮助
<Linkcard url="https://docs.ncatbot.xyz/" title="Ncatbot 文档" description="https://docs.ncatbot.xyz/" logo="https://images.icon-icons.com/112/PNG/96/python_18894.png" />
<Linkcard url="https://napneko.github.io" title="Napcat" description="https://napneko.github.io/" logo="https://napneko.github.io/assets/newnewlogo.png"/>
<Linkcard url="https://jmcomic.readthedocs.io/zh-cn/latest/" title="JMComic" description="https://jmcomic.readthedocs.io/zh-cn/latest/" logo="https://images.icon-icons.com/112/PNG/96/python_18894.png"/>
<Linkcard url="https://www.runoob.com/python3/python-asyncio.html" title="Python 异步教程" description="https://www.runoob.com/python3/python-asyncio.html" logo="https://www.runoob.com/favicon.ico"/>