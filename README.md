##目录结构
<pre>
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│
├─node_modules
│
│
├─config               # 相关配置
│    │
│    │  env.js         # 指定当前环境
│    └─ config.js      # 配置文件,比如MySQL/redis等
│
├─lib                  # 工具
│
├─model                # 即Model层,用来定义数据库的表/字段/类型/索引
│    │
│    │  base.js        # model基类,这里粗略的用时间戳来生成数据库的id字段
│    └─ user.js        # 一个用户数据表的demo
│
├─script               # 一次性执行的一些脚本,比如建表/修复数据等
│    │
│    │  creat_all_tables.js              # 运行即创建数据表
│    └─ init.sql                         # 创建数据库的sql语句,可用mysql指令执行
│
├─web                                    # web文件和api,express入口文件等
│  │
│  ├─handler                             # 即Controller层,路由
│  │    │
│  │    ├─  base_handler.js              # 基类,权限验证,及接口JSON返回和html返回的封装
│  │    │
│  │    ├─  sign_handler.js              # 一个打开用户注册页面的demo
│  │    │
│  │    └─  user_handler.js              # 一个用户注册和登录接口的demo
│  │
│  ├─helper
│  │    │
│  │    └─  status_code.js               # 接口状态码
│  │
│  ├─static                              # 静态文件,这里主要是前端用的,可根据自己的技术栈选型
│  │    │
│  │    ├─css
│  │    │
│  │    ├─image
│  │    │
│  │    └─js
│  │
│  ├─template                            # 即View层
│  │    │
│  │    └─  signup.ejs                   # 使用ejs模板,即我们的后端需要渲染的html,如果是SPA应用,则一般不需要这个
│  │
│  └─ main.js                            # 服务入口文件
│
└─api                                    # 与web类似,如果需要可以将API单独从web分离,比如SPA
</pre>


##说明


##安装
```
npm install
```

##运行
```
npm run start
```

##建数据表
```
npm run tables
```

####访问
在浏览器地址栏输入http://127.0.0.1:9800/signup
